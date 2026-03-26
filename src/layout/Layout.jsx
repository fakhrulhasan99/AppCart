import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Navbar from '../components/Navbar';
import { ToastContainer } from 'react-toastify';
import Footer from '../components/Footer';
import Loader from '../pages/Loader';

const Layout = () => {

    const navigation = useNavigation();

    return (
        <div className='mx-auto'>
            {navigation.state === "loading" && <Loader/>}
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