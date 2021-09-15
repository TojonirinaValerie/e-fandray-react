import React from 'react';
import ItemPageList from './ItemPageList';

interface ListPageProps {
    title: "Les Page que vous aimez" | "Vos Groupes"
    list: {
        picture: string
        name: string
        membre: number
    }[]
}
 
const ListPage: React.FC<ListPageProps> = ({title, list}: ListPageProps) => {
    return ( 
        <div className="page-groupe-list">
            <p>{title}</p>
            <ul>
                {
                    list.map((item) => {
                        return(
                            <li><ItemPageList type={title=="Vos Groupes" ? "Groupe": "Page"} src={item.picture} nomPage={item.name} abonne={item.membre}/> </li>
                        )
                    })
                }
            </ul>
        </div>
     );
}

export default ListPage;