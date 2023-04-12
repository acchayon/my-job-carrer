import React from 'react';

const HeaderSection = () => {
    return (
        <div className='lg:flex justify-evenly mt-10 items-center bg-gray-50'>
            <div className='header-title p-5'>
                <h1 className='text-6xl font-semibold'>Build your <br /> knowledge for Your <br /> <span className='text-amber-400'>Dream Job</span></h1>
                <p className='mt-5 text-accent-focus font-medium p-2'>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                <button className='btn btn-primary mt-5'>Get Started</button>
            </div>
            <div className='header-img'>
                <img className='' src="https://i.ibb.co/bQ0N1qG/1.png" alt="" />
            </div>
        </div>
    );
};

export default HeaderSection;