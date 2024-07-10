import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import {useNavigate} from 'react-router-dom';
import './index.scss';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/Action/user';
import { deleteCart } from '../../redux/Action';
import { signOut, auth } from '../../config/fire';
import { delOrder } from '../../redux/Action/order';

export default function FadeMenu({MenuTitle, options, onClick, href_link, classname}) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (item) => {
        if(item.href_link) navigate(item.href_link)
        else {
            signOut(auth).then(() => {
                dispatch(loginUser({}))
                dispatch(deleteCart())
                dispatch(delOrder())
                localStorage.removeItem('isAuthenticated');
                console.log("logout")
            }).catch(function(error) {
                console.log({error})
              });
        }
    };

    return (
        <div>
            <Button
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                className={classname}
            >
                {MenuTitle}
            </Button>
            <Menu
                id="fade-menu"
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={() => setAnchorEl(null)}
                TransitionComponent={Fade}
            >
                {options.map((item, index) =>
                    <MenuItem onClick={() => handleClose(item)} key={index}> {item?.name || item}</MenuItem>
                )}
            </Menu>
        </div>
    );
}
