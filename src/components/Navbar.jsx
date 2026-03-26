import React from 'react';
import { Link } from 'react-router';
import { NavLink } from 'react-router';
import { FaGithub } from "react-icons/fa";
import Logo from '../assets/logo.png'

const Navbar = () => {
    const links =
        <>
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/apps'}>Apps</NavLink></li>
            <li><NavLink to={'/installation'}>Installation</NavLink></li>
        </>

    return (
        <div className="max-w-300 mx-auto">
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <div className='flex items-center'>
                        <img className='w-8' src={Logo} alt="Logo" />
                        <Link to={'/'} className="btn btn-ghost text-xl">AppCart</Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a
                        href="https://github.com/fakhrulhasan99"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2]">
                        <FaGithub /> Contribute
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;