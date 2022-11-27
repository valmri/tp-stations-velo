import React from 'react';
import '../CSS/Map.css';
import { MapContainer, TileLayer} from 'react-leaflet'
import RequeteStation from './RequeteStation';
import 'leaflet/dist/leaflet.css'

class Map extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            updateVille: null
        };
        this.x = this.props.x || 46
        this.y = this.props.y || 2
    }

    render() {
        return (
            <MapContainer center={[this.x, this.y]} zoom={6} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright%22%3EOpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <RequeteStation contrat={this.props.contrat}></RequeteStation>
            </MapContainer>
        );
    }

}

export default Map;