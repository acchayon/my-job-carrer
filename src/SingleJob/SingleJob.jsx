import React from 'react';

const SingleJob = ({ job }) => {
    const { id, jobname, availableJob, icon } = job;
    return (
        <div className="card bg-gray-50 shadow-xl lg:p-3">
            <img className='w-2/12 mt-5 m-5 bg-gray-200' src={icon} alt="" /> 
            <div className="card-body mt-0">
                <h2 className="card-title">{jobname}</h2>
                <p>{availableJob} jobs avialable</p>
            </div>
        </div>
    );
};

export default SingleJob;