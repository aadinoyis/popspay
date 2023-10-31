'use client'
import Nav from '../components/Nav'
import Balance from '../components/Balance'
import PayDocker from '../components/PayDocker'
// import NotifyDocker from '../components/NotifyDocker'
// import ActionDocker from '../components/ActionDocker'
// import { useSearchParams } from 'next/navigation'
// import VerifyDocker from '../components/VerifyDocker'
import { useEffect, useState } from 'react'

const Dashboard = () => {
  // const searchParams = useSearchParams();
  // const n = searchParams.get('n');

  const [user, setUser] = useState<any[] | null>([])

  useEffect(() => {
    getUser()
  }, [])
  
  const getUser = async () => {
    try {
      const response = await fetch('/api/user', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const { data } = await response.json();

      setUser(data);

      console.log(data[0])

    } catch (error) {
      console.error('Error:', error);
      // You can handle the error or provide user feedback here
    }
  };

  return (
    <div className='dashboard'>
      <Nav/>

      <Balance balance={user ? user[0].balance : '-'}/>
      
      {/* {n == 'action' && <ActionDocker/>}
      {n == 'notify' && <NotifyDocker/>}
      {n == 'verify' && <VerifyDocker/>} */}
      
      <PayDocker/>
    </div>
  )
}

export default Dashboard