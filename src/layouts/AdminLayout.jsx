import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const AdminLayout = () => {
  

  return (
    <>
    <div className='flex bg-white md:bg-transparent gap-8'>
      <Sidebar />
      
      <div className="container mx-auto mt-4 bg-[#f5f5f5]">
        <Outlet />
      </div>
    </div>
     
    </>
  );
};

export default AdminLayout;
