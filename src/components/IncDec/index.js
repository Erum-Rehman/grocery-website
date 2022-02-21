import './index.css';
import { IoIosAdd, IoIosRemove } from 'react-icons/io';
import { useSelector } from "react-redux";

const IncDec = (props) => {
    
    return (
        <>
            <div className='add-remove-container'>
                <button onClick={props.onClickRemove}><IoIosRemove /></button>
                <div>{props.count}</div>
                <button onClick={props.onClickAdd}><IoIosAdd /></button>
            </div>
        </>
    )
}
export default IncDec

