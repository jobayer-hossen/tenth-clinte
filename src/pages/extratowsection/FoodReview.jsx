import React from 'react';
import Fade from 'react-reveal/Fade';

const FoodReview = () => {

    /*
            only hard core data --- for extra section
    */


    return (
        <>

            <p className="text-3xl mt-6 mb-10 text-center font-bold">Food Review</p>

            <Fade bottom> 
            <div className='mt-10 mb-5 gap-6 lg:px-12 flex flex-col sm:flex-col lg:flex-row'>
                <div className='mx-5 gap-4 grid sm:grid-cols-1 lg:grid-cols-3 lg:w-[100%]'>



                    <div class="group rounded w-[48] relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div class="w-[100%]">
                            <img class=" w-[100%] object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://images.unsplash.com/photo-1492683962492-deef0ec456c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=856&q=80" alt="" />
                        </div>
                        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 class="font-dmserif text-3xl font-bold text-white">Menemen</h1>
                            <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                Menemen is a Turkish dish made of scrambled eggs cooked with tomatoes, peppers, and spices. It's simple, delicious, and perfect for breakfast.</p>

                        </div>
                    </div>




                    <div class="group rounded w-[48] relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div class="w-[100%]">
                            <img class=" w-[100%] object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80&fbclid=IwAR2pVUzGDgh_fTdDWI9m2P_IE2cbkYoloY5NAW6TuvPZDa-EqCOcGqwg2E0" alt="" />
                        </div>
                        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 class="font-dmserif text-3xl font-bold text-white">Manti</h1>
                            <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Manti is a Turkish dish consisting of small dumplings filled with minced meat, typically served with yogurt, garlic, and spices. Rich and flavorful.</p>
                            
                        </div>
                    </div>



                    <div class="group rounded w-[48] relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div class="w-[100%]">
                            <img class=" w-[100%] object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://images.unsplash.com/photo-1543340713-0f7f0abf9e49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                        </div>
                        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 class="font-dmserif text-3xl font-bold text-white">Döner</h1>
                            <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Döner is a Turkish dish made of marinated meat cooked on a vertical rotisserie and served in a pita or wrap. Delicious, filling, and satisfying.</p>
                            
                        </div>
                    </div>


                </div>
            </div>
        </Fade>
        </>
    );
};

export default FoodReview;