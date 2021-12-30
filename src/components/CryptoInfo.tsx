import Async from 'react-async';

interface getCryptoInfo {
  ticker: string
}



function CryptoInfo(props: getCryptoInfo) {
  const btcPrice = () => fetch("http://localhost:8000/asset-api/cryptoprice/BTC")
  .then(res => (res.ok ? res : Promise.reject(res)))
  .then(res => res.json())
    return (
      <div>
        <Async promiseFn={btcPrice}>
        {({ data, error, isLoading }) => {
          if (isLoading) return "Loading..."
          if (error) {
            if (error.status === 429) {
              return setTimeout(() => CryptoInfo(props), 1000);
            }
            else
            {
              return `Something went wrong: ${error.message}`
            }
          }
          if (data) {
            const cryptoPrice = Number(data.priceInUsd).toFixed(2);
            return props.ticker + ` - $${cryptoPrice}`
          } 
        }}
        </Async>
      </div>
    );
}

export default CryptoInfo;