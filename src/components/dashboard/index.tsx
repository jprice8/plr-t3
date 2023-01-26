import React from 'react'
import DashboardPanel from './DashboardPanel';
import DashboardStats from './DashboardStats';

const Dashboard = () => {
  return (
    <div className='w-screen'>
      <DashboardPanel />
      <DashboardStats />
    </div>
  )
}

export default Dashboard