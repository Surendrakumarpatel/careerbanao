import { useContext, createContext, useEffect, useState } from "react";
import { GoogleAuthProvider,
      signInWithPopup,
      signInWithRedirect,
      signOut,
      onAuthStateChanged } from "firebase/auth";
import {auth} from "../firebase/Firebase";


const AuthContext = createContext();

export const AuthContextProvider = ({children}) =>{
    const [user, setUser] = useState({});
 
    const googleSignIn = () =>{
        const provider = new  GoogleAuthProvider();
        signInWithPopup(auth, provider);
    }
    const logOut = () =>{
        signOut(auth);
    }
    useEffect(()=>{
        const unsbscribe = onAuthStateChanged(auth,(currentUser)=>{
             setUser(currentUser);
             console.log(currentUser);
        } )
        return () =>{
            unsbscribe();
        }
    },[]);
    

    return(
        <AuthContext.Provider value = {{googleSignIn,user ,logOut}}>
            {children}
        </AuthContext.Provider>
    )
};

export const UserAuth = () =>{
    return useContext(AuthContext);
}
