import React, { useState, useEffect } from "react";
import AppCard from "../components/AppCard";
import Loader from "../pages/Loader"; // your spinner component
import { useLoaderData } from "react-router";

const AllApps = () => {
  const apps = useLoaderData();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredApps, setFilteredApps] = useState(apps);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // simulate loading on search
    setLoading(true);
    const timer = setTimeout(() => {
      const filtered = apps.filter(app =>
        app.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredApps(filtered);
      setLoading(false);
    }, 200); 

    return () => clearTimeout(timer); // cleanup for fast typing
  }, [searchTerm, apps]);

  return (
    <div className="bg-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold mb-2 text-center">
            Our All Applications
          </h1>
          <p className='text-xl mb-6 text-slate-500 text-center'>
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>

        {/* Search & Count */}
        <div className="pb-6 flex flex-col md:flex-row md:justify-between md:items-center gap-3">
          <p className="text-lg font-bold">
            ( {filteredApps.length} Apps Found )
          </p>

          <input
            type="text"
            placeholder="Search apps by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mt-3 w-full md:w-1/2 px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Grid or Loading */}
        {loading ? (
          <div className="flex justify-center mt-10">
            <Loader />
          </div>
        ) : filteredApps.length === 0 ? (
          <p className="text-center text-gray-500 mt-10 text-4xl">
            No apps found
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredApps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllApps;