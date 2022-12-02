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

    componentDidUpdate(prevProps, prevState) {

        if(prevState.stations === this.state.stations){ 
            fetch("https://api.jcdecaux.com/vls/v3/stations?apiKey=7886a12c53604b2668a08582a04795afcc9375b0&contract="+this.props.contrat)
                .then(res => res.json())
                .then(
                    (result) => {
    
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
                    <div className="maDIVquirendouf">
                        {
                            stations.map(station => (
                                <div className="stations">
                                    <Marker position={[station.position.latitude, station.position.longitude]} icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })}>
                                        <Popup>
                                            <InfoStation name={station.name} address={station.address} status = {station.status} stands = {station.totalStands.availabilities}></InfoStation>
                                        </Popup>
                                    </Marker>
                                </div>
                            ))
                        }
                    </div>
                );
            }
        }
    }
}