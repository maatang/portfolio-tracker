import Async from 'react-async';
import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CryptoInfo from './CryptoInfo';
import btc from '../img/btc.png';

function CryptoList() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItemButton>
            <ListItemAvatar>
              <Avatar>
                <img src={btc}/>
              </Avatar>
            </ListItemAvatar>
            <CryptoInfo/>
          </ListItemButton>
          <ListItemButton>
            <ListItemAvatar>
              <Avatar>
                <WorkIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Work" secondary="Jan 7, 2014" />
          </ListItemButton>
          <ListItemButton>
            <ListItemAvatar>
              <Avatar>
                <BeachAccessIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Vacation" secondary="July 20, 2014" />
          </ListItemButton>
        </List>
      </CardContent>
    </Card>
  );
}

export default CryptoList;