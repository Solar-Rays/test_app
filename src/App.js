import './App.css';
import Sidebar from './Sidebar';
import MainContent from './MainContent'
import metadata from './metadata';

function App() {
  return (
    <div className="App">
      <div className='content'>
        <Sidebar name={metadata[0].name} age={metadata[0].age} gender={metadata[0].gender} height={metadata[0].height} />
        <MainContent />
      </div>

    </div>
  );
}

export default App;
