import React from 'react';
import Slider from './Slider';
import Fade from 'react-reveal/Fade';

const BestOrder = () => {

    //  carousel background image link - -
    const bg = "https://img.freepik.com/free-photo/frame-cooking-ingredients_23-2148505646.jpg?w=740&t=st=1683281219~exp=1683281819~hmac=c8ab21ca8d7c87327195b2e7ad2f02ccc038914c8e511ac1715be482803053a4"
    return (
        <>


            <div className='w-[90%] rounded mx-auto mt-10 mb-10'>

           <div className='mt-10  mb-10 text-center '>
                    <h2 className='text-3xl font-bold '>Our Top Favorite Item</h2>
                </div>
                

                <div className='grid lg:grid-cols-2 sm:grid-cols-1 '>
                    <div className='mx-auto w-[100%] animation '>
                    <Fade left>
                        <img className='mx-auto  mb-10 rounded rounded-ss-3xl rounded-ee-3xl bg-gradient-to-r from-blue-200 to-cyan-200' src="https://i.postimg.cc/wvjnPHqk/chef-presentingnd-removebg-preview.png" alt="" />
                    </Fade>
                    </div>
                    <Fade right>
                    <div
                    style={{backgroundImage: `url(${bg})`}}
                     className=' w-[100%] grid items-center bg-no-repeat bg-center '>

                {/*  sweeper js   */}
                
                    <Slider></Slider>
                   
                     </div>
                     </Fade>

                </div>



            </div>



        </>
    );
};

export default BestOrder;