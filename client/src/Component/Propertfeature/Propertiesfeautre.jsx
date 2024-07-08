import React from 'react';
import './Propertiesfeatures.css';
import useFetchdata from '../../Hooks/Usefetchdata';

const Propertiesfeautre = () => {
   const {data,load,error}=useFetchdata("hotels/countbytype?type=hotel,apartment,villa,resorts,cabin");
    return (
        <div className='PropertiesFeature'>
          {
            load ?("loading is true"):(
          <>

        <div className="PropertiesitemFeat">
         <img src="https://bestinteriordesign.com.bd/wp-content/uploads/2022/11/Small-Salon-Interior-Design.jpg" alt="" className='PropertiesfeatuImg' />
         <span className='PFfname'>Chittagong Holicon view</span>
         <span className='PFfcity'>Chittagong ,Bangldesh</span>
         <span className='PFfPRICE'>$1500</span>
         <div className="PFratingbutn">
            <button>8.9</button>
            <span>Excellent</span>
         </div>
        </div>   

        <div className="PropertiesitemFeat">
         <img src="https://bestinteriordesign.com.bd/wp-content/uploads/2022/11/Inserting-mirrors-in-salon-Design.jpg" alt="" className='PropertiesfeatuImg'/>
         <span className='PFfname'>Dhaka Holicon view</span>
         <span className='PFfcity'>Dhaka ,Bangldesh</span>
         <span className='PFfPRICE'>$1500</span>
         <div className="PFratingbutn">
            <button>8.9</button>
            <span>Excellent</span>
         </div>
        </div>
        <div className="PropertiesitemFeat">
         <img src="https://bestinteriordesign.com.bd/wp-content/uploads/2022/11/Small-Salon-Interior-Design.jpg" alt="" className='PropertiesfeatuImg' />
         <span className='PFfname'>Rajshai hill view </span>
         <span className='PFfcity'>Rajshahi ,Bangldesh</span>
         <span className='PFfPRICE'>$1300</span>
         <div className="PFratingbutn">
            <button>8.9</button>
            <span>Excellent</span>
         </div>
        </div>
        <div className="PropertiesitemFeat">
         <img src="https://bestinteriordesign.com.bd/wp-content/uploads/2022/11/salon-interior-design-Insert-Lightning.jpg" alt="" className='PropertiesfeatuImg' />
         <span className='PFfname'>Dhaka Holicon view</span>
         <span className='PFfcity'>Dhaka ,Bangldesh</span>
         <span className='PFfPRICE'>$1500</span>
         <div className="PFratingbutn">
            <button>8.9</button>
            <span>Excellent</span>
         </div>
        </div>
        <div className="PropertiesitemFeat">
         <img src="https://bestinteriordesign.com.bd/wp-content/uploads/2023/01/cool-and-Warm-Uplifting-orange-color.jpg" alt="" className='PropertiesfeatuImg' />
         <span className='PFfname'>Rajshai hill view </span>
         <span className='PFfcity'>Rajshahi ,Bangldesh</span>
         <span className='PFfPRICE'>$1300</span>
         <div className="PFratingbutn">
            <button>8.9</button>
            <span>Excellent</span>
         </div>
        </div>
        </>) }

        </div>
    );
};

export default Propertiesfeautre;