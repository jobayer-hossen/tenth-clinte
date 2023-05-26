import React from 'react';
import Lottie from "lottie-react";
import animation from '../../public/errorpage/98642-error-404.json'
import { Link, useRouteError } from 'react-router-dom';


const ErrorPage = () => {

    //  catch error message ---
    const { error } = useRouteError();

    return (
        <div>

            {/* lottie animation  */}
            <div className='w-[35%] mx-auto'>
                <Lottie animationData={animation} loop={true} />

            </div>
            <div className='text-center'>
                <p className='text-xl font-semibold sm:text-2xl text-red-800 mb-8'>
                    {error?.message}
                </p>
                <Link to='/' className='text-gray-900 font-medium rounded text-sm px-5 py-2.5 text-center mr-2 mb-2   bg-gradient-to-r from-fuchsia-500 to-cyan-500 '>
                    Back to homepage
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;