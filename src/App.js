import logo from './logo.svg';
import './App.css';
import RequeteContrat from './RequeteContrat.js';
import RequeteStation from './RequeteStation.js';
import ListeContrats from './ListeContrats';


function App() {
  return (
    <div className='app'>
      <aside className='menu'>
        <h1 className='titre'>Stations vélos</h1>
        <ListeContrats></ListeContrats>
      </aside>
      <div className='map'></div>
    </div>
  );
}

export default App;
