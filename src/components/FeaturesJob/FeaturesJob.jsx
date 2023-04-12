import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Job from '../Job/Job';

const FeaturesJob = () => {
    const jobs = useLoaderData();
    return (
        <div className='mt-20 text-center'>
            <h1 className='text-4xl font-bold '>Featured Jobs</h1>
            <p className='mt-5'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid lg:grid-cols-2 gap-5 justify-items-center'>
                {
                    jobs.map(job => <Job
                    key={job.id}
                    job={job}
                    ></Job>)
                }
            </div>
            <button className='btn btn-primary m-10'>See All Jobs</button>
        </div>
    );
};

export default FeaturesJob;