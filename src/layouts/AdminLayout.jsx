import React from 'react'
import { Outlet } from 'react-router-dom'

import Sidebar from '../components/Sidebar'

const AdminLayout = () => {
  return (
    <React.Fragment className='flex bg-[#f5f5f5]'>
      <Sidebar />
    </React.Fragment>
  )
}

export default AdminLayout