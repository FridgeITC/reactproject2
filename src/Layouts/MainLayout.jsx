import * as React from 'react';
import { Outlet } from 'react-router-dom';
import axios from '../Config/axios';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SettingsIcon from '@mui/icons-material/Settings';
import AccordionNav from '../Components/AccordionNav';
import ModalAgregaLocal from '../Components/ModalAgregaLocal';
import { useNavigate } from 'react-router-dom';

import ndsLogo from '../Assets/Images/nds-logo.webp';

const drawerWidth = 240;
const zonasArray = [];
const localArray = [];

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  })
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open'
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end'
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [zonas, setZonas] = React.useState([]);
  const [locales, setLocales] = React.useState([]);
  const [nav, setNav] = React.useState(new Array());
  const navigate = useNavigate();

  const handleRedirect = (route) => {
    navigate(route);
    window.location.reload();
  };

  const getName = (id) => {
    for (let i = 0; i < zonasArray.length; i++) if (zonasArray[i].id === id) return zonasArray[i].name;
  };

  const mapLocales = (zonas, locales) => {
    const navMap = new Map();
    for (let i = 0; i < zonas.length; i++) navMap.set(zonas[i].id, new Array());
    navMap.forEach((value, key) => {
      for (let i = 0; i < locales.length; i++) if (key === locales[i].zoneId) value.push(locales[i]);
    });

    const navArray = [...navMap];

    for (let i = 0; i < navArray.length; i++) navArray[i][0] = [navArray[i][0], getName(navArray[i][0])];

    return navArray;
  };

  React.useEffect(() => {
    const fetchData = async (endpoint) => {
      const response = await axios.get(endpoint);
      return response.data;
    };
    fetchData('/zone/')
      .then((z) => {
        z.forEach((e) => {
          zonasArray.push(e);
        });
        setZonas(zonasArray);
        fetchData('/local/').then((l) => {
          l.forEach((e) => {
            localArray.push(e);
          });
          setLocales(localArray);
          setNav(mapLocales(zonasArray, localArray));
        });
      })
      .catch((err) => {
        console.log(err.response.status);
        if (err.response.status == 401) handleRedirect('/login');
      });
  }, []);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position='fixed' open={open}>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <a role='button' onClick={() => handleRedirect('/')} style={{ cursor: 'pointer' }}>
            <img src={ndsLogo} alt='logo' className='logo-img' />
          </a>
        </Toolbar>
      </AppBar>
      {/* Sidebar Starts */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box'
          }
        }}
        variant='persistent'
        anchor='left'
        open={open}
      >
        <div>
          <DrawerHeader>
            <p style={{ textAlign: 'left', width: '100%', paddingLeft: '1rem' }}>¡Bienvenido!</p>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          {nav.length > 0 ? (
            nav.map((z) => {
              return <AccordionNav key={z[0]} zona={z} zonas={zonas} />;
            })
          ) : (
            <> </>
          )}
        </div>
        <div
          style={{
            paddingLeft: '1rem'
          }}
        >
          <Divider />
          <ModalAgregaLocal />
        </div>
      </Drawer>
      {/* Sidebar Ends */}
      <Main open={open} style={{ backgroundColor: '#F9FAFC' }}>
        <DrawerHeader />
        <Outlet />
      </Main>
    </Box>
  );
}
