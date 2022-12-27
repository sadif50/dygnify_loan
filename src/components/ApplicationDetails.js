import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ApplicationDetails = () => {
    const application = useLoaderData();
    console.log(application);
    return (
        <div>
            Details
        </div>
    );
};

export default ApplicationDetails;