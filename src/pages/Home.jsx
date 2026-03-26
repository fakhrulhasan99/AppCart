import React, { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router';
import Banner from '../components/Banner';
import AppCard from '../components/AppCard';

const Home = () => {

    const apps = useLoaderData();
    useEffect(() => {
        document.title = "Home | Doc Talk";
    })
    // console.log(data)

    return (
        <div className='bg-slate-200'>
            <Banner data={apps} />
            <div className="max-w-300 mx-auto px-4 py-10">
                <h1 className="text-3xl font-bold text-center">
                    Trending Apps
                </h1>
                <p className='text-xl mb-6 text-slate-500 text-center'>
                    Explore All Trending Apps on the Market developed by us
                </p>
                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {apps
                        .slice() // copy array (important)
                        .sort((a, b) => b.downloads - a.downloads) // highest first
                        .slice(0, 8) // take top 8
                        .map((app) => (
                            <AppCard key={app.id} app={app} />
                        ))}
                </div>
                <div className='text-center pt-8'>
                    <Link to={"/apps"} className='btn bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white'>Show All</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;