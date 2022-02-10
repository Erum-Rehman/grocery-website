import ReactStars from 'react-rating-stars-component';
import { AiOutlineStar } from "react-icons/ai";


const Rating = () => {
    // const ratingChanged = (rating) => {
    //     alert(`you give ${rating} star for us`)
    // }
    return(
        <>
            <div>
                <ReactStars activeColor='#f96822' size='20' isHalf={true}
                count={5} 
                //  onChange={ratingChanged}
                 />
            </div>
        </>
    )
}
export default Rating