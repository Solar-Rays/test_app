import './App.css';
import Sidebar from './Sidebar';
import MainContent from './MainContent'
import metadata from './metadata';

function App() {
  return (
    <div className="App">
      <div className='content'>
        {metadata.map((value) => {
          return (
            <Sidebar
              name={value.name}
              age={value.age}
              gender={value.gender}
              height={value.height}
            />)
        })}

        <MainContent />
      </div>

    </div>
  );
}

export default App;
