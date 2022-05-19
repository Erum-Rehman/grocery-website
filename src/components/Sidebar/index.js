import React, {useEffect, useState} from 'react';
import './index.scss';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Icons from '../../icons';
import { AiOutlineHome, AiOutlineShoppingCart, AiOutlineContacts } from "react-icons/ai";
import { HiOutlineUsers } from "react-icons/hi";
import { useLocation, Link } from "react-router-dom";
import Home from '../../pages/Home/Home';
import About from '../../pages/About';
import Contact from '../../pages/Contact';
import Products from '../../pages/Products';

const drawerWidth = 180;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft({ handleMenuClose, open }) {
  const theme = useTheme();
  const location = useLocation();
  // const navigate = useNavigate();

  const items = [
    { name: 'Fruits & Vegetables', icon: 'FRUIT_VEGETABLE' },
    { name: 'Meat & Fish', icon: 'MEAT_FISH' },
    { name: 'Dairy Food', icon: 'DAIRY_FOOD' },
    { name: 'Snacks & Beverages', icon: 'SNACKS_BEVERAGES' },
    { name: 'Organic Foods', icon: 'ORGANIC_FOODS' },
    { name: 'Pet Care', icon: 'PET_CARE' },
    { name: 'Baby Care', icon: 'BABY_CARE' },
    { name: 'Home Cleaning', icon: 'HOME_CLEANING' },
    { name: 'Covid-19 Protection', icon: 'HOME_CLEANING' }
  ];
  const sideMenu = [
    { name: 'Home', icon: <AiOutlineHome />},
    { name: 'About', icon: <HiOutlineUsers />, path: '/about' },
    { name: 'Products', icon: <AiOutlineShoppingCart /> },
    { name: 'Contact', icon: <AiOutlineContacts /> },
  ]
  const [width, setWidth] = useState(window.screen.width);

  useEffect(() => {

    window.addEventListener('resize', updateDimensions);

    return () => {
      window.removeEventListener('resize', updateDimensions);
    }

  }, [window.screen.width])

  const updateDimensions = () => {
    setWidth(window.screen.width)
  };
  return (
    <Box sx={{ display: 'flex' }}>

      <Drawer
        sx={{
          width: 365,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 365,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader style={{ marginTop: '30px' }}>
          {location.pathname === '/' ?
            <h4 className='sidebar-heading'>All Category</h4>
            : <div></div>
          }
          <IconButton onClick={handleMenuClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        {location.pathname === '/' ?
          <List>
            {items.map((item, index) => (
              <ListItem button key={index}>
                <ListItemIcon>
                  {Icons[item.icon]}
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItem>
            ))}

          </List>
          :location.pathname !== '/'?
          <List>
          {sideMenu.map((item, index) => (
            <ListItem button key={index}>
              <ListItemIcon className='sidemenu-icon'>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItem>
          ))}

        </List>
          :width <= 499 ?
          <List>
            {sideMenu.map((item, index) => (
              <ListItem button key={index}>
                <ListItemIcon className='sidemenu-icon'>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItem>
            ))}

          </List>
        :<div></div>
            }
        <Divider />
      </Drawer>
    </Box>
  );
}
