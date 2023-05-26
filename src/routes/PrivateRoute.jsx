import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Progress from '../components/Progress';

const PrivateRoute = ({children}) => {
    // context api use --
    const {user,loading} = useContext(AuthContext);
    // user location patch catch --
    const location = useLocation();
    // sign user reload login page show bug controller progress -- 
    if(loading){
        return <Progress></Progress>
    }
    if(user){
        return children ;
    }
    return <Navigate to='/login' state={{from:location}} replace ></Navigate> ;
};

export default PrivateRoute;