import React from 'react';
import SectionCenter from '../components/AccueilComponent/SectionCenter';
import SectionDroite from '../components/AccueilComponent/SectionDroite';
import SectionGauche from '../components/AccueilComponent/SectionGauche';
import Sidebar from '../components/Sidebar';
import '../styles/AccueilStyles/accueil.css';


interface AccueilProps {
    
}
 
const Accueil: React.FC<AccueilProps> = () => {
    return ( 
        <div className="contener">
            <Sidebar />
            <SectionGauche />
            <SectionCenter />
            <SectionDroite />
        </div>
     );
}

export default Accueil;