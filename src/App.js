import './CSS/App.css';
import RequeteContrat from './components/RequeteContrat.js';
import Map from './components/Map.js';


function App() {
  return (
    <div className='app'>
      <div className='menu'>
        <div className="menu-header">
            <h1 className='titre'><i className="las la-bicycle"></i> Stations vélos</h1>
        </div>
        <RequeteContrat></RequeteContrat>
      </div>
      <div className='map'>
        <Map></Map>
      </div>
    </div>
  );
}

export default App;
