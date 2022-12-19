import { useEffect, useState } from "react";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import app from "../firebase.init";

const auth = getAuth(app);

const useFirebase = () => {
    const [user, setUser] = useState();
    const googleProvider = new GoogleAuthProvider();

    const handleSignInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user);
                console.log(user);
            })
            .catch((error) => {
                console.error('Login Error', error)
            })
    }

    const handleSignOut = () => {
        signOut(auth)
            .then(() => { })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user);
        });
    }, []);

    return {
        user,
        handleSignInWithGoogle,
        handleSignOut
    }
}
export default useFirebase;