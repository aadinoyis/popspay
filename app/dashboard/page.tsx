'use client'
import Nav from '../components/Nav'
import Balance from '../components/Balance'
import PayDocker from '../components/PayDocker'
import NotifyDocker from '../components/NotifyDocker'
import ActionDocker from '../components/ActionDocker'
import { useSearchParams } from 'next/navigation'
import VerifyDocker from '../components/VerifyDocker'
import { useEffect, useState } from 'react'

const Dashboard = async () => {
  const searchParams = useSearchParams();
  const n = searchParams.get('n');

  const [user, setUser] = useState<any | null>([])

  const fetchUser = async () => {
    try {
      const response = await fetch('/api/user', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const { data } = await response.json();

      setUser(data);
    } catch (error) {
      console.error('Error:', error);
      // You can handle the error or provide user feedback here
    }
  };

  useEffect(
    () => {
      fetchUser()
    }, []
  )

  useEffect(
    () => {
      console.log(user)
    }, [user]
  )
  

  return (
    <div className='dashboard'>
      <Nav/>

      <Balance balance={user ? user : '-'}/>
      
      {n == 'action' && <ActionDocker/>}
      {n == 'notify' && <NotifyDocker/>}
      {n == 'verify' && <VerifyDocker/>}
      
      <PayDocker/>
    </div>
  )
}

export default Dashboard