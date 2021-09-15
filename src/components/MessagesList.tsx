import React from 'react';
import ItemList from './messageListComponent/ItemList';
import '../styles/MessagesListStyles.css';
import {Iperson as person} from '../datas/MessageData';
import datas from '../datas/MessageData';

interface MessagesListProps {
    
}
 
const MessagesList: React.FC<MessagesListProps> = () => {
    return ( 
        <div className="messagesList">
            <div className="ml-title">
                <h1>Messages</h1>
                <p><i className="fas fa-search"></i></p>
            </div>
            <hr></hr>
            <ul className="ml-list">
                {
                    datas.map((item) => {
                        return(
                            <li className="ml-list-item"><ItemList personne={item}/></li>
                        )
                    })
                }
                
            </ul>
        </div>
     );
}

export default MessagesList;