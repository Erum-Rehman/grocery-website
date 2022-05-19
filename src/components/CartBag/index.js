import * as React from 'react';
import './index.scss';
import { TiTimes } from "react-icons/ti";
import ButnField from '../../components/Button';
import IncDec from "../../components/IncDec";
import { updateCartItem, removeCartItem } from '../../redux/Thunk/cart';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
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
import products from '../../mock/product';

const drawerWidth = 180;

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function PersistentDrawerRight({ handleCartClose, open }) {
    const theme = useTheme();
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const { cart: { totalPrice, products, products: cartProducts, quantity } } = useSelector(state => state);

    const increment = (item) => {
        item.count = item.count ? item.count + 1 : 1;
        dispatch(updateCartItem(item, cartProducts));
    }

    const decrement = (item) => {
        item.count = item.count > 1 ? item.count - 1 : 1;
        dispatch(updateCartItem(item, cartProducts));
    }
    const removeItem = (id) => {
        dispatch(removeCartItem(id));
    }

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
                anchor="right"
                open={open}
            >
                <DrawerHeader style={{ marginTop: '30px' }}>
                    <h4 className='bag-heading'>Bag Items<span>({quantity})</span></h4>
                    <IconButton onClick={handleCartClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    <div className='shopping-bag-body'>
                        {
                            products.map((item, index) => (
                                <div key={item} className='bag-items'>
                                    <img src={`${window.location.origin}/${item.image}`} className="bag-image" />
                                    <div className='item-name'>
                                        <h5 className="product-title">{item.name}</h5>
                                        <div className='item-price'>
                                            <div className='bag-item-count'>
                                                <IncDec onClickAdd={() => increment(item)}
                                                    onClickRemove={() => decrement(item)}
                                                    count={item.count} />
                                            </div>
                                            <TiTimes />
                                            <span className="new-price">${item.totalPrice}/kg</span>
                                        </div>
                                    </div>
                                    <div className='del-item'>
                                        <TiTimes className="del-icon" onClick={() => removeItem(item.id)} />
                                    </div>
                                </div>
                            ))
                        }
                        <p className='bag-total'>Subtotal: <span>${totalPrice}</span></p>
                        <div className='bag-btns'>
                            <ButnField title="VIEW CART" onClick={() => navigate("/cart")} />
                            <br />
                            <ButnField title="CHECKOUT" onClick={() => navigate("/checkout")} />
                        </div>
                    </div>
                </List>

                <Divider />
            </Drawer>
        </Box>
    );
}
