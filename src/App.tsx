import './App.css';
import LineGraph from './components/LineGraph';
import Cryptoinfo from './components/CryptoInfo';

function App() {
  return (
    <div className="App">
      <h2>Investment Portfolio</h2>
      <div className="CenterRow">
        <div className="LineGraphContainerMed FlexCentered">
          <LineGraph/>
        </div>
        <div>
          <Cryptoinfo/>
        </div>
      </div>
    </div>
  );
}

export default App;
