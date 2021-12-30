import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import CryptoInfo from './CryptoInfo';
import btcImage from '../img/BTC.png';
import ethImage from '../img/ETH.png';

interface getCryptoListButtonInfo {
    ticker: string
}

const cryptoImageDictionary: {[id: string]: string; } = {
    "BTC": btcImage,
    "ETH": ethImage
}

function CryptoListButton(prop: getCryptoListButtonInfo) {

  return (
    <ListItemButton>
    <ListItemAvatar>
        <Avatar>
            <img src={cryptoImageDictionary[prop.ticker]}/>
        </Avatar>
    </ListItemAvatar>
    <CryptoInfo ticker={prop.ticker}/>
    </ListItemButton>
  );
}

export default CryptoListButton;