import React from 'react';

interface ItemPageListProps {
    type: "Groupe" | "Page"
    src: string
    nomPage: string
    abonne: number
}
 
const ItemPageList: React.FC<ItemPageListProps> = ({ type, src, nomPage, abonne}) => {
    return ( 
        <div className="pl-item">
            <div className="pli-image">
                <img src={src} alt="image"/>
            </div>
            
            <div className="pli-infos">
                <p className="page-name">{nomPage}</p>
                <p className="page-abonne">{abonne} {type=="Page" ? "mentions J'aime" : "membres"}</p>
            </div>
        </div>
     );
}

export default ItemPageList;