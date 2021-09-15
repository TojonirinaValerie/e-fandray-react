import ItemJournal from "./ItemJournal";
import JournalData from '../../../datas/JournalData';


interface JournalProps {
    
}
 
const Journal: React.FC<JournalProps> = () => {
    return ( 
        <div className="journal">
            {JournalData.map((item) => {
                return (
                    <ItemJournal 
                        profil={item.profil} 
                        pseudo={item.pseudo}
                        date={item.date}
                        contenue={item.contenue}
                        img_contenue={item.image_contenue}
                    />        
                )
            })}
        </div>
     );
}
 
export default Journal;