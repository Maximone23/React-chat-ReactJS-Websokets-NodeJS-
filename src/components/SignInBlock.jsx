import React, {useState} from 'react';
import axios from 'axios';

export default function SignInBlock({onLogin}) {
    const [roomId, setRoomId] = useState('');
    const [userName, setUserName] = useState('');
    const [isLoading, setLoading] = useState(false);

    const onEnter = async () => {
        if (!userName) {
            return alert('Enter Your Name');
        }
        const obj = {
            roomId,
            userName
        }
        if (obj.roomId === '') {
            obj.roomId = 'default'
        }
        setLoading(true)
        await axios.post('/rooms', obj);
        onLogin(obj);
    }


    return (
        <div className="sign-in-block">
            <h1>React Chat with Websockets</h1>
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
            <button disabled={isLoading} className="btn btn-success" onClick={onEnter} >Sign In</button>
      </div>
    )
}
