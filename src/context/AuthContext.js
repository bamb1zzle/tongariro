import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from'../firebase';
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signOut, 
    onAuthStateChanged} 
    from 'firebase/auth';
import {setDoc, doc} from 'firebase/firestore'

const AuthContext = createContext();

export function AuthContextProvider({children}) {
    const [user, setUser] = useState({})


    function signUp(email, password) {
        createUserWithEmailAndPassword(auth, email, password)
        // Whenever we create a new user we will create a users doc with email identification and empty array. PURPOSE: USER SPECIFIC DATA.
        setDoc(doc(db, 'users',email), {
            savedShows: []
        })
    }
    
    function logOut() {
        return signOut(auth)
    }

    function logIn(email,password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        });
        return () => {
            unsubscribe()
        }
    })




    return(
        <AuthContext.Provider value ={{ signUp, logIn, logOut, user }}>
            {children}
        </AuthContext.Provider>
    )
}

export function UserAuth() {
    return useContext(AuthContext)
}

// WRAP ENTIRE APPLICATION FOR AUTH