import GetBTCInfo from '../api/GetBTCInfo';

const btcPrice = "$10";

function Cryptoinfo() {
    return (
      <div>BTC Price: {GetBTCInfo()}</div>
    );
}

export default Cryptoinfo;