import logo from './logo.svg';
import './App.css';
import RequeteContrat from './RequeteContrat.js';
import RequeteStation from './RequeteStation.js';
import ListeContrats from './ListeContrats';


function App() {
  return (
    <div className='app'>
      <aside className='menu'>
        <div className='titre'>Stations vélos</div>
        <RequeteContrat></RequeteContrat>
      </aside>
      <div className='map'></div>
    </div>
  );
}

export default App;
