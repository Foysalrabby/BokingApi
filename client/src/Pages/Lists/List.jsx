import React, { useState } from 'react';
import Navbar from '../../Component/Navbar/Navbar';
import Header from '../../Component/Header/Header';
import './list.css';
import { format, setDate  } from 'date-fns';
import { useLocation } from 'react-router-dom';
import { DateRange } from 'react-date-range';

const List = () => {
    const Location=useLocation();
    const [takedate,setdate]=useState(Location.state.state); //state,optionsnum,destinationdata
    const [takedestination,setdestination]=useState(Location.state.destinationdata); //to use sesdate
    const [opentakedate,setopentakedate]=useState(false)
    const [takepeople,setpeople]=useState(Location.state.optionsnum);
    console.log(Location);
    return (
        <div>  
            <Navbar/>
            <Header type = "listshow"/>
            <div className="Listcontainer">
             <div className="listwrapper">
           <div className="listsearch">
                 <h2 className='listsearchtitle'>Search</h2>
                 <div className="lsitem">
                    <label>Destination</label>
                    <input type="text" placeholder={takedestination} className='inDesination' />
                 </div>

                 <div className="lsitem">
                    <label>Check-In-Date</label>
                   <span onClick={()=> setopentakedate(!opentakedate)} className='listemdate'>{`${format(takedate[0].startDate,"dd-MM-yyyy")} To ${format(takedate[0].endDate,"dd-MM-yyyy")} `}</span>
                   { opentakedate && <DateRange onChange={(item)=> setdate([item.selection])}
                     minDate={new Date()}
                     ranges={takedate}

                   />}
                   
                 </div>

           </div>
           <div className="listresult"></div>
             </div>
            </div>
        </div>
    );
};

export default List;