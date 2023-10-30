'use client'
import Nav from '../components/Nav'
import Balance from '../components/Balance'
import PayDocker from '../components/PayDocker'
import NotifyDocker from '../components/NotifyDocker'
import ActionDocker from '../components/ActionDocker'
import { useSearchParams } from 'next/navigation'
import VerifyDocker from '../components/VerifyDocker'
import { useEffect, useState } from 'react'
// import { useEffect, useState } from 'react'

const Dashboard = async () => {
  const searchParams = useSearchParams();
  const n = searchParams.get('n');

  const [user, setUser] = useState<any[] | null>([])

  const fetchUser = async () => {
    const response = await fetch('/api/user', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const data = await response.json()
    console.log(data)
    setUser(data)
  }
  
  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <div className='dashboard'>
      <Nav/>

      <Balance balance={user ? user[0].balance : null}/>
      
      {n == 'action' && <ActionDocker/>}
      {n == 'notify' && <NotifyDocker/>}
      {n == 'verify' && <VerifyDocker/>}
      
      <PayDocker/>
    </div>
  )
}

export default Dashboard