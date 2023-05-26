import React from 'react';
import LazyLoad from 'react-lazy-load';
import { FaHeart, FaCookieBite, FaTrophy } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

const AllChefs = ({ chef }) => {

    //  destructure data --
    const { id, name, picture, years_of_experience, num_of_recipes, likes } = chef;
    return (
        <>
            <Fade bottom>
                <div className="card container w-[100%] mx-auto rounded bg-gradient-to-r from-violet-200 to-pink-200 " >
                    <div className='grid lg:grid-cols-2 sm:grid-cols-1 '>
                        <div className='ms-5 '>
                            <div className='  '>
                                <div className='shadow-2xl lg:w-[32%] mask mask-circle  h-[85%]  rounded-full left-9 bottom-3 absolute bg-gradient-to-r from-cyan-200 to-violet-400'>

                                </div>
                                 {/* lazy loader */}
                                <LazyLoad>
                                    <img className=' lg:w-[32%]  overflow-hidden  rounded-full lg:absolute left-9 bottom-5 transform transition  duration-500 hover:scale-110 cursor-pointer ' src={picture} alt="chef" />
                                </LazyLoad>
                            </div>

                        </div>




                        <div className="card-body text-center flex items-center">
                            <h2 className="text-xl font-bold">{name}</h2>
                            <p className='font-medium'>Years of experience : {years_of_experience}
                                <span className='inline-block'>
                                    <FaTrophy className="ms-1 text-fuchsia-600" />
                                </span>
                            </p>

                            <p className='font-medium'>Numbers of recipes : {num_of_recipes}
                                <span className='inline-block'>
                                    <FaCookieBite className=" ms-1 text-amber-700" />
                                </span>
                            </p>
                            <div className='flex items-center'>
                                <p className='font-medium'> Total Likes : {likes} <span className='inline-block'><FaHeart className=" text-red-600" /></span> </p>
                            </div>
                            <div className="card-actions justify-center">
                                <Link to={`/recipe/${id}`}>
                                    <button className="text-white bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 hover:bg-gradient-to-bl font-medium rounded text-sm px-5 py-2.5 text-center mr-2 mb-2">View Recipes</button></Link>
                            </div>
                        </div>


                    </div>

                </div>
            </Fade>
        </>
    );
};

export default AllChefs;