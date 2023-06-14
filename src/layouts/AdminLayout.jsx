import React from 'react'
import { Outlet } from 'react-router-dom'

import Sidebar from '../components/Sidebar'

const AdminLayout = () => {
  return (
    <React.Fragment className='flex'>
      <Sidebar />
    </React.Fragment>
  )
}

export default AdminLayout