import { useEffect, useState } from "react"
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from 'firebase/auth';
import initializeAuthentication from './../Firebase/firebase.init';


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)

    }


    const logOut = () => {
        signOut(auth)
            .then(() => {
                // Signned Out
                setUser({});
            }).catch(err => {
                setError(err.message);
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        })
    }, []);

    return {
        user,
        signInUsingGoogle,
        logOut,
        error
    }

}

export default useFirebase;