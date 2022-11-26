import './App.css';
import Facts from './components/Facts/Facts';
import StateComponent from './components/StateComponent/StateComponent';
import Sports from './components/Weather/Sports/Sports';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Facts></Facts>
        <StateComponent></StateComponent>
        <Sports></Sports>
      </header>
    </div>
  );
}

export default App;
