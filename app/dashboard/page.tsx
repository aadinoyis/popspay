import React from 'react'
import Nav from '../components/Nav'
import Balance from '../components/Balance'
import PayDocker from '../components/PayDocker'
import Notify from '../components/Notify'

const Dashboard = () => {
  return (
    <main>
      <Nav/>

      <Balance/>

      
      <Notify/>

      <PayDocker/>
    </main>
  )
}

export default Dashboard