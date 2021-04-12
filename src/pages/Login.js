import React from 'react'
import firebase from '../firebase';
import 'firebase/auth'
const Login = ({history}) => {

    const handleLogin = async() => {
        let provider = new firebase.auth.GoogleAuthProvider();
        await firebase.auth().signInWithPopup(provider);
        history.push('/');
    }

    return <button onClick={()=> handleLogin()}>Login</button>
}

export default Login;
