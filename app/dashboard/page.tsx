'use client'
import Nav from '../components/Nav'
import Balance from '../components/Balance'
import PayDocker from '../components/PayDocker'
import NotifyDocker from '../components/NotifyDocker'
import ActionDocker from '../components/ActionDocker'
import { useSearchParams } from 'next/navigation'
import VerifyDocker from '../components/VerifyDocker'
import { useEffect, useState } from 'react'
import { supabase } from '../utils/Supabase'

const Dashboard = () => {
  const searchParams = useSearchParams();
  const n = searchParams.get('n');

  const [user, setUser] = useState<any>()

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
  
      const {userID} = await response.json();

      const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('user_id', userID);

      setUser(data)

      console.log(user)
  

    } catch (error) {
      console.error('Error:', error);
      // You can handle the error or provide user feedback here
    }
  };

  useEffect(
    () => {
      fetchUser()
    }, [user]
  )
  

  return (
    <div className='dashboard'>
      <Nav/>

      <Balance balance={'0'}/>
      
      {n == 'action' && <ActionDocker/>}
      {n == 'notify' && <NotifyDocker/>}
      {n == 'verify' && <VerifyDocker/>}
      
      <PayDocker/>
    </div>
  )
}

export default Dashboard