import { CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/solid';
import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const AppliedJobs = () => {
    const { id } = useParams();
    console.log(id)
    const apply = useLoaderData();
    // console.log(apply);
    const [seeJob, setSeeJob] = useState({});
    useEffect(() => {
        const getSeeJOb = apply.find(ajob => ajob.id == id)
        setSeeJob(getSeeJOb);
    }, [])
    console.log(seeJob)

    return (
        <div className='border-2 p-7 flex justify-evenly w-9/12 mx-auto'>
            <img className='border-0 bg-slate-100 p-7' src={seeJob.company_logo} alt="" />
            <div className='grid grid-cols-2 gap-6 justify-around items-center'>
                <div>
                    <h4 className='font-bold text-lg'>{seeJob.job_title}</h4>
                    <p>{seeJob.company_name}</p>
                    <button className='btn btn-info mt-2 btn-outline'>{seeJob.remote_or_onsite}</button>
                    <button className='btn btn-info btn-outline mx-4'>{seeJob.fulltime_or_parttime}</button>
                    <p className='flex items-center mt-3'><MapPinIcon className="h-6 w-6 text-cyan-500" />
                        <span className='text-lg font-semibold'>Location: &nbsp; &nbsp;  </span>{seeJob.location}
                    </p>
                    <p className='flex items-center mt-3'><CurrencyDollarIcon className="h-6 w-6 text-cyan-500" />
                        <span className='text-lg font-semibold'>Salary: &nbsp; &nbsp;  </span>{seeJob.salary}
                    </p>
                </div>

                <Link to={-1}><button className='btn btn-primary'>View Details</button></Link>
            </div>
        </div>
    );
};

export default AppliedJobs;