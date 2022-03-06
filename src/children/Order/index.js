import React, { useState, useEffect } from 'react';
import ScreenOrder from './ScreenOrder';
import MobileOrder from './MobileOrder';

const Order = () => {
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
            {width <= 499 ? <MobileOrder /> : <ScreenOrder />}
        </>
    )
}
export default Order;