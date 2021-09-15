import '../../../styles/AccueilStyles/sectionDroiteStyles.css';

interface ItemDiscussionProps {
    profil: string
    pseudo: string
}
 
const ItemDiscussion: React.FC<ItemDiscussionProps> = ({profil, pseudo}: ItemDiscussionProps) => {
    return ( 
        <div className="itemDiscussion">
            <div className="id-profil"> 
                <img src={profil}/> 
                
            </div>
            <div className="status"></div>
            <p className="id-pseudo">{pseudo}</p>
        </div>
     );
}
 
export default ItemDiscussion;