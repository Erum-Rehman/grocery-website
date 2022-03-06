// import React, { Component } from "react";
import './index.scss';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";

const Background = (props) => {
        return (
            <>
             <div className="product-banner">
                 <div className="overlay-1">
                     <h2 className="title">{props.title}</h2>
                     <ol className="list">
                     <li><Link to="/">Home</Link></li> <IoIosArrowForward className='arrow'/>
                     <li className='bg-title'>{props.title} </li>
                     </ol>
                </div>
               </div> 
            </>
        )
}
export default Background
