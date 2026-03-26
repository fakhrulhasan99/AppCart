import React from "react";
// import { apps } from "../data/apps";
import { getAppStats } from "../utils/stats";
import { formatNumber } from "../utils/formatNumber";
import HeroPic from "../assets/hero.png"

const Banner = ({ data }) => {
    const { totalDownloads, totalReviews, totalApps } = getAppStats(data);

    return (
        <div className="flex flex-col items-center bg-[#D2D2D2] pt-10 lg:pt-20 mb-10lg
        mb-20">
            <div className="text-center max-w-300 mx-auto p-4">
                <h1 className="text-4xl font-bold pb-4">
                    We Build <span className="text-transparent bg-clip-text bg-linear-to-r from-[#632EE3] to-[#9F62F2]">Productive </span>
                    Apps
                </h1>
                <p className="text-xl text-slate-700">
                    At AppCart, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.
                </p>

            </div>
            <div className="max-w-300 mx-auto p-4 pb-0">
                <img className="max-w-xl w-full"
                    src={HeroPic}
                    alt="" />
            </div>
            <div className="w-full text-center py-16 bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white p-4">
                <div className="max-w-300 mx-auto">
                    <h1 className="text-4xl font-bold">
                        Trusted By Millions, Built For You
                    </h1>
                    <p className="mt-4 max-w-xl mx-auto">
                        Innovative apps designed to make everyday life simpler and smarter.
                    </p>
                    {/* Stats Section */}
                    <div className="grid grid-cols-3 mt-12 gap-6">
                        <div>
                            <h2 className="text-3xl font-bold">
                                {formatNumber(totalDownloads)}
                            </h2>
                            <p className="text-sm">Total Downloads</p>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold">
                                {formatNumber(totalReviews)}
                            </h2>
                            <p className="text-sm">Total Reviews</p>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold">
                                {totalApps}+
                            </h2>
                            <p className="text-sm">Active Apps</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;