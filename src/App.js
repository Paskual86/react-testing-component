import './App.css';
import Facts from './components/Facts/Facts';
import StateComponent from './components/StateComponent/StateComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Facts></Facts>
        <StateComponent></StateComponent>
      </header>
    </div>
  );
}

export default App;
