import React from 'react';
import ItemStory from './ItemStory';

interface StoryProps {
    
}
 
const Story: React.FC<StoryProps> = () => {
    return ( 
        <div className="story">
            <ul>
                <li><ItemStory pseudo="Tojokely" contenue="./media/DSC_0695.jpg"/></li>
                <li><ItemStory pseudo="Tojokely" contenue="./media/DSC_0695.jpg"/></li>
                <li><ItemStory pseudo="Tojokely" contenue="./media/DSC_0695.jpg"/></li>
                <li><ItemStory pseudo="Tojokely" contenue="./media/DSC_0695.jpg"/></li>
                <li><ItemStory pseudo="Tojokely" contenue="./media/DSC_0695.jpg"/></li>
                <li><ItemStory pseudo="Tojokely" contenue="./media/DSC_0695.jpg"/></li>
                <li><ItemStory pseudo="Tojokely" contenue="./media/DSC_0695.jpg"/></li>
                <li><ItemStory pseudo="Tojokely" contenue="./media/DSC_0695.jpg"/></li>
                <li><ItemStory pseudo="Tojokely" contenue="./media/DSC_0695.jpg"/></li>
                <li><ItemStory pseudo="Tojokely" contenue="./media/DSC_0695.jpg"/></li>
                <li><ItemStory pseudo="Tojokely" contenue="./media/DSC_0695.jpg"/></li>
                <li><ItemStory pseudo="Tojokely" contenue="./media/DSC_0695.jpg"/></li>
                <li><ItemStory pseudo="Tojokely" contenue="./media/DSC_0695.jpg"/></li>
            </ul>
            
        </div>
     );
}

export default Story;