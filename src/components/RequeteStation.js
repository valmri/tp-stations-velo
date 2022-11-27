import React from "react";
import { Marker, Popup } from 'react-leaflet'
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import { Icon } from 'leaflet'
import InfoStation from './InfoStation'

export default class RequeteStation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            stations: []
        };
    }

    componentDidUpdate() {
        fetch("https://api.jcdecaux.com/vls/v3/stations?apiKey=7886a12c53604b2668a08582a04795afcc9375b0&contract="+this.props.contrat)
            .then(res => res.json())
            .then(
                (result) => {
                    /*
                    let lesStations = []
                    //let contractName = ['rouen','lyon','toulouse','amiens','mulhouse',"nancy",'creteil','cergy-pontoise','marseille','nantes']
                    //let contractName = ['lyon']
                    let contractName = [this.props.contrat];

                    result.forEach(element => {
                        if (contractName.includes(element.contractName)) {
                            lesStations.push(element)
                        }
                    });
                    */

                    this.setState({
                        isLoaded: true,
                        stations: result
                    });

                },

                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }


            )
    }

    render() {

        const { error, isLoaded, stations } = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            if(!error && isLoaded && stations) {
                return (
                    <div>
                        {
                            stations.map(item => (
                                <Marker position={[item.position.latitude, item.position.longitude]} icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })}>
                                    <Popup>
                                        <InfoStation name={item.name} address={item.address} status = {item.status} stands = {item.totalStands.availabilities}></InfoStation>
                                    </Popup>
                                </Marker>
                            ))
                        }
                    </div>
                );
            }
        }
    }
}