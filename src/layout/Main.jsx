import React from 'react';
import Header from '../components/shared/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/shared/Footer';


const Main = () => {

//  main layout ---
    return (
        <div>
        
         <div>
            <Header></Header>
            <Outlet></Outlet> 
             <Footer></Footer>           
        </div>
         
         </div>
    );
};

export default Main;

