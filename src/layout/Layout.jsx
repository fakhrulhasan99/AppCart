import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import { ToastContainer } from 'react-toastify';
import Footer from '../components/Footer';

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
            <Footer/>
        </div>
    );
};

export default Layout;