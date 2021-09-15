import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Iperson as person} from '../../datas/MessageData';

interface ItemListProps {
    personne: person
}

function ItemList({personne}: ItemListProps){
    var compteur=0;
    var i=0;
    var dernierMessage="", date=""
    for(i=0; i<personne.message.length; i++){
        if(!personne.message[i].lus) compteur++;
        dernierMessage = personne.message[i].contenue;
        date= personne.message[i].date;
    }

    return ( 
            
        <NavLink to={"/messages/"+personne.pseudo} className="itemMessageList" activeClassName="itemMessageActive">
            <div className="itemML-pictures">
                <img alt="profil picture" src={personne.picture_profil}/>
            </div>
            <div className="itemList-infos">
                <div className="itemList-info1">
                    <h2 className="itemList-pseudo">{personne.pseudo}</h2>
                    <p className="itemList-date">{date}</p>
                </div>
                <div className="itemList-info2">
                    <p className={compteur!==0 ? "itemList-message message-non-lus" : "itemList-message message-lus" } >{dernierMessage}</p>
                    <p className="itemList-newMP">{
                        compteur>9 ? <span className="plus9">+9</span> : <>{
                            compteur!==0 && <span className="moins9">{compteur}</span>
                        }</>
                    }</p>
                </div>
            </div>
        </NavLink>
     );
}

export default ItemList;