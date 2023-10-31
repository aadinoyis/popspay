'use client'
import Nav from '../components/Nav'
import Balance from '../components/Balance'
import PayDocker from '../components/PayDocker'

import { useEffect, useState } from 'react'

const Dashboard = () => {

  const [user, setUser] = useState([{email: '', user_id: '', balance: 0}])

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

    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='dashboard'>
      <Nav/>

      <Balance balance={user[0].balance} email={user[0].email}/>
      
      <PayDocker userId={user[0].user_id} />
    </div>
  )
}

export default Dashboard