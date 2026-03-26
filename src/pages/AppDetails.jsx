import React, { useEffect } from 'react';
import { useLoaderData, useParams } from "react-router";
import { toast } from "react-toastify";
import { useState } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import DownloadIcon from "../assets/icon-downloads.png"
import ReviewsIcon from "../assets/icon-review.png"
import RatingsIcon from "../assets/icon-ratings.png"
import Loader from './Loader';

const AppDetails = () => {

    const apps = useLoaderData();
    const { id } = useParams();
    const app = apps.find((a) => a.id === parseInt(id));

    const [installed, setInstalled] = useState(false);

    useEffect(() => {
        if (!app) return;
        const installedApps = JSON.parse(localStorage.getItem("installedApps")) || [];

        const isInstalled = installedApps.some(a => a.id === app.id);
        setInstalled(isInstalled);
    }, [app]);

    const handleInstall = () => {
        const installedApps = JSON.parse(localStorage.getItem("installedApps")) || [];

        const isAlreadyInstalled = installedApps.some(a => a.id === app.id);

        if (isAlreadyInstalled) return; // 🚫 prevent duplicate + toast

        const updatedApps = [...installedApps, app];
        localStorage.setItem("installedApps", JSON.stringify(updatedApps));

        setInstalled(true);
        toast.success("App Installed Successfully!");
    };
    if (!app) {
        return <Loader/>;
    }

    const sortedRatings = [...app.ratings].sort(
        (a, b) => b.count - a.count
    );


    return (
        <div className='bg-slate-200'>
            <div className="max-w-5xl mx-auto p-6 space-y-8">

                {/* Top Section */}
                <div className="border-b border-dotted p-6 flex flex-col md:flex-row gap-6 items-center">

                    <img src={app.image} className="w-70 h-70" />

                    <div className="flex flex-col">
                        <div className='border-b border-dotted py-2'>
                            <h1 className="text-2xl font-bold">{app.title}</h1>
                            <p className="text-gray-500">Developed by {app.companyName}</p>
                        </div>
                        {/* Stats */}
                        <div className="flex gap-8 mt-4">
                            <div>
                                <img className='w-10' src={DownloadIcon} alt="" />
                                <p className="text-sm">Downloads</p>
                                <p className="font-bold">{(app.downloads / 1e6).toFixed(0)}M</p>
                            </div>
                            <div>
                                <img className='w-10' src={RatingsIcon} alt="" />
                                <p className="text-sm">Average Ratings</p>
                                <p className="font-bold">{app.ratingAvg}</p>
                            </div>
                            <div>
                                <img className='w-10' src={ReviewsIcon} alt="" />
                                <p className="text-sm">Total Reviews</p>
                                <p className="font-bold">{(app.reviews / 1e3).toFixed(0)}K</p>
                            </div>
                        </div>
                        {/* Install Button */}
                        <button
                            onClick={handleInstall}
                            disabled={installed}
                            className={`mt-4 px-4 py-2 rounded text-white ${installed ? "bg-gray-400" : "bg-green-500"
                                }`}
                        >
                            {installed ? "Installed" : `Install Now (${app.size} MB)`}
                        </button>
                    </div>
                </div>
                {/* Ratings Chart */}
                <div className="border-b border-dotted p-6">
                    <h2 className="mb-4 font-semibold">Ratings</h2>

                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart
                            data={sortedRatings}
                            layout="vertical"   // 🔥 makes bars horizontal
                            margin={{ top: 10, right: 20, left: 20, bottom: 10 }}
                        >

                            <XAxis type="number" axisLine={false} tickLine={false} />
                            <YAxis type="category" dataKey="name" axisLine={false} tickLine={false} />

                            <Tooltip />

                            <Bar
                                dataKey="count"
                                fill="#f97316"   // orange
                                radius={[0, 6, 6, 0]} // rounded right side
                                barSize={20}
                            />

                        </BarChart>
                    </ResponsiveContainer>
                </div>
                {/* Description */}
                <div className="p-6">
                    <h2 className="font-semibold mb-3">Description</h2>
                    <p className="text-gray-600 leading-relaxed">
                        {app.description}
                    </p>
                </div>
            </div>
        </div >
    );
};

export default AppDetails;