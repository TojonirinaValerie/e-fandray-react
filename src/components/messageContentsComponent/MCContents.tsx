import React, { useState } from 'react';
import MCTextContent from './MCTextContent';
import {Iperson as person} from '../../datas/MessageData';
import datas from '../../datas/MessageData';
import profil from '../../../src/media/Me.jpg';

interface MCContentsProps {
    numero: number
}
interface Imessage{
    message: { 
        id: number; 
        contenue: string; 
        date: string; 
        lus: boolean; 
        envoyerPar: boolean; 
    }[]; 
}

 
function MCContents({numero}: MCContentsProps){
    const [data, setDatas] = useState<person[]>(datas);
    var liste;
    

    return ( 
        <div className="mc-contents">
            {
                data.map((item) => {
                    return(
                        item.numero==numero && item.message.map((mp) =>{
                            return (
                                <MCTextContent
                                    position={mp.envoyerPar}
                                    texte={mp.contenue}
                                    image= {item.picture_profil}
                                />
                            )
                        })
                    )
                })
            }
        </div>
     );
}
 
export default MCContents;