import { createContext, useEffect, useState } from "react";
import firebase from './firebase';
import 'firebase/auth';

export const MyContext = createContext();

const ContextProvider = ({ children} ) => {
    const [user, setUser] = useState(null);

    useEffect(()=>{
        firebase.auth().onAuthStateChanged((usr) => {
            if (usr) {
                setUser(usr);
            } else {
                setUser(null)
            }
        });
    },[])
    const initialState = {user};
    return (
        <MyContext.Provider value={initialState}>{children}</MyContext.Provider>
    )
}

export default ContextProvider;