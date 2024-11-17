import React from 'react';
import './Reserve.css';
import { RxCross2 } from "react-icons/rx";
import useFetchdata from '../../Hooks/Usefetchdata';

const Reserve = ({seuloginreserve,hotelid}) => {
    const {data,load,error,refetch}=useFetchdata(`/hotels/room/${hotelid}`);
    

    console.log(data);
    return (
        <div className='reservecontainer'>
        <div className="reservesubcontainer">
        <RxCross2 className='rsserveicon' onClick={()=>seuloginreserve(false)}/>

           <span> Select your room:</span>
           {data.rooms?.map((item)=> (<div className='Ritem' key={item.hotelid}>
            <div className="Riteminfo">
            <div className="rtittle">{item.title}</div>
            <div className="rprice">{item.price}</div>
            <div className="rdescribtion">{item.describtion}</div>
            <div className="rmaxpeople"> max people {item.maxpeople}</div>
            </div>
            
            </div>))
           }

        </div>
        </div>
    );
};

export default Reserve;