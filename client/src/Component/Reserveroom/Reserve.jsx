import React, { useContext, useState } from 'react';
import './Reserve.css';
import { RxCross2 } from "react-icons/rx";
import useFetchdata from '../../Hooks/Usefetchdata';
import { SearchContext } from '../../context/Searchcontext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Reserve = ({seuloginreserve,hotelid}) => {
    const {data,load,error,refetch}=useFetchdata(`/hotels/room/${hotelid}`);
    //console.log(data);
 const [selectrooms,setselectedroom] =useState([]);   
 const {dates}=useContext(SearchContext);
 const handlesclect=(e)=>{
         const checked=e.target.checked;
         var values=e.target.value;
         setselectedroom(checked ? [...selectrooms,values] :selectrooms.filter((item)=> item !== values) );
    }
    //console.log(selectrooms);
    const getrange = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const date = new Date(start?.getTime());
        const dates = [];
        while (date < end) { // Corrected typo here
            dates.push(new Date(date)?.getTime());
            date.setDate(date?.getDate() + 1);
        }
        return dates;
    };
    //console.log(getrange(dates[0]?.startDate,dates[0]?.endDate));
   const alldate= getrange(dates[0]?.startDate,dates[0]?.endDate);

    //room number selected then it is unavailable
    const isavailable=(roomnum)=>{
          const foundnum=roomnum.unavialabledate.some((date)=>alldate.includes(
            new Date(date).getTime()));
            return ! foundnum;
    }
    const navigate=useNavigate();
    const handliclick=async()=>{
        try{
            await Promise.all(
                selectrooms.map((roomid)=>{
                    const res= axios.put(`/rooms/availability/${roomid}`,{
                        dates:alldate
                    });
                    return res.data;
                })
            );
            seuloginreserve(false);
            navigate("/payment");
        }catch(error){
             console.log(error);
        }

    }

    return (
        <div className='reservecontainer'>
        <div className="reservesubcontainer">
        <RxCross2 className='rsserveicon' onClick={()=>seuloginreserve(false)}/>

           <span> Select your room:</span>
           {data.rooms?.map((item)=> (<div className='Ritem' key={item._id}>
            <div className="Riteminfo">
            <div className="rtittle">{item.title}</div>
            <div className="rprice">Price {item.price}</div>
            <div className="rdescribtion">{item.describtion}</div>
            <div className="rmaxpeople"> max people {item.maxpeople}</div>
            </div>
            <div className="selectroom">
            {
                item.roomnum.map((roomnumid) =>(<div className='roomid' key={roomnumid._id}>
                <label>{roomnumid.number}</label>
                <input type='checkbox' className='checkboxs' value={roomnumid._id} onChange={handlesclect}
                   disabled={!isavailable(roomnumid)}
                />
                </div>))
            }
            </div>
            </div>))
           }
           <button className='Resevebtn' onClick={handliclick}>Reserve Now</button>

        </div>
        </div>
    );
};

export default Reserve;