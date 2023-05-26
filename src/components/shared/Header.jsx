import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';


const Header = () => {
    const { user, logOut } = useContext(AuthContext);

//  handle logout --
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error));
    };

    //  dark mode control with local storage --
    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');
    useEffect(()=>{
        localStorage.setItem('theme', theme);
        const localTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute("data-theme" , localTheme)
    },[theme]);

    const handleDarkMode =(event)=>{
        if(event.target.checked){
            setTheme('luxury')
        }
        else{
            setTheme('light')
        }
    };



   


    return (

        <>


            <div className="navbar rounded mt-2 shadow-2xl mx-auto w-[90%] bg-base-100 bg-gradient-to-r from-rose-200 via-fuchsia-300 to-indigo-200">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li> <Link to='/' >Home</Link> </li>
                            <li> <Link to='/blog' >Blog</Link> </li>
                            <li> <Link to='/login' >Login</Link> </li>
                            <label className="swap swap-rotate">

                                <input type="checkbox" />

                                <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                                <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                            </label>
                        </ul>
                    </div>
                    <img className='w-10' src="https://cdn-icons-png.flaticon.com/512/843/843311.png?w=740&t=st=1682964342~exp=1682964942~hmac=457ff5ed2b81d5658fb97bad553f9d1347d95aa4d0b4158b96becc3ccacc880b" alt="" />

                    <p className='text-2xl font-bold hover:text-teal-600'>Turkish Delight</p>
                </div>
                <div className="navbar-center hidden lg:flex">

                    <ul className="menu-horizontal px-1 ">
                        <li>
                            < NavLink className='p-2 font-semibold mx-2 ' to='/' ><button className={({ isActive }) => (isActive ? 'active' : 'default')}>Home</button></NavLink>
                        </li>
                        <li> < NavLink className='p-2 font-semibold mx-2' to='/blog' ><button className={({ isActive }) => (isActive ? 'active' : '')}>Blog</button></NavLink>

                            

                        </li>
                    </ul>

                </div>
                <div className="navbar-end text-center ">
                    {user ? <>
                        <button
                            onClick={handleLogOut}
                            type="button"
                            className=" text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 "
                        >
                            Log Out
                        </button>
                    </> : <>
                        < NavLink className='p-2 font-semibold mx-2' to='/login' ><button className={({ isActive }) => (isActive ? 'active' : 'default')}>Login</button></NavLink>
                    </>}

                    {user && <label className=" avatar tooltip tooltip-bottom tooltip-primary" data-tip={user?.displayName} >
                        <div className="w-10 rounded-full " >
                            <img src={user?.photoURL} />
                        </div>
                    </label>}

                </div>

                <div className='hidden lg:flex'>
                                <label className="swap swap-rotate">

                                    <input type="checkbox" onChange={handleDarkMode} />

                                    <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                                    <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                                </label>
                            </div>



            </div>









        </>
    );
};

export default Header;