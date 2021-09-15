import React from 'react';

interface PublierProps {
}
 
const Publier: React.FC<PublierProps> = () => {
    return ( 
        <div className="publier">
            <div className="p-gauche">
                <div className="pg-input-text">
                    <input 
                        type="text" 
                        placeholder="Publier quelques choses"/>
                </div>
                <div className="pg-option">
                    <ul> 
                        <li><i className="far fa-smile"></i></li>
                        <li><i className="fas fa-microphone"></i> </li>
                        <li><i className="fas fa-file"></i> </li>
                    </ul>
                </div>
            </div>
            <div className="p-droite">
                <i className="fas fa-paper-plane"></i>
            </div>
        </div>
     );
}

export default Publier;