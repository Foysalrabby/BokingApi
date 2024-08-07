import React, { useState } from 'react';
import Navbar from '../../Component/Navbar/Navbar';
import Header from '../../Component/Header/Header';
import './list.css';
import { format, setDate  } from 'date-fns';
import { useLocation } from 'react-router-dom';
import { DateRange } from 'react-date-range';
import Reasultsearch from '../../Component/ResultSearch/Reasultsearch';
import useFetchdata from '../../Hooks/Usefetchdata';

const List = () => {
     
    const Location=useLocation();
    const [takedate,setdate]=useState(Location.state.dates); //state,optionsnum,destinationdata
    const [takedestination,setdestination]=useState(Location.state.destinationdata); //to use sesdate
    const [opentakedate,setopentakedate]=useState(false);
    const [maxdata,setmaxdata]=useState(undefined);
    const [mindata,setmindata]=useState(undefined);
    const [takepeople,setpeople]=useState(Location.state.optionsnum);
    const{data,load,error,refetch}=useFetchdata(`/hotels?city=${takedestination}&min=${mindata ||100}&max=${maxdata}`);

    console.log(Location);

   const handleclickmaxmin=()=>{
         refetch();
    }
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

                 <div className="listtem">
                 <label className='options' > Options</label>
                 <div className="listOptionitem">
                  <span className='listoptionitemtext'>
                    Min Price <small> per night</small>
                  </span>
                  <input type="number" onChange={e=>setmindata(e.target.value)} placeholder='4' />
                 </div>

                 <div className="listOptionitem">
                  <span className='listoptionitemtext'>
                    Max Price <small> per night</small>
                  </span>
                  <input type="number" onChange={e=>setmaxdata(e.target.value)} placeholder='4' />
                 </div>
                 <div className="listOptionitem">
                  <span className='listoptionitemtext'>
                   Adult
                  </span>
                  <input type="number" min={1} placeholder={takepeople.adult} />
                 </div>
                 <div className="listOptionitem">
                  <span className='listoptionitemtext'>
                    Children
                  </span>
                  <input type="number" min={0} placeholder={takepeople.child} />
                 </div>
                 <div className="listOptionitem">
                  <span className='listoptionitemtext'>
                    Room
                  </span>
                  <input type="number" min={1} placeholder={takepeople.room} />
                 </div>

                 </div>

                <button className='Listsearchbtn' onClick={()=>handleclickmaxmin()}> Search</button>

              </div>
              
              <div className="listresult">

              {load ?("load is true"):(
              
              <>
              {data.map((item)=>(
                <Reasultsearch item={item} key={item._id}/>
              ))}
              


              
                </>)}
              

                  </div>

            </div>

            </div>
         </div>
    );
};

export default List;