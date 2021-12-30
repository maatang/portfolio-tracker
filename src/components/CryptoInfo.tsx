import { StyledEngineProvider } from '@mui/material';
import Async from 'react-async';
import sleep from '../common/sleep';
import { useState, useEffect } from 'react';

interface getCryptoInfo {
  ticker: string
}



function CryptoInfo(props: getCryptoInfo) {
  const [errorFetchedChecker, setErrorFetchedChecker] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [cryptoPrice, setCryptoPrice] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/asset-api/cryptoprice/' + props.ticker)
      .then(async response => {
        if(response.ok) {
          return response.json()
        } else {
          if(response.status === 429)
          {
            // If we hit api limit wait 1 second and try again
            await sleep(1000);
            setErrorFetchedChecker(c => !c);
          }
          throw new Error(`${response.status}`);
        }
      })
      .then(data => {
        setCryptoPrice(data.priceInUsd);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
      })
  }, [errorFetchedChecker]);

  return (
    <div>
      {props.ticker} - ${(Number(cryptoPrice).toFixed(2))}
    </div>
  );
}


export default CryptoInfo;