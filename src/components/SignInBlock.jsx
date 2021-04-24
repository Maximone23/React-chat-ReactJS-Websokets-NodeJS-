import React, {useState} from 'react';
import socket from '../socket';
import axios from 'axios';

export default function SignInBlock() {
    const [roomId, setRoomId] = useState('');
    const [userName, setUserName] = useState('');

    const onEnter = () => {
        if (!roomId || !userName) {
            return alert('Incorrect Data');
        }
        axios.post('/rooms', {
            roomId,
            userName
        })
    }

    return (
        <div className="sign-in-block">
            <input 
                type="text" placeholder="ROOM ID" 
                value={roomId} 
                onChange={e => setRoomId(e.target.value)} 
            />
            <input 
                type="text" placeholder="Your Name" 
                value={userName} 
                onChange={e => setUserName(e.target.value)} 
            />
            <button className="btn btn-success" onClick={onEnter} >Sign In</button>
      </div>
    )
}
