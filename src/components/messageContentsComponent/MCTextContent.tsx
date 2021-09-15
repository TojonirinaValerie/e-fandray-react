import React from 'react';

interface MCTextContentProps {
    position: boolean
    image: string
    texte: string
}

const MCTextContent: React.FC<MCTextContentProps> = (props) => {
    return ( 
        <div className={ props.position? "mc-text gauche" : "mc-text droite" }>
            <div className="mt-picture">
                <img alt="picture" src={props.position? props.image: "../media/Me.jpg"}/>
            </div>
            <div className="texte">{props.texte}</div>
        </div>
     );
}
 
export default MCTextContent;