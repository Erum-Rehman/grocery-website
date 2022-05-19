import React, { useState, useEffect } from 'react';
import PageNavbar from "./PageNavbar";
import HomeNavbar from "./HomeNavbar";
import MobileNavbar from "./MobileNavbar";
import { useLocation } from "react-router-dom";

const Navbar = () => {

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
      {width <= 499 ? <MobileNavbar/> : location.pathname === "/" ? <HomeNavbar /> : <PageNavbar/>}
    </>
  )
}
export default Navbar;

