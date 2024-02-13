import React from 'react';
import './Header.css';
import { MdHotel } from "react-icons/md";
import { RiFlightTakeoffLine } from "react-icons/ri";
import { FaCarSide } from "react-icons/fa";
import { HiMiniHomeModern } from "react-icons/hi2";
import { RiTaxiFill } from "react-icons/ri";
import { MdDateRange } from "react-icons/md";
import { FaPeopleRoof } from "react-icons/fa6";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import { format  } from 'date-fns';
import {useState} from 'react'

const Header = () => {
     const [opendate,setopendate]=useState(false);
    const [state, setState] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
    return (
        <div className='Header'>
        <div className="HeaderContainer">
        <div className="HeaderList">
        <div className="HeaderListItem active">
        <MdHotel />
        <span>Stay</span>
        </div>    
        <div className="HeaderListItem">
        <RiFlightTakeoffLine />
        <span>Flites</span>
        </div> 
        <div className="HeaderListItem">
        <FaCarSide />
        <span>Car </span>
        </div> 
        <div className="HeaderListItem">
        <HiMiniHomeModern />
        <span>Attraction</span>
        </div> 
        <div className="HeaderListItem">
        <RiTaxiFill />
        <span>Airtaxi</span>
        </div> 
        </div>
        <h2 className='headerTittle'>A Life Time Discount? It's Genius</h2>
       <p className='headerdes'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
       Cumque eius optio amet facere ut nisi culpa quaerat explicabo quidem perferendis.</p>
        <button className='navbutton'> SingIn/Register</button>

        <div className="HeaderSearch">
        <div className="HeaderSearchitem">
          <MdHotel className='headericon' />
       <input type="text" placeholder='Where Are You Going ?' className='inputseacrheader' />
         </div>
         <div className="HeaderSearchitem">
          <MdDateRange  className='headericon' />
         <span onClick={()=> setopendate(!opendate)}
          className='headertext'>{`${format(state[0].startDate,"dd-MM-yyyy")} to
         ${format(state[0].endDate,"dd-MM-yyyy") }
         `}</span>
         {  opendate  && <DateRange 
            editableDateInputs={true}
            onChange={item => setState([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={state}
            className='date1'
            />

         }
         </div>
         <div className="HeaderSearchitem">
          <FaPeopleRoof  className='headericon'/>
          <span className='headertext'>2 Adult 2 Children 1 Room </span>
         
         </div>
         <div className="HeaderSearchitem">
          <button className='navbutton'>Search</button>
         </div>

        </div> 

        </div>   
        </div>
    );
};

export default Header;