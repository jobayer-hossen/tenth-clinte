import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Lottie from "lottie-react";
import { AuthContext } from '../context/AuthProvider';
import { updateProfile } from 'firebase/auth';
import animation from '../../public/resister/131930-progerss.json'
import toast, { Toaster } from 'react-hot-toast';

const Resister = () => {
    //  get data from context api --
    const { createUser } = useContext(AuthContext);

    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const [error , setError] = useState('');
// catch data from resister form --
    const handleResister = (event) => {
    
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photo = form.photo.value;
        event.target.reset();

        //  email and password validating --
        setError('');
        if (email === '') {
            setError('Please write a valid Email');
            return
        }
        else if (password === '') {
            setError('Please write strong password');
            return
        }
        else if (password.length < 6) {
            setError('Password must be 6 characters long');
            return
        }

        createUser(email, password)
            .then(result => {
                const newUser = result.user;
                updateUserProfile (result.user,name,photo);
                event.target.reset();
                navigate(from , {replace:true});
                toast.success('Your account registration successfully');
                setError('');
                console.log(newUser);
            })
            .catch(error => {
                setError(error.message);
            })
           
    };


//     update user profile information ---
const updateUserProfile =(user , name , photo)=>{
        updateProfile( user ,{
            displayName: name,
             photoURL: photo 
        })
        .then(result => {
            const updateUserData = result.user;
            console.log(updateUserData);
            toast.success('Your update profile successfully'); 
            setError('');
        })
        .catch(error => {
            setError('');
        })
    };

    return (
        <>
            <div className='container mt-8 mb-10 mx-auto grid lg:grid-cols-2 sm:grid-cols-1'>

            <div className='w-[80%] mx-auto'>
                <Lottie animationData={animation} loop={true} />

            </div>

                <div className="w-full mx-auto  max-w-md p-4 rounded-md shadow sm:p-8 bg-gradient-to-r from-violet-200 to-pink-200">
                    <h2 className="mb-3 text-3xl font-semibold text-center">Resister to your account</h2>
                    <p className="text-sm text-center dark:text-gray-400">Already have an account?
                        <Link to='/login' rel="noopener noreferrer" className="focus:underline hover:underline">Login here</Link>
                    </p>
                    <form onSubmit={handleResister} className="space-y-8 ng-untouched ng-pristine ng-valid">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label htmlFor="text" className="block text-sm">Name</label>
                                <input type="text" name="name" id="name" placeholder="Emon Hasan" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-blue-400" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="block text-sm">Email address</label>
                                <input type="email" name="email" id="email" placeholder="example@company.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-blue-400" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="password" className="text-sm">Password</label>
                                <input  type="password" name="password" id="password" placeholder="******" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-blue-400" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="text" className="block text-sm">Photo URL</label>
                                <input type="text" name="photo" id="photo" placeholder="https://img.freepik.com/free-photo" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-blue-400" />
                            </div>
                            <div>
                                <p className='text-base font-bold text-red-600 text-center '>{error}</p>
                            </div>

                        </div>
                        <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">Resister</button>
                    </form>
                </div>
                <Toaster />
            </div>
        </>
    );
};

export default Resister;