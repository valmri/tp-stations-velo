import './CSS/App.css';
import RequeteContrat from './components/RequeteContrat.js';
import Map from './components/Map.js';


function App() {
  return (
    <div className='app'>
      <div className='menu'>
        <div className='titre'>Stations vélos</div>
        <RequeteContrat></RequeteContrat>
      </div>
      <div className='map'>
        <Map></Map>
      </div>
    </div>
  );
}

export default App;
