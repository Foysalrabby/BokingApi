import React, { useState } from 'react';
import Navbar from '../../Component/Navbar/Navbar';
import Header from '../../Component/Header/Header';
import './list.css';
import { format  } from 'date-fns';
import { useLocation } from 'react-router-dom';

const List = () => {
    const Location=useLocation();
    const [takedate,setdate]=useState(Location.state.state); //state,optionsnum,destinationdata
    const [takedestination,setdestination]=useState(Location.state.destinationdata);
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
                 <div className="lsdistinaton">
                    <label>Destination</label>
                    <input type="text" placeholder={takedestination} className='inDesination' />
                 </div>

                 <div className="lsdistinaton">
                    <label>Check-In-Date</label>
                   <span>{`${format(takedate[0].startDate,"dd-MM-yyyy")} To ${format(takedate[0].endDate,"dd-MM-yyyy")} `}</span>
                 </div>

           </div>
           <div className="listresult"></div>
             </div>
            </div>
        </div>
    );
};

export default List;