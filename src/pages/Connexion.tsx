import React from 'react';
import Sidebar from '../components/Sidebar';


interface ConnexionProps {
    
}
 
const Connexion: React.FC<ConnexionProps> = (prpos) => {

    return ( 
        <div className="contener">
            <Sidebar />
        </div>
     );
}
 
export default Connexion;