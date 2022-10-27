import React from 'react';
import './ListeContrats.css';


class ListeContrats extends React.Component {

    render() {
        return (
            <div class="ListeContrats">
                <div class="Villes">
                    <p>Paris</p>
                    <p>Bordeaux</p>
                    <p>Lyon</p>
                </div>
                <div class="Carte">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45246.837975507566!2d-0.6210314021042133!3d44.86377328541841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5527e8f751ca81%3A0x796386037b397a89!2sBordeaux!5e0!3m2!1sfr!2sfr!4v1666881560571!5m2!1sfr!2sfr" title="carte"></iframe>
                </div>
            </div>
        );
    }

}

export default ListeContrats;