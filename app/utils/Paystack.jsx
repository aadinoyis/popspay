import PaystackPop from '@paystack/inline-js';

export const payWithPaystack = (email, amount) => {

  const paystack = new PaystackPop();
  paystack.newTransaction({
    // other params
    key: process.env.NEXT_PUBLIC_PAYSTACK_KEY,
    email: email,
    amount: amount * 1000,
  
    onSuccess: (transaction) => { 
      // Payment complete! Reference: transaction.reference
      const ref = transaction.reference
      console.log(ref)

      const fundWallet = async ()  => {
        setIsLoading(true)
        try {
          const response = await fetch('/api/fund', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ref, email, amount}),
        })
    
        const data = await response.json()
        if (data.message) {
          console.log(data.message)
        }
        if (data.error) {
          console.log(data.error)
        }
        } catch (error) {
          console.error('Transaction failed:', error);
        }
      }
      fundWallet()
      
    },
    
    onCancel: () => {
      // user closed popup
    }
  });
}