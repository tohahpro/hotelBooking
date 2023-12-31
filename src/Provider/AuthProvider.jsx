import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../Firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null)


const GoogleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState({})

    const [loading, setLoading] = useState(true)




    const google = () => {
        return signInWithPopup(auth, GoogleProvider)
    }

    const register = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    // user sign in 
    const Login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // user logout 
    const logout = () => {
        return signOut(auth)
            .then(() => {

            }).catch((error) => {
                console.error(error)
            });
    }

    // user update
    const userUpdate = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })

    }

    const authInfo = {
        google,
        user,
        loading,
        register,
        Login,
        logout,
        userUpdate
    }

    console.log(user)

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            const userEmail = currentUser?.email || user?.email

            setUser(currentUser);
            setLoading(false);


            const loggedUser = { email: userEmail }
            if (currentUser) {
                axios.post("https://server-site-sepia.vercel.app/jwt", loggedUser, { withCredentials: true })
                    .then(res => {
                        console.log('Token response', res.data);
                    })

            }
            else {
                axios.post("https://server-site-sepia.vercel.app/logout", loggedUser, { withCredentials: true })
                    .then(res => {
                        console.log("Clear token", res.data);
                    })
            }
        });

        return () => {
            return unSubscribe();
        };
    }, [user]);




    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
};

export default AuthProvider;