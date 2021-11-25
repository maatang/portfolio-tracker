import Async from 'react-async';

function Cryptoinfo() {
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
            // TODO make this line cleaner update api to simply return the price.
            const cryptoPrice = Number(data.result[Object.keys(data.result)[0]].a[0]).toFixed(2);
            console.log(cryptoPrice);
            return `BTC Price: $${cryptoPrice}`
          } 
        }}
        </Async>
      </div>
    );
}

export default Cryptoinfo;