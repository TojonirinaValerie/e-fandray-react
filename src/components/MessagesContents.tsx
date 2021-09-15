import React, { useState} from 'react';
import '../styles/MessageContentsStyles.css';
import MCContents from './messageContentsComponent/MCContents';
import MCHeader from './messageContentsComponent/MCHeader';
import MCInput from './messageContentsComponent/MCInputs';

interface MessagesContentsProps {
    numero: number
}
 
function MessagesContents({numero}: MessagesContentsProps){
    return ( 
        <div className="messagesContents">
            <MCHeader numero={numero}/>
            <MCContents numero={numero}/>
            <MCInput />
        </div>
     );
}
 
export default MessagesContents;