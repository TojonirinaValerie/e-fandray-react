import React from 'react';
import MessagesContents from '../components/MessagesContents';
import MessagesDetails from '../components/MessagesDetails';
import MessagesList from '../components/MessagesList';
import Sidebar from '../components/Sidebar';
import {Iperson as person} from '../datas/MessageData';
import datas from '../datas/MessageData';


interface MessagesProps {
    
}
 
const Messages: React.FC<MessagesProps> = (prpos) => {

    return ( 
        <div className="contener">
            <Sidebar />
            <MessagesList />
            <MessagesContents numero={2}/>
            <MessagesDetails />
        </div>
     );
}
 
export default Messages;