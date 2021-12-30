import Async from 'react-async';

function CryptoInfo() {
  const btcPrice = () => fetch("http://localhost:8000/asset-api/cryptoprice/BTC")
  .then(res => (res.ok ? res : Promise.reject(res)))
  .then(res => res.json())
    return (
      <div>
        <Async promiseFn={btcPrice}>
        {({ data, error, isLoading }) => {
          if (isLoading) return "Loading..."
          if (error) return `Something went wrong: ${error.message}`
          if (data) {
            const cryptoPrice = Number(data.priceInUsd).toFixed(2);
            return `BTC - $${cryptoPrice}`
          } 
        }}
        </Async>
      </div>
    );
}

export default CryptoInfo;