import React from 'react';
import '../CSS/App.css';
import { MapContainer, TileLayer} from 'react-leaflet'
import RequeteStation from './RequeteStation';
import 'leaflet/dist/leaflet.css'

class Map extends React.Component {

    

    render() {
        return (
            <MapContainer center={[45.750000, 4.850000]} zoom={13} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright%22%3EOpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <RequeteStation></RequeteStation>
            </MapContainer>
        );
    }

}

export default Map;