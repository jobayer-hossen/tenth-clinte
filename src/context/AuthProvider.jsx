import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

import app from '../firebase/firebase.config';

//  context api ---
export const AuthContext = createContext(null);

//  auth create --
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {

    const [user , setUser] = useState(null);
    const [loading , setLoading] = useState(true);
// resister email and password -
    const createUser = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    };
    //  login by email and password --
    const signIn = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    };

//  google login --
    const googleLogin =()=>{
        return signInWithPopup(auth,googleProvider);
    };
    //  github login --
    const gitHubLogin =()=>{
        setLoading(true);
        return signInWithPopup(auth,gitHubProvider);
    };
    
// user data observer from firebase --
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>{
            unSubscribe();
        }
    },[]);
//  user logout --
    const logOut =()=>{
        return signOut(auth);
    }

//  data pass --
    const authInfo = {
        createUser,
        signIn,
        googleLogin,
        gitHubLogin,
        user,
        loading,
        logOut,
    
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;