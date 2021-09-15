import React from 'react';

interface MDProfilProps {
    
}
 
const MDProfil: React.FC<MDProfilProps> = () => {
    return ( 
        <div className="md-profil">
            <div className="md-profil-container">
                <img alt="profil picture" src="../media/Me.jpg"/>
            </div>
            <h3>Tojonirina Tsilavina Valerie</h3>
            <h3>IMTICIA 13 (N°16)</h3>
            <hr />
            <div className="md-info">
                <table>
                    <tr>
                        <td><i className="fas fa-home"></i></td>
                        <td>Itaosy, Antananarivo</td>
                    </tr>
                    <tr>
                        <td><i className="fas fa-phone"></i></td>
                        <td>0334603984</td>
                    </tr>
                    <tr>
                        <td><i className="far fa-envelope"></i></td>
                        <td>tsilavinatojo01@gmail.com</td>
                    </tr>
                </table>
            </div>
            <hr />
            <div className="md-rs">
                <ul>
                    <li><a href="https://www.facebook.com"><i className="fab fa-facebook"></i></a></li>
                    <li><a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a></li>
                </ul>
            </div>
        </div>
     );
}
 
export default MDProfil;