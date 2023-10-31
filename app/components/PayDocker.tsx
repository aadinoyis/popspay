'use client'
import { useState } from "react";
import Link from "next/link";
import { RoundSpinner } from "./Loader";
import NotifyDocker from "./NotifyDocker";

const PayDocker = ({userId}:any) => {
  // Assume you have imported 'fetch' or 'axios' or use your preferred HTTP client library
  const [receiverEmail, setReceiverEmail] = useState('')
  const [amount, setAmount] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isNotify, setIsNotify] = useState(false)
  const [notify, setNotify] = useState(''); // Use state for 'notify'

  // Define the transaction data
  const transactionData = {
    senderID: userId, // Replace with the actual sender user ID
    receiverEmail: receiverEmail, // Replace with the receiver's email
    amount: amount, // Replace with the transaction amount
  };

  const sendCash = async ()  => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/sendcash', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(transactionData),
    })

    const data = await response.json()
    console.log(data)
    if (data.message) {
      setNotify('sent'); // Update the 'notify' state

      setIsLoading(false);
      setIsNotify(true);
      // setTimeout(() => {
      //   setIsNotify(false);
      // }, 5000);
    }
    if (data.error) {
      setNotify('declined'); // Update the 'notify' state

      setIsLoading(false);
      setIsNotify(true);
      // setTimeout(() => {
      //   setIsNotify(false);
      // }, 5000);
    }
    } catch (error) {
      console.error('Transaction failed:', error);
    }
  }

  return (
    <>    
    <div style={{
      width: '100%',
      maxWidth: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      padding: '2rem',
      background: 'var(--color-black-100)',
      borderRadius: 'var(--radius)',
      }}>
      <div className='inp_bar' style={{
        borderTopLeftRadius: 'var(--radius)',
        borderTopRightRadius: 'var(--radius)',
        }}>
        
        <button className="icon_box">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="512"
            height="512"
            x="0"
            y="0"
            enableBackground="new 0 0 512 512"
            version="1.1"
            viewBox="0 0 512 512"
            xmlSpace="preserve"
          >
            <circle cx="256" cy="128" r="128"></circle>
            <path d="M256 298.667c-105.99.118-191.882 86.01-192 192C64 502.449 73.551 512 85.333 512h341.333c11.782 0 21.333-9.551 21.333-21.333-.117-105.99-86.009-191.883-191.999-192z"></path>
          </svg>
        </button>

        <input type="text" name="recepient" id="recepient" placeholder="user@mail.com" value={receiverEmail} onChange={e => setReceiverEmail(e.target.value)}/>


        <button style={{marginRight: '.7rem'}}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="512"
            height="512"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            fill="var(--color-off)"
          >
            <path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm6.2 10.512l-4.426 4.345a3.984 3.984 0 01-2.8 1.151 3.984 3.984 0 01-2.776-1.129l-1.899-1.867a1 1 0 111.402-1.426l1.893 1.861c.776.75 2.001.746 2.781-.018L16.8 9.085a.999.999 0 111.4 1.427z"></path>
          </svg>
        </button>
      </div>

      <div className='inp_bar' style={{
        borderBottomLeftRadius: 'var(--radius)',
        borderBottomRightRadius: 'var(--radius)',
        }}>
        <button className='icon_box'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="512"
            height="512"
            data-name="Layer 1"
            viewBox="0 0 24 24"
          >
            <path d="M22.5 10.5H22v-9c0-.83-.67-1.5-1.5-1.5S19 .67 19 1.5v9h-6.18L6.95 1.24A2.672 2.672 0 003.93.11 2.667 2.667 0 002 2.69v7.81h-.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5H2v9c0 .83.67 1.5 1.5 1.5S5 23.33 5 22.5v-9h6.18l5.87 9.26a2.672 2.672 0 003.02 1.13A2.667 2.667 0 0022 21.31V13.5h.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5zM5 10.5V3.76l4.27 6.74H5zm14 9.74l-4.27-6.74H19v6.74z"></path>
          </svg>
        </button>

        <input type="text" name="amount" id="amount" placeholder="00.00" value={amount} onChange={e => setAmount(e.target.value)}/>
        
        <button onClick={sendCash} className='btn_pri'>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="512"
            height="512"
            data-name="Layer 1"
            viewBox="0 0 24 24"
          >
            <path d="M5.521 19.9h5.322l3.519 3.515a2.035 2.035 0 001.443.6 2.1 2.1 0 00.523-.067 2.026 2.026 0 001.454-1.414l6.207-21.109zM4.087 18.5L22.572.012 1.478 6.233a2.048 2.048 0 00-.886 3.42l3.495 3.492z"></path>
          </svg>
        </button>
      </div>
    </div>

    {isLoading && <RoundSpinner />}
    {isNotify && <NotifyDocker status={notify}/>}
    </>
  )
}

export default PayDocker