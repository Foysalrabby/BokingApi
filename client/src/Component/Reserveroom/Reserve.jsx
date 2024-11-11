import React from 'react';
import './Reserve.css';
import { RxCross2 } from "react-icons/rx";

const Reserve = ({seuloginreserve,hotelid}) => {
    return (
        <div className='reservecontainer'>
        <div className="reservesubcontainer">
        <RxCross2 className='rsserveicon' onClick={()=>seuloginreserve(false)}/>

        </div>
        </div>
    );
};

export default Reserve;