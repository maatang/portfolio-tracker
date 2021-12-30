import List from '@mui/material/List';
import Card from '@mui/material/Card';
import { CardHeader } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CryptoListButton from './CryptoListButton';

function CryptoList() {
  const cryptos = ["BTC", "ETH", "ADA"];
  const cryptoListButtons: JSX.Element[] = [];
  cryptos.forEach(t => {
    cryptoListButtons.push(<CryptoListButton ticker={t}/>)
  });

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          {cryptoListButtons}
        </List>
      </CardContent>
    </Card>
  );
}

export default CryptoList;