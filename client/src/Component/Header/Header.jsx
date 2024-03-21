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
import { useNavigate } from "react-router-dom";

const Header = ({type}) => {
      const navigate=useNavigate(); //use value pass with click btn go page
      const [destinationdata,setdestinationdata]=useState(""); //to go input header value inlist.jsx
     const [opendate,setopendate]=useState(false); // for date open and off
    const [dates, setState] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
      const [optionsopen,setoptionsopen]=useState(false);  //to increase child adult
      const [optionsnum,setoptionsnum]=useState({
        adult:1,
        child:0,
        room:1
      });
//to increase and decrease button value
const handleopen =(name,operation) => {
  setoptionsnum((prev)=>{
    return{
      ...prev,[name]:operation === "i" ? optionsnum[name] + 1 : optionsnum[name] - 1,
    }
  });
};
//handle search btn to go list.jsx
const handleSearchbtn=()=>{
navigate("/list",{state:{dates,optionsnum,destinationdata}} );
}
  
    return (
        <div className='Header'>
        <div className={ type ==="listshow" ?"HeaderContainer listshow": "HeaderContainer"}>
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
        { type !== "listshow" &&
          <> 
        <h2 className='headerTittle'>A Life Time Discount? It's Genius</h2>
       <p className='headerdes'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
       Cumque eius optio amet facere ut nisi culpa quaerat explicabo quidem perferendis.</p>
        <button className='navbutton'> SingIn/Register</button>

        <div className="HeaderSearch">
        <div className="HeaderSearchitem">
          <MdHotel className='headericon' />
       <input type="text" onChange={(e=>setdestinationdata(e.target.value))} placeholder='Where Are You Going ?' className='inputseacrheader' />
         </div>
         <div className="HeaderSearchitem">
          <MdDateRange  className='headericon' />
         <span onClick={()=> setopendate(!opendate)}
          className='headertext'>{`${format(dates[0].startDate,"dd-MM-yyyy")} to
         ${format(dates[0].endDate,"dd-MM-yyyy") }
         `}</span>
         {  opendate  && <DateRange 
            editableDateInputs={true}
            onChange={item => setState([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={dates}
            minDate={new Date()}
            className='date1'
            />

         }
         </div>
         <div className="HeaderSearchitem">
          <FaPeopleRoof  className='headericon' onClick={()=> setoptionsopen(!optionsopen)}/>
          <span  className='headertext'>{`Adult ${optionsnum.adult} Children
            ${optionsnum.child} 
          Room ${optionsnum.room} `} </span>

          {optionsopen && <div className="optons">
           <div className='optionitem'> 
           <span className='headertext'> Adult</span>
              <div className="optionitemhelp" >
              <button className='optionsbutton' onClick={()=> handleopen("adult","i")}> +</button>
                <span className='headertext'>{optionsnum.adult}</span>
                <button 
                disabled={optionsnum.adult <= 1 }
                className='optionsbutton' onClick={()=> handleopen("adult","d")}> -</button> 
              </div>
           </div>



           <div className='optionitem'> 
              <span className='headertext'> Children</span>
              <div className="optionitemhelp">
              <button className='optionsbutton' onClick={()=> handleopen("child","i")}> +</button>
                <span className='headertext'>{optionsnum.child}</span>
                <button
                 disabled={optionsnum.child <= 0 }
                 className='optionsbutton' onClick={()=> handleopen("child","d")}> -</button> 
              </div>
           </div>

           <div className='optionitem'>
              <span className='headertext'> Room</span>
              <div className="optionitemhelp">
              <button className='optionsbutton' onClick={()=> handleopen("room","i")}> +</button>
                <span className='headertext'>{optionsnum.room}</span>
                <button 
                 disabled={optionsnum.room <= 1 }
                 className='optionsbutton' onClick={()=> handleopen("room","d")}> -</button> 
              </div>
           </div>
           
          </div>
         }
         </div>
         <div className="HeaderSearchitem">
          <button onClick={()=> handleSearchbtn()} className='navbutton'>Search</button>
         </div>

        </div> 
         </>
        }
        </div>   
        </div>
    );
};

export default Header;