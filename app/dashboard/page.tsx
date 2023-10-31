'use client'
import Nav from '../components/Nav'
import Balance from '../components/Balance'
import PayDocker from '../components/PayDocker'
import NotifyDocker from '../components/NotifyDocker'
import ActionDocker from '../components/ActionDocker'
import { useSearchParams } from 'next/navigation'
import VerifyDocker from '../components/VerifyDocker'

const Dashboard = () => {
  const searchParams = useSearchParams();
  const n = searchParams.get('n');

  let user:any;

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
  
      const data = await response.json();

      console.log(data[0]);
      user = data[0]
      console.log(user)

    } catch (error) {
      console.error('Error:', error);
      // You can handle the error or provide user feedback here
    }
  };



  return (
    <div className='dashboard'>
      <Nav/>

      <Balance balance={user ? user!.balance : '-'}/>
      
      {n == 'action' && <ActionDocker/>}
      {n == 'notify' && <NotifyDocker/>}
      {n == 'verify' && <VerifyDocker/>}
      
      <PayDocker/>
    </div>
  )
}

export default Dashboard