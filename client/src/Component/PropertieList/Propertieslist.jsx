import React from 'react';
import './Propertieslist.css';
import useFetchdata from '../../Hooks/Usefetchdata';
const Propertieslist = () => {
const {data,load,error}=useFetchdata("hotels/countbytype?type=hotel,apartment,villa,resorts,cabin");
console.log(data);
   const image=[
           "https://bestinteriordesign.com.bd/wp-content/uploads/2022/06/Bedroom-interior-design-images.png" ,
           "https://bestinteriordesign.com.bd/wp-content/uploads/2022/06/small-bedroom-interior-design-photos.png",
           "https://bestinteriordesign.com.bd/wp-content/uploads/2022/06/bedroom-interior-pictures.png" ,
           "https://bestinteriordesign.com.bd/wp-content/uploads/2022/06/Bedroom-interior-design-images.png",
           "https://bestinteriordesign.com.bd/wp-content/uploads/2022/06/best-bedroom-interior-design-images.png"


        ]
    return (
        <div className='Propertylist'>
        {load?("loading is true"):(
            <>
        {
        data && image.map((img,index)=>(
     <div className="Propertyitem" key={index}>
         <img src={img} className='PropertyImg'  alt="" />
         <div className="Propertytittle">
          <h1>{data[index]?.type}</h1>
          <h2> {data[index]?.type} {data[index]?.count}</h2>
         </div>
        </div>
        ))
        }
            

     
           
     
        

        
        </>)}   
        </div>
    );
};

export default Propertieslist;