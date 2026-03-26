import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';

const Layout = () => {
    return (
        <div className='mx-auto'>
            <Header />
            <Outlet/>
        </div>
    );
};

export default Layout;