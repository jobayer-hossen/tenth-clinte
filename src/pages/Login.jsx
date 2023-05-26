import React, { useContext, useState } from 'react';
import Lottie from "lottie-react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import animation from '../../public/login/93385-login.json'

const Login = () => {

    // get data from context api
    const { signIn, googleLogin, gitHubLogin } = useContext(AuthContext);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    // control user path -
    const location = useLocation();
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/';
    // catch data from login form -
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        event.target.reset();

        setError('');
        if (email === '') {
            setError('Please write your resister Email');
            return
        }
        else if (password === '') {
            setError('Please type your password');
            return
        }
        else if (password.length < 6) {
            setError('Password must be 6 characters long');
            return
        }

        // handle manual email password login 
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                toast.success("You have successfully logged in to your account .!");
                setError('');
                navigate(from, { replace: true });

            })
            .catch(error => {
                setError(error.message);
                setError('Password Dose not match')
            })
    };
    //  handle google account login --
    const handleGoogle = () => {
        googleLogin()
            .then(result => {
                const googleUser = result.user;
                console.log(googleUser);
                toast.success("Welcome back ! Your Google account successfully logged .");
                setError('');
                navigate(from, { replace: true });
            })
            .catch(error => {
                setError(error.message);
                setSuccess('');
            });
    };
    //  handle github account login --
    const handleGitHub = () => {
        gitHubLogin()
            .then(result => {
                const gitHubUser = result.user;
                console.log(gitHubUser);
                toast.success("Welcome back ! Your GitHub account successfully logged .");
                setError('');
                navigate(from, { replace: true });
            })
            .catch(error => {
                setError(error.message);
                setSuccess('');
            })
    };

    return (
        <>

            {/* login form */}
            <div className='container mt-8 mb-10 mx-auto grid lg:grid-cols-2 sm:grid-cols-1'>


                <div className="w-full mx-auto  max-w-md p-4 rounded-md shadow sm:p-8   text-black bg-gradient-to-r from-fuchsia-500 to-cyan-500">
                    <h2 className="mb-3 text-3xl font-semibold text-center">Login your account</h2>
                    <p className="text-base text-center text-black">Don't have account?
                        <Link to='/resister' rel="noopener noreferrer" className="focus:underline hover:underline">Resister here</Link>
                    </p>
                    <div className="my-6 space-y-4">
                        <button onClick={handleGoogle} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md ">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                            </svg>
                            <p>Login with Google</p>
                        </button>
                        <button onClick={handleGitHub} aria-label="Login with GitHub" role="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md  ">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                            </svg>
                            <p>Login with GitHub</p>
                        </button>

                    </div>
                    <div className="flex items-center w-full my-4">
                        <hr className="w-full dark:text-gray-400" />
                        <p className="px-3 dark:text-gray-400">OR</p>
                        <hr className="w-full dark:text-gray-400" />
                    </div>
                    <form onSubmit={handleLogin} className="space-y-8 ng-untouched ng-pristine ng-valid">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label htmlFor="email" className="block text-sm">Email address</label>
                                <input type="email" name="email" id="email" placeholder="example@company.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-blue-400" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="password" className="text-sm">Password</label>
                                <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-blue-400" />
                            </div>
                            <div>
                                <p className='text-base font-bold text-red-600 text-center '>{error}</p>
                            </div>
                        </div>
                        <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-gradient-to-r from-red-400 via-gray-300 to-blue-500">Sign in</button>
                    </form>
                </div>
                            {/* right side animation  */}
                <div className='w-[80%] mx-auto'>
                    <Lottie animationData={animation} loop={true} />

                </div>
                <Toaster />
            </div>
        </>
    );
};

export default Login;