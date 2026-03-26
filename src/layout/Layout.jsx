import React, { useEffect, useState } from 'react';
import { Outlet, useNavigation } from 'react-router';
import Navbar from '../components/Navbar';
import { ToastContainer } from 'react-toastify';
import Footer from '../components/Footer';
import Loader from '../pages/Loader';

const Layout = () => {
    const navigation = useNavigation();
    const [showLoader, setShowLoader] = useState(false);

    useEffect(() => {
        let timer;

        if (navigation.state === "loading") {
            timer = setTimeout(() => setShowLoader(true), 200);
        } else {
            setShowLoader(false);
        }

        return () => clearTimeout(timer);
    }, [navigation.state]);

    return (
        <div className='mx-auto'>
            {showLoader && <Loader />}

            <ToastContainer
                position="top-right"
                autoClose={2000}
                theme="light"
            />

            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;