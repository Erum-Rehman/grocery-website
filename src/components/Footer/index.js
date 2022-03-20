import React, { useState, useEffect } from 'react';
import MobileFooter from './MobileFooter';
import ScreenFooter from './ScreenFooter';
import { useLocation } from "react-router-dom";

const Footer = () => {
    
    const location = useLocation();
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
        <>
        {width <= 499 ? <MobileFooter /> : <ScreenFooter />}
        </>
    )
}
export default Footer;

