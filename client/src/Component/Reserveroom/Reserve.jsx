import React, { useState } from 'react';
import './Reserve.css';
import { RxCross2 } from "react-icons/rx";
import useFetchdata from '../../Hooks/Usefetchdata';

const Reserve = ({seuloginreserve,hotelid}) => {
    const {data,load,error,refetch}=useFetchdata(`/hotels/room/${hotelid}`);
    console.log(data);
 const [selectrooms,setselectedroom] =useState([]);   
 const handlesclect=(e)=>{
         const checked=e.target.checked;
         var values=e.target.value;
         setselectedroom(checked ? [...selectrooms,values] :selectrooms.filter((item)=> item !== values) );
    }
    console.log(selectrooms);

    return (
        <div className='reservecontainer'>
        <div className="reservesubcontainer">
        <RxCross2 className='rsserveicon' onClick={()=>seuloginreserve(false)}/>

           <span> Select your room:</span>
           {data.rooms?.map((item)=> (<div className='Ritem' key={item._id}>
            <div className="Riteminfo">
            <div className="rtittle">{item.title}</div>
            <div className="rprice">{item.price}</div>
            <div className="rdescribtion">{item.describtion}</div>
            <div className="rmaxpeople"> max people {item.maxpeople}</div>
            </div>
            {
                item.roomnum.map((roomnumid) =>(<div className='roomid' key={roomnumid._id}>
                <label>{roomnumid.number}</label>
                <input type='checkbox' value={roomnumid._id} onChange={handlesclect}/>
                </div>))
            }
            
            </div>))
           }

        </div>
        </div>
    );
};

export default Reserve;