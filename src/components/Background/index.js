// import React, { Component } from "react";
import './index.css';

// const Background = () => {
//     return(
//         <>
//        
//         </>
//     )
// }
// export default Background

// 
const Background = (props) => {
        return (
            <>
             <div className="product-banner">
                 <div className="overlay-1">
                     <h2 className="title">{props.title}</h2>
                     {/* <ol className="list">
                         <li>Home</li> */}
                

                         {/* <li> About Us</li> */}
                     {/* </ol> */}

                </div>
               </div> 
            </>
        )
}
export default Background
