import React, { useState} from 'react';

interface MCInputProps {
    
}
 
const MCInput: React.FC<MCInputProps> = () => {
    const [input, setinput] = useState<string>("");

    const send = () => {

    }
    return ( 
        <div className="mc-input">
            <div className="mci-gauche">
                <div className="mc-input-text">
                    <input 
                        type="text" 
                        placeholder="Ecrire un message..."
                        value={input}
                        onChange={(e) => setinput(e.target.value)}/>
                </div>
                <div className="mc-option">
                    <ul> 
                        <li><i className="far fa-smile"></i></li>
                        <li><i className="fas fa-microphone"></i> </li>
                        <li><i className="fas fa-file"></i> </li>
                    </ul>
                </div>
            </div>
            <div className="mci-droite">
                <i className="fas fa-paper-plane" onClick={send}></i>
            </div>
        </div>
     );
}
 
export default MCInput;