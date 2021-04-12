import React, { useContext, useEffect, useRef, useState } from 'react'
import { MyContext } from '../Context'
import firebase from '../firebase';
import 'firebase/firestore';
import shortid from 'shortid';

const Home = () => {
    const {user} = useContext(MyContext);
    const inputRef = useRef();
    const [messages, setMessages] = useState([])
    
    
    useEffect(() => {
        firebase
        .firestore()
        .collection('rooms')
        .doc('public')
        .collection('messages')
        .orderBy('created_at')
        .onSnapshot((snapshot) => setMessages(snapshot.docs))
    },[]);

    const handleSubmit = () => {
        firebase
        .firestore()
        .collection('rooms')
        .doc('public')
        .collection('messages').add({
            created_at: new Date().toString(),
            uid: user.uid,
            id: shortid(),
            message: inputRef.current.value

        });
        inputRef.current.value = '';
    };

    return (
        <div>
            <img src={user.photoURL} alt='user'/>
            <p>{user.displayName}</p>

            <div>
                <input ref={inputRef} type="text" />
                <button onClick={(ev) => handleSubmit()}>Submit</button>
            </div>
            {messages?.map(doc => {
                const data = doc.data();
                console.log(data)
                return <p key={data.id}>{`${data.id}: ${data.message}`}</p>
            })}
        </div>
    )
}

export default Home
 