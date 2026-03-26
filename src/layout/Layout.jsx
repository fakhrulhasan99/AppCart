import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import { ToastContainer } from 'react-toastify';

const Layout = () => {
    return (
        <div className='mx-auto'>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                theme="light"
            />
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Layout;