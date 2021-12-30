import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import CryptoInfo from './CryptoInfo';
import btcImage from '../img/BTC.png';
import ethImage from '../img/ETH.png';
import adaImage from '../img/ADA.png';

interface getCryptoListButtonInfo {
    ticker: string
}

const cryptoImageDictionary: {[id: string]: string; } = {
    "BTC": btcImage,
    "ETH": ethImage,
    "ADA": adaImage
}

function CryptoListButton(prop: getCryptoListButtonInfo) {

  return (
    <ListItemButton>
    <ListItemAvatar>
        <Avatar sx={{  bgcolor: 'background.paper'}}>
            <img src={cryptoImageDictionary[prop.ticker]}/>
        </Avatar>
    </ListItemAvatar>
    <CryptoInfo ticker={prop.ticker}/>
    </ListItemButton>
  );
}

export default CryptoListButton;