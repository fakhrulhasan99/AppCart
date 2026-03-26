import React from 'react';

const Loader = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white/70 backdrop-blur-sm z-50">
            <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 border-4 border-green-400 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-sm text-gray-600">Loading...</p>
            </div>
        </div>
    );
};

export default Loader;