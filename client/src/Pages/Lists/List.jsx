import React from 'react';
import Navbar from '../../Component/Navbar/Navbar';
import Header from '../../Component/Header/Header';
import './list.css';
import { useLocation } from 'react-router-dom';

const List = () => {
    const Location=useLocation();
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
                    <input type="text" placeholder='Rajshahi' className='inDesination' />
                 </div>

                 <div className="lsdistinaton">
                    <label>Check-In-Date</label>
                    <input type="text" placeholder='Rajshahi' className='inDesination' />
                 </div>

           </div>
           <div className="listresult"></div>
             </div>
            </div>
        </div>
    );
};

export default List;