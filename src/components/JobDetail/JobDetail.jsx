import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { CurrencyDollarIcon, BriefcaseIcon, PhoneIcon, InboxStackIcon, MapPinIcon } from '@heroicons/react/24/solid'


const JobDetail = () => {
    const { jobId } = useParams();
    // console.log(jobId)
    const newJob = useLoaderData();
    const [job, setJob] = useState({});
    useEffect(() => {
        const getJob = newJob.find(njob => njob.id == jobId)
        setJob(getJob);
    }, [])
    console.log(job)
    return (
        <div className='grid grid-cols-2 mt-20 items-center justify-evenly'>
            <div>
                <p><span className='text-lg font-semibold'>Job description: </span>{job.job_description}</p>
                <p><span className='text-lg font-semibold'>Job Responsibility: </span>{job.job_responsibility}</p>
                <p><span className='text-lg font-semibold'>Educational Requirments: </span>{job.educational_requirements}</p>
                <p><span className='text-lg font-semibold'>Experience: </span>{job.experiences}</p>
            </div>
            <div className='bg-slate-200 w-3/5 p-6'>
                <h5 className='text-xl font-bold'>Job details</h5>
                <p className='flex items-center mt-5'><CurrencyDollarIcon className="h-6 w-6 text-cyan-500" />
                    <span className='text-lg font-semibold'>Salary: &nbsp; &nbsp;  </span>{job.salary} (per month)  
                </p>
                <p className='flex items-center'><BriefcaseIcon className="h-6 w-6 text-cyan-500" />
                    <span className='text-lg font-semibold'>Job Title: &nbsp; &nbsp;  </span>{job.job_title}  
                </p>
                <p className='text-lg font-bold mt-5 mb-5'>Contact Information</p>
                <p className='flex items-center'><PhoneIcon className="h-6 w-6 text-cyan-500" />
                    <span className='text-lg font-semibold'>Phone: &nbsp; &nbsp;  </span>   {job.phone}  
                </p>
                <p className='flex items-center'><InboxStackIcon className="h-6 w-6 text-cyan-500" />
                    <span className='text-lg font-semibold'>Email: &nbsp; &nbsp;  </span>{job.email}  
                </p>
                <p className='flex items-center'><MapPinIcon className="h-6 w-6 text-cyan-500" />
                    <span className='text-lg font-semibold'>Location: &nbsp; &nbsp;  </span>{job.location}  
                </p>
            </div>

        </div>
    );
};

export default JobDetail;