import React from 'react';
import '../CSS/App.css';

export default class InfoStation extends React.Component {
    constructor(props) {
        super(props)
        let test = props.name.split('-')
        this.number = test[0]
        this.name = test[1]
        this.address = props.address
        this.status = props.status == "OPEN" ? "Ouvert" : "Fermée"
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
        console.log(typeVelo);

        return (
            <div className='templateInfoStation'>
                <div className='ISNumber'>Station n°{this.number}</div>
                <div className='ISTitle'>{this.name}</div>
                <div className='ISAddress'>{this.address}</div>
                <div className='ISStatus'>{this.status}</div>
                <div>{typeVelo[0]} : {this.stands.bikes}</div>
                <div>{typeVelo[1]} : {this.stands.electricalBikes}</div>
                <div>{typeVelo[2]} : {this.stands.electricalInternalBatteryBikes}</div>
                <div>{typeVelo[3]} : {this.stands.electricalRemovableBatteryBikes}</div>
                <div>{typeVelo[4]} : {this.stands.mechanicalBikes}</div>
            </div>
        )
    }
}