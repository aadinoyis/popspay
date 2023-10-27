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
  
  return (
    <main>
      <Nav/>

      <Balance/>
      
      {n == 'action' && <ActionDocker/>}
      {n == 'notify' && <NotifyDocker/>}
      {n == 'verify' && <VerifyDocker/>}
      
      {/* <Notify/> */}

      <PayDocker/>
    </main>
  )
}

export default Dashboard