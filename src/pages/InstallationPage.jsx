import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const InstallationPage = () => {
    const [installedApps, setInstalledApps] = useState([]);
    const [sortOption, setSortOption] = useState("default");

    useEffect(() => {
        const apps = JSON.parse(localStorage.getItem("installedApps")) || [];
        setInstalledApps(apps);
    }, []);

    // 🔥 Uninstall handler
    const handleUninstall = (id) => {
        const updatedApps = installedApps.filter(app => app.id !== id);
        setInstalledApps(updatedApps);
        localStorage.setItem("installedApps", JSON.stringify(updatedApps));
        toast.info("App Uninstalled");
    };
    const sortedApps = [...installedApps].sort((a, b) => {
        if (sortOption === "high") {
            return b.downloads - a.downloads; // High → Low
        }
        if (sortOption === "low") {
            return a.downloads - b.downloads; // Low → High
        }
        return 0; // Default (as added)
    });

    if (installedApps.length === 0) {
        return <p className="text-center text-4xl mt-10">No Apps Installed Yet</p>;
    }

    return (
        <div className="max-w-5xl mx-auto p-6 space-y-6 bg-slate-200 rounded-2xl">
            <h1 className="text-2xl text-center font-bold">Installed Apps</h1>
            <p className="text-slate-500 text-center">
                Explore All Trending Apps on the Market developed by us
            </p>
            <div className="flex justify-between items-center flex-wrap gap-3">

                <p className="text-lg font-bold">
                    Installed Apps ({sortedApps.length})
                </p>

                <select
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                    className="w-full sm:w-auto max-w-xs px-3 py-2 border rounded-lg outline-none"
                >
                    <option value="default">Default</option>
                    <option value="high">Downloads: High → Low</option>
                    <option value="low">Downloads: Low → High</option>
                </select>

            </div>

            {sortedApps.map((app) => (
                <div
                    key={app.id}
                    className="flex items-center justify-between p-4 bg-white rounded-lg shadow"
                >
                    {/* LEFT SIDE */}
                    <div className="flex items-center gap-4">
                        <img
                            src={app.image}
                            alt={app.title}
                            className="w-20 h-20 rounded"
                        />

                        <div className="space-y-1">
                            <h2 className="font-semibold text-lg">
                                {app.title}
                            </h2>

                            <p className="text-sm text-gray-500">
                                {(app.downloads / 1e6).toFixed(0)}M Downloads
                            </p>

                            <p className="text-sm text-gray-500">
                                ⭐ {app.ratingAvg} Ratings
                            </p>

                            <p className="text-sm text-gray-500">
                                {app.size} MB
                            </p>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <button
                        onClick={() => handleUninstall(app.id)}
                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                    >
                        Uninstall
                    </button>
                </div>
            ))}
        </div>
    );
};

export default InstallationPage;