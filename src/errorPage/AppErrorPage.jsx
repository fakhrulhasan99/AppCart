import React from 'react';
import AppErrorPic from "../assets/App-Error.png"
import { Link } from 'react-router';

const AppErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center max-w-80 mx-auto'>
            <img src={AppErrorPic} alt="" />
            <h2 className='text-4xl font-bold py-4'>OPPS!! APP NOT FOUND</h2>
            <p className='text-xl text-slate-500'>The App you are requesting is not found on our system.  please try another apps</p>
            <Link to={"/"} className='btn my-6 bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white'>Go Back to Home!</Link>
        </div>
    );
};

export default AppErrorPage;