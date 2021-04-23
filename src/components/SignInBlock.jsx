import React from 'react';
import socket from '../socket';

export default function SignInBlock() {
    return (
        <div className="sign-in-block">
            <input type="text" placeholder="ROOM ID" />
            <input type="text" placeholder="Your Name" />
            <button className="btn btn-success" >Sign In</button>
      </div>
    )
}
