import React from 'react';
import datas from '../../datas/MessageData';

interface MCHeaderProps {
    numero: number
}
 
function MCHeader({numero}:MCHeaderProps){
    return ( 
        <div className="mc-header">
            <div className="mc-header-title">
                {
                    datas.map((item) => {
                        return(
                        item.numero==numero &&
                            <>
                            <div><img alt="profil picture" src={item.picture_profil}/></div>
                            <h2>{item.pseudo}</h2>
                            </>
                        )
                    })
                }
                
            </div>
            <div className="mc-header-icone">
                <ul className="mch-icone-list">
                    <li><i className="fas fa-phone"></i></li>
                    <li><i className="fas fa-envelope"></i></li>
                </ul>
            </div>
        </div>
     );
}
 
export default MCHeader;