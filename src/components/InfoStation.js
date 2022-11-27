import React from 'react';
import '../CSS/App.css';

export default class InfoStation extends React.Component {
    constructor(props) {
        super(props)
        let test = props.name.split('-')
        this.number = test[0]
        this.name = test[1]
        this.address = props.address
        this.status = props.status === "OPEN" ? true : false
        this.stands = props.stands
    }

    render() {
        let standsKey = Object.keys(this.stands)
        let typeVelo = []

        for (let index = 0; index < standsKey.length; index++) {
            let element = standsKey[index];
            element = element.replace(/([A-Z])/g, ' $1')
            element = element.charAt(0).toUpperCase() + element.slice(1);
            typeVelo.push(element)
        }

        function getStatus(etat) {
            if(etat) {
                return "<span class=\"status status-ouvert\"></span>";
            } else {
                return "<span class=\"status status-ferme\"></span>";
            }
        }

        return (
            <div className='station'>
                <div className="station_header">
                    <div dangerouslySetInnerHTML={{__html: getStatus(this.status)}}></div>
                    <div className="station_header-item">
                        <h2>Station n°<span className='ISNumber'>{this.number}</span></h2>
                        <span className='ISTitle'>{this.name}</span>
                        <p className='ISAddress'>{this.address}</p>
                    </div>
                </div>

                <div className="station_infos">
                    <div className="station_infos-item"><span className="bold">Vélos totaux : </span> {this.stands.bikes}</div>
                    <div className="station_infos-item"><span className="bold">Vélos électriques totaux : </span> {this.stands.electricalBikes}</div>
                    <hr/>
                    <div className="station_infos-item"><span className="bold">Vélos électriques à batterie interne : </span> {this.stands.electricalInternalBatteryBikes}</div>
                    <div className="station_infos-item"><span className="bold">Vélos électriques à batterie amovible : </span> {this.stands.electricalRemovableBatteryBikes}</div>
                    <div className="station_infos-item"><span className="bold">Vélos mécaniques : </span> {this.stands.mechanicalBikes}</div>
                </div>
            </div>
        )
    }
}