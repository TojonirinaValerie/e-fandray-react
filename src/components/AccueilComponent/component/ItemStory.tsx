import React from 'react';

interface ItemStoryProps {
    pseudo: string
    contenue: string
}
 
const ItemStory: React.FC<ItemStoryProps> = ({pseudo, contenue}) => {
    return ( 
        <div className="item-story" style={{backgroundImage: "url('"+contenue+"')" , backgroundSize: "cover", backgroundPosition: "center"}}>
            <p>{pseudo}</p>
        </div>
     );
}

export default ItemStory;