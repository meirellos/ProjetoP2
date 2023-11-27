import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';
import HistoryIcon from '@mui/icons-material/History';
import LogoutIcon from '@mui/icons-material/Logout';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const drawerWidth = 240;

export default function DrawerPrincipal ({ content }) {

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar style={{background: 'linear-gradient(to right, #59038f, #b239ff)', height: 90, textAlign: 'center',display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <Typography variant="h5" noWrap component="div" style={{fontSize: 30}}>
            Pizzaria <span style={{color:'#ff0000'}}>Maxxis</span>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar style={{background: 'linear-gradient(to right, #59038f, #b239ff)', height: 100, boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}/>      
        <List style={{backgroundColor: '#dedede', height: '100vh'}}>
          <ListItem key='1' disablePadding>
            <ListItemButton Button to='/admin/produtos'>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary='Home' />
            </ListItemButton>
          </ListItem>

          <ListItem key='2' disablePadding>
            <ListItemButton Button to='/admin/cadastrar'>
              <ListItemIcon>
                <AddIcon />
              </ListItemIcon>
              <ListItemText primary='Cadastrar' />
            </ListItemButton>
          </ListItem>

          <ListItem key='2' disablePadding>
            <ListItemButton Button to='/admin/historico-vendas'>
              <ListItemIcon>
                <HistoryIcon />
              </ListItemIcon>
              <ListItemText primary='Histórico de vendas' />
            </ListItemButton>
          </ListItem>

          <ListItem key='3' disablePadding>
            <ListItemButton Button to='/'>
              <ListItemIcon>
                <ShoppingCartIcon />
              </ListItemIcon>
              <ListItemText primary='Visualizar a Loja' />
            </ListItemButton>
          </ListItem>
        

          <ListItem key='4' disablePadding>
            <ListItemButton onClick={() => sessionStorage.removeItem('tokenAdmin')} to='/admin'>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary='Sair' />
            </ListItemButton>
          </ListItem>
          </List>
          
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: '#fff', p: 3 }}
        style={{ minHeight: '100vh' }}
      >
        <Toolbar />
        <Typography>
          {content}
        </Typography>
      </Box>
    </Box>
  );
}