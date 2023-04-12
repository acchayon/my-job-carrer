import React from 'react';
import { Link } from 'react-router-dom';

const Errorpage = () => {
    return (
        <div className='text-center mx-auto'>
            <h1 className='text-4xl font-bold'>Ooops</h1>
            <h3 className='text-3xl font-semibold'>Could Not found this page</h3>
            <img className='w-5/12 mt-10 mx-auto' src="https://i.ibb.co/R4Jdy5H/error.png" alt="" />
            <Link to={-1}><button className='btn btn-primary'>Go Back</button></Link>
        </div>
    );
};

export default Errorpage;