import { useLoaderData } from "react-router";
import AppCard from "../components/AppCard";

const AllApps = () => {
    const apps = useLoaderData();

    return (
        <div className="bg-slate-200">
            <div className="max-w-6xl mx-auto px-4 py-10">
                <div>
                    <h1 className="text-3xl font-bold mb-2 text-center">
                        Our All Applications
                    </h1>
                    <p className='text-xl mb-6 text-slate-500 text-center'>
                        Explore All Apps on the Market developed by us. We code for Millions
                    </p>
                </div>
                <div className="pb-6">
                    <p className="text-lg font-bold">
                        ( {apps.length} Apps Found )
                    </p>
                </div>
                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {apps.map((app) => (
                        <AppCard key={app.id} app={app} />
                    ))}
                </div>

            </div>
        </div>
    );
};

export default AllApps;