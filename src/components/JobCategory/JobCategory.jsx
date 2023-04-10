import React, { useEffect, useState } from 'react';
import SingleJob from '../../SingleJob/SingleJob';

const JobCategory = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    }, [])
    return (
        <div className='mt-10'>
            <div className='text-center'>
                <h1 className=' font-bold text-4xl'>Job Category List</h1>
                <p className='mt-3'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid mt-6 lg:grid-cols-4 gap-5'>
                {
                    jobs.map(job => <SingleJob
                    key={job.id}
                    job={job}
                    ></SingleJob>)
                }
            </div>
        </div>
    );
};

export default JobCategory;