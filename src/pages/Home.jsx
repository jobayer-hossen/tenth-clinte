import React from 'react';
import Lottie from "lottie-react";
import { useLoaderData, useNavigation } from 'react-router-dom';
import Progress from '../components/Progress';
import AllChefs from './AllChefs';
import BestOrder from './extratowsection/BestOrder';

import animation from '../../public/banner/105030-kitchen.json'
import Fade from 'react-reveal/Fade';
import FoodReview from './extratowsection/FoodReview';



const Home = () => {

    // control data loading progress --
    const navigation = useNavigation();
    if (navigation.state === "loading") {
        return <Progress></Progress>
    };
//  data load from loader --
    const allData = useLoaderData();

    return (
        <>


        {/* banner section  */}
            <div className='w-[90%] mx-auto rounded mt-5'>

                <div className="hero  rounded shadow-2xl min-h-screen bg-base-300">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                    <Fade right>
                        <div className="lg:w-[40%] sm:w-20">
                            <Lottie animationData={animation} loop={true} />
                        </div>
                        </Fade>
                        <div className="lg:w-[40%] sm:w-20 sm:ml-0 lg:ml10">
                            <h1 className="text-5xl font-bold">
                                Turkish
                                <span className="text-violet-400">Delight</span>{" "}
                            </h1>
                            <p className="py-6 font-semibold">
                                Turkish Delight, or Lokum, is a luxurious confectionery that has a soft and chewy texture with sweet and fruity flavors. Made with sugar, cornstarch, and flavorings, each bite is a burst of deliciousness. This traditional Turkish dessert is a sweet delight that is hard to resist.
                            </p>

                        </div>
                    </div>
                </div>


            </div>



            {/*   ------------------
            
                    all chef section
            
           --------------------- */}

            <div>
                <div className='mt-7 p-4 text-center mb-8'>
                    <h1 className=' font-bold text-3xl'>Chef Section</h1>
                    <p className='text-base font-medium mt-3'>"Crafting Culinary Perfection: An Exploration of Our Best Chef's Exceptional Cuisine" - Discover the extraordinary talent of our top chef , <br /> whose dishes are the embodiment of creativity, flavor, and elegance. Prepare to be impressed and inspired.
                    </p>
                </div>



                {/* 6 chef card call */}

                <div className="mt-10 mb-5 gap-6 lg:px-12 flex flex-col sm:flex-col lg:flex-row">
                    <div className="mx-5 gap-10 grid sm:grid-cols-1 lg:grid-cols-2 lg:w-[100%]">
                        {
                            allData.map(chef => <AllChefs
                                key={chef.id}
                                chef={chef}
                            ></AllChefs>)
                        }
                    </div>
                </div>







                {/* extra 2 section call */}
                <BestOrder></BestOrder>
                <FoodReview></FoodReview>

                 
                
                
            </div>
        </>
    );
};

export default Home;