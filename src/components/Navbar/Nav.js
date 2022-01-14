import React, { useState } from 'react';
import './App.css';
import PersistentDrawerLeft from '../Sidebar'
import MenuIcon from '@mui/icons-material/Menu';
import { width } from '@mui/system';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handleDrawerClose = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
        <PersistentDrawerLeft open={isOpen} handleDrawerClose={handleDrawerClose} />
            <nav className='main-navbar'>
                <div className="main-header">
                   
                    <div className="nav-logo">
                        
                     <MenuIcon onClick={handleDrawerClose} className='menu'/>
                    <img src={require("../../images/logo-2.png")} alt="" style={{width: 129, height: 34}} className='logo'/>
                    </div>
                   <ul className="nav-items">
                   <li>Home</li>
                   <li>Shop</li>
                   <li>Pages</li>
                   <li>Blogs</li>
                   <li >Contact</li>
                   </ul>
                    <div className="nav-contact">
                    <img src={require("../../images/phone.PNG")} alt="" style={{width: 140, height: 40}}/>
                    </div>
                </div>
               
              
            </nav>
        </>
    )
}
export default Nav;