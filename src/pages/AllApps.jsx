import { useLoaderData } from "react-router";
import AppCard from "../components/AppCard";

const AllApps = () => {
    const apps = useLoaderData();

    return (
        <div className="bg-slate-200">
            <div className="max-w-6xl mx-auto px-4 py-10">

                <h1 className="text-3xl font-bold mb-6 text-center">
                    All Apps
                </h1>

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