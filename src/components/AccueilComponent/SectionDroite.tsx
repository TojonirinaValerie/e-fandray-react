import React from 'react';
import ItemDiscussion from './component/itemDiscussion';
import datas from '../../datas/MessageData';

interface SectionDroiteProps {
    
}
 
const SectionDroite: React.FC<SectionDroiteProps> = () => {
    return ( 
        <div className="sa-Droite">
            <div className="sd-conteneur">
                <p className="sd-title">Discussion</p>
                <ul>
                    { datas.map( (item) => {
                        return(
                            <li><ItemDiscussion profil={item.picture_profil} pseudo={item.pseudo}/></li>        
                        )
                    })}
                    { datas.map( (item) => {
                        return(
                            <li><ItemDiscussion profil={item.picture_profil} pseudo={item.pseudo}/></li>        
                        )
                    })}
                </ul>
            </div>
        </div>
     );
}

export default SectionDroite;