import React from 'react';
import ErrorPic from "../assets/error-404.png"
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center max-w-80 mx-auto'>
            <img src={ErrorPic} alt="" />
            <h2 className='text-4xl font-bold py-4'>OPPS!! PAGE NOT FOUND</h2>
            <p className='text-xl text-slate-500'>The page you are looking for is not available.</p>
            <Link to={"/"} className='btn my-6 bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white'>Go Back to Home!</Link>
        </div>
    );
};

export default ErrorPage;