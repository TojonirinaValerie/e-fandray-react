import React from 'react';
import Story from './component/Story';
import '../../styles/AccueilStyles/sectionCenterStyles.css'
import Publier from './component/Publier';
import Journal from './component/Journal';

interface SectionCenterProps {
    
}
 
const SectionCenter: React.FC<SectionCenterProps> = () => {
    return ( 
        <div className="sa-Center">
            <p className="sac-title">Actualités</p>
            <Publier />
            <Journal />
        </div>
     );
}

export default SectionCenter;