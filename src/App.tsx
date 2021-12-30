import './App.css';
import LineGraph from './components/LineGraph';
import CryptoList from './components/CryptoList'

function App() {
  return (
    <div className="App">
      <h2>Investment Portfolio</h2>
      <div className="CenterRow">
        <div className="LineGraphContainerMed FlexCentered">
          <LineGraph/>
        </div>
        <div>
          <CryptoList/>
        </div>
      </div>
    </div>
  );
}

export default App;
