import React from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'


const Job = ({ job }) => {
    const { id, company_logo, job_title, company_name, remote_or_onsite, location, salary } = job;
    return (
        <div className="card card-compact lg:w-4/6 bg-base-100 p-5 shadow-xl">
            <img className='lg:w-3/12 m-5' src={company_logo} alt="Shoes" />
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <h2 className="text-base text-gray-500 text-left">{company_name}</h2>
                <button className='btn btn-outline btn-primary lg:w-3/12'>{remote_or_onsite}</button>
                <div className='flex'>
                    <p className='lg:flex text-base'>
                        <MapPinIcon className="h-6 w-6 block text-cyan-500" />
                        {location}
                        </p>
                        <p className='flex text-base'>
                        <CurrencyDollarIcon className="h-6 w-6 block text-cyan-500" />
                         Salary:  {salary}
                        </p>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary mx-0">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Job;
