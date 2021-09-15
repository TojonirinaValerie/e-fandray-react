interface ItemJournalProps {
    profil: string
    pseudo: string
    date: string
    contenue: string
    img_contenue?: string
}
 
const ItemJournal: React.FC<ItemJournalProps> = ({profil, pseudo, date, contenue, img_contenue}) => {
    return ( 
        <div className="item-journal">
            <div className="ij-header">
                <div className="ijh-picture">
                    <img src={profil}/>
                </div>
                <div className="ijh-info">
                    <p className="ijh-pseudo">{pseudo}</p>
                    <p className="ijh-date">{date}</p>
                </div>
            </div>
            <div className="ij-contenue">
                <p className="ij-contenue-texte">
                    {contenue}
                </p>
                {
                    img_contenue && 
                        <p className="ij-contenue-multimedia">
                            <img src={img_contenue}/>
                        </p>
                }
            </div>
            <hr className="ligne"></hr>
            <div className="ij-like">
                <ul>
                    <li><i className="fas fa-heart j-aime"></i> J'aime</li>
                    <li><i className="fas fa-comments coms"></i> Commentaire</li>
                    <li><i className="fas fa-share partage"></i> Partager</li>
                </ul>
            </div>
            <hr className="ligne"></hr>
            <div className="ij-input">
                <div className="iji-profil">
                    <img src="../media/Me.jpg"/>
                </div>
                <div className="iji-input-com">
                    <input type="texte" placeholder="Ecrivez un commentaire..."/>
                    <ul>
                        <li><i className="far fa-smile"></i></li>
                        <li><i className="far fa-smile"></i></li>
                    </ul>
                </div>
            </div>
        </div>
     );
}
 
export default ItemJournal;