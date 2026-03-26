import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';

const Layout = () => {
    return (
        <div className='mx-auto'>
            <Navbar />
            <Outlet/>
        </div>
    );
};

export default Layout;