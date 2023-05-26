import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Fade from 'react-reveal/Fade';
import { FaStar, FaTrophy, FaHeart, FaCookieBite } from "react-icons/fa";
import LazyLoad from 'react-lazy-load';

const Recipe = () => {
    const data = useLoaderData();

    //  destructure data --

    const { picture, name, short_bio, years_of_experience, num_of_recipes, likes } = data;

    //  favorite button tost fire control --
    const [favoriteOne, setFavoriteOne] = useState(true);
    const [favoriteTwo, setFavoriteTwo] = useState(true);
    const [favoriteThree, setFavoriteThree] = useState(true);

    const handleFavoriteOne = () => {
        toast("These recipe added your favorite list");
        setFavoriteOne(false)
    };
    const handleFavoriteTwo = () => {
        toast("These recipe added your favorite list");
        setFavoriteTwo(false)
    };
    const handleFavoriteThree = () => {
        toast("These recipe added your favorite list");
        setFavoriteThree(false)
    };

    return (

        <div className=' container mx-auto mt-10 mb-10'>

            <h3 className='text-2xl font-bold text-center mb-5'>Chef Recipes</h3>
            <div className="card grid lg:grid-cols-2 sm:grid-cols-1 w-full rounded container mx-auto card-side shadow-xl bg-gradient-to-r from-green-200 to-purple-200">
                <div className='mx-auto animationTwo'>
                    <Fade left>
                        {/* lazy loader */}
                    <LazyLoad>
                        <img src={picture} alt="Movie" />
                    </LazyLoad>
                    </Fade>
                </div>
                <div className="card-body text-left">
                    <div className='w-[100%]'>
                        <h2 className="text-xl mb-4 font-bold text-center">{name}</h2>
                        <p className='font-medium'>{short_bio}</p>
                        <p className='font-medium'>Years of experience : {years_of_experience}
                            <span className='inline-block'>
                                <FaTrophy className="ms-1 text-fuchsia-600" />
                            </span> </p>
                        <p className='font-medium'>Numbers of recipes : {num_of_recipes}
                            <span className='inline-block'>
                                <FaCookieBite className=" ms-1 text-amber-700" />
                            </span></p>
                        <p className='font-medium'>Total Likes : {likes}
                            <span className='inline-block'><FaHeart className="ms-1 text-red-600" /></span>
                        </p>
                    </div>

                </div>
            </div>

            {/* recipe 1  */}
            <div className='mt-8 grid justify-items-end '>
                <div className=" w-[60%] bg-gradient-to-r from-cyan-200 to-blue-200 justify-end card bg-base-100 rounded shadow-xl">
                    <div className='w-[50%] absolute -left-[53%] bottom-24  transform transition  duration-500 hover:scale-110'>
                    <Fade right>
                        <img className='w-[100%]  rounded' src={data.recipe_one.recipe_one_photo} alt="" />
                        </Fade>
                    </div>
                    <div className="card-body">
                        <h2 className="text-xl mb-4 font-bold text-center">{data.recipe_one.recipe_name}</h2>
                        <p className='font-medium'> Cocking Method :<span className='font-normal'>  {data.recipe_one.method}</span></p>
                        <p className='font-medium'>Cocking ingredients : <span className='font-normal'>  {data.recipe_one.ingredients}</span></p>
                        <p className='font-medium'>Rating : {data.recipe_one.rating}
                            <span className='inline-block'>
                                <FaStar className="ms-1 text-fuchsia-600" />
                            </span>
                        </p>
                        <div className="card-actions justify-end">
                            <button onClick={handleFavoriteOne} disabled={!favoriteOne} className="btn rounded btn-warning">Favorite</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* recipe 2 */}

            <div className='mt-8 grid justify-items-start  '>
                <div className=" w-[60%] card bg-base-100 rounded shadow-xl bg-gradient-to-r from-fuchsia-200 to-cyan-200">
                    <div className="card-body">

                        <h2 className="text-xl mb-4 font-bold text-center">{data.recipe_two.recipe_name}</h2>
                        <p className='font-medium'> Cocking Method : <span className='font-normal'>  {data.recipe_two.method}</span></p>
                        <p className='font-medium'>Cocking ingredients : <span className='font-normal'>  {data.recipe_two.ingredients}</span> </p>
                        <p className='font-medium'>Rating : {data.recipe_two.rating}
                            <span className='inline-block'>
                                <FaStar className="ms-1 text-fuchsia-600" />
                            </span>
                        </p>
                        <div className="card-actions justify-end ">
                            <button onClick={handleFavoriteTwo} disabled={!favoriteTwo} className="btn rounded  hover:bg-gradient-to-r from-fuchsia-500 to-cyan-500">Favorite</button>
                        </div>
                        <div className='w-[50%] absolute -right-[50%] p-3 bottom-24  transform transition  duration-500 hover:scale-110'>
                        <Fade left>
                            <img className='w-[100%] rounded ' src={data.recipe_two.recipe_two_photo} alt="" />
                        </Fade>
                        </div>
                    </div>
                </div>
            </div>


            {/* recipe 3 */}

            <div className='mt-8 grid justify-items-end'>
                <div className=" w-[60%] card rounded shadow-xl bg-gradient-to-r from-violet-200 to-pink-200">
                    <div className='w-[50%] absolute -left-[53%] bottom-20  transform transition  duration-500 hover:scale-110'>
                    <Fade right>
                        <img className='w-[100%]  rounded ' src={data.recipe_three.recipe_three_photo} alt="" />
                        </Fade>
                    </div>
                    <div className="card-body">
                        <h2 className="text-xl mb-4 font-bold text-center">{data.recipe_three.recipe_name}</h2>
                        <p className='font-medium'> Cocking Method : <span className='font-normal'>  {data.recipe_three.method}</span></p>
                        <p className='font-medium'>Cocking ingredients : <span className='font-normal'>  {data.recipe_two.ingredients}</span></p>
                        <p className='font-medium'>Rating : {data.recipe_three.rating}
                            <span className='inline-block'>
                                <FaStar className="ms-1 text-fuchsia-600" />
                            </span>
                        </p>
                        <div className="card-actions justify-end">
                            <button onClick={handleFavoriteThree} disabled={!favoriteThree} className="btn rounded btn-primary">Favorite</button>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Recipe;