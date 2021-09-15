import React from 'react';
import ListPage from './component/ListPage';
import '../../styles/AccueilStyles/sectionGaucheStyles.css';
import PageData from '../../datas/PageData';
import GroupeData from '../../datas/GroupeData';

interface SectionGaucheProps {
    
}
 
const SectionGauche: React.FC<SectionGaucheProps> = () => {
    return ( 
        <div className="sa-Gauche">
            <ListPage title="Les Page que vous aimez" list={PageData}/>
            <ListPage title="Vos Groupes" list={GroupeData}/>
        </div>
     );
}

export default SectionGauche;