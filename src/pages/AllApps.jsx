import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router';

const AllApps = () => {

    const data = useLoaderData();
    useEffect(() => {
        document.title = "Home | Doc Talk";
    })
    console.log(data)
    
    return (
        <div>
            alllllllllll appps
        </div>
    );
};

export default AllApps;