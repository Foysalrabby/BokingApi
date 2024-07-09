import React from 'react';
import './Propertiesfeatures.css';
import useFetchdata from '../../Hooks/Usefetchdata';

const Propertiesfeautre = () => {
   const {data,load,error}=useFetchdata("hotels?fetures=true&limit=6&min=300&max=900");
    return (
        <div className='PropertiesFeature'>
          {
            load ?("loading is true"):(
          <>
           {data && data.map((item)=>(
            <div className="PropertiesitemFeat" key={item}>
         <img src= {item.photo[0]} className='PropertiesfeatuImg' />
         <span className='PFfname'>{item.name}</span>
         <span className='PFfcity'>{item.city}</span>
         <span className='PFfPRICE'>$ {item.chepestprice}</span>
         { item.rating &&
            <div className="PFratingbutn">
            <button>{item.rating}</button>
            <span>Excellent</span>
         </div>
         }
         
        </div> 

            ))}
          

      
        </>) }

        </div>
    );
};

export default Propertiesfeautre;