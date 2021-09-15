import React from 'react';
import MDProfil from './MessageDetailsComponenets/MDprofil';
import '../styles/MessagesDetailsStyles.css';

interface MessagesDetailsProps {
    
}
 
const MessagesDetails: React.FC<MessagesDetailsProps> = () => {
    return ( 
        <div className="messagesDetails">
            <MDProfil />
        </div>
     );
}
 
export default MessagesDetails;