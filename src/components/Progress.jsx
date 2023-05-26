import React from 'react';
import Lottie from "lottie-react";
import loadingAnimation from '../../public/loading/9901-circle-flower-loader.json'

const Progress = () => {
    return (
        <div>
            
            <div className='w-[35%] mx-auto'>
                <Lottie animationData={loadingAnimation} loop={true} />

            </div>
        
        </div>
    );
};

export default Progress;