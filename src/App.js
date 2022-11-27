import './CSS/App.css';
import RequeteContrat from './components/RequeteContrat.js';
import Map from './components/Map.js';
import {Component, useState} from "react";


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contrat: 'Lyon'
        };
    }

    childToParent = (childData) => {
        this.setState({
            contrat: childData
        })
    }

    render() {
        return (
            <div className='app'>
                <div className='menu'>
                    <div className="menu-header">
                        <h1 className='titre'><i className="las la-bicycle"></i> Stations vélos</h1>
                    </div>
                    <RequeteContrat childToParent={this.childToParent}></RequeteContrat>
                </div>
                <div className='map'>
                    <Map contrat={this.state.contrat}></Map>
                </div>
            </div>
        );
    }
}

export default App;
