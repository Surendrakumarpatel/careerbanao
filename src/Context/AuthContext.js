import { useContext, createContext, useEffect, useState } from "react";
import {
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged
} from "firebase/auth";
import { auth } from "../firebase/Firebase";
import { BaseUrl } from "../Components/baseurl/baseurl";
import axios from "axios";

const AuthContext = createContext();

// base url for posting user data 
const url = `${BaseUrl}/sendUserLoginInfo`;
export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
    }
    const logOut = () => {
        signOut(auth);
    }
    useEffect(() => {
        const unsbscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            axios.post(url, JSON.stringify({
                name: currentUser.displayName,
                email: currentUser.email,
                image_url: currentUser.photoURL,
                phone: currentUser.number,
                address: "null"
            })).then((res, req) => {
                console.log(res.data);
            }).catch((err) => {
                console.log(err);
            })
        })
        return () => {
            unsbscribe();
        }
    }, []);

    return (
        <AuthContext.Provider value={{ googleSignIn, user, logOut }}>
            {children}
        </AuthContext.Provider>
    )
};

export const UserAuth = () => {
    return useContext(AuthContext);
}
