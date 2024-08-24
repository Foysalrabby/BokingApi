import React from 'react';
import './Hotel.css';
import Navbar from '../../Component/Navbar/Navbar';
import Header from '../../Component/Header/Header';
import Maillist from '../../Component/Maillist/Maillist';
import Footer from '../../Component/Footer/Footer.jsx';
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { MdHotel } from "react-icons/md";
import { MdOutlineCancel } from "react-icons/md";
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import useFetchdata from '../../Hooks/Usefetchdata.js';

const Hotel = () => {
  const location=useLocation();
  console.log(location) //take searchresult one hotel id and path use usefetch
 //pathname"0/hotel1/2 '65aac35ecee5f660a6f11401'" split hoi header link
 const id=location.pathname.split("/")[2];
 const {data,load,error,refetch} =useFetchdata(`/hotels/find/${id}`);
// const photo=[
//   {
//   photourl :"https://bestinteriordesign.com.bd/wp-content/uploads/2022/11/Inserting-mirrors-in-salon-Design.jpg" 
//   },
//   {
//     photourl:"https://bestinteriordesign.com.bd/wp-content/uploads/2022/11/Small-Salon-Interior-Design.jpg"
//   },
//   {
//     photourl:"https://bestinteriordesign.com.bd/wp-content/uploads/2022/11/salon-interior-design-Insert-Lightning.jpg"
//   },
//   {
//     photourl:"https://bestinteriordesign.com.bd/wp-content/uploads/2022/11/Inserting-mirrors-in-salon-Design.jpg"
//   },
//   {
//     photourl :"https://bestinteriordesign.com.bd/wp-content/uploads/2022/11/Inserting-mirrors-in-salon-Design.jpg" 
//     },
//     {
//       photourl:"https://bestinteriordesign.com.bd/wp-content/uploads/2022/11/Small-Salon-Interior-Design.jpg"
//     },
//     {
//       photourl:"https://bestinteriordesign.com.bd/wp-content/uploads/2022/11/salon-interior-design-Insert-Lightning.jpg"
//     },
//     {
//       photourl:"https://bestinteriordesign.com.bd/wp-content/uploads/2022/11/Inserting-mirrors-in-salon-Design.jpg"
//     },
//     ];
    // to open the image and zoom in
     const [Viewsimg,setViewimg]=useState(0);
     const [openViewsimg,setopenViewsimg]=useState(false);
     //handle open
     const handleopenimg=(i)=>{
          setViewimg(i);
          setopenViewsimg(true);
     }
    //handle arrow increase index number with use same parameter

    const handlemovearow=(direction)=>{
      let newsetincreseviewnumber;
      if(direction === 'l'){
        // newsetincreseviewnumber = Viewsimg === 0 ? photo.length :Viewsimg-1;
        if(Viewsimg === 0){
          newsetincreseviewnumber= data.photo.length - 1;
        }
        else{
          newsetincreseviewnumber=Viewsimg;
        }
        
      }else{
        newsetincreseviewnumber = Viewsimg === data.photo.length ? 0 : Viewsimg+1;
      
      }
      setViewimg(newsetincreseviewnumber% data.photo.length);  
    
    }

    
    return ( 
        <div>
        <Navbar/>
        <Header type="listshow"/>
        {load ?("loading"):(
        <div className='Hotelcointainer'>
        {
         openViewsimg && <div className='Sliderimageshow'> 
         <MdOutlineCancel className='closeIcon' onClick={()=>setopenViewsimg(false)}/>
         <FaArrowLeft className='leftarrow' onClick={()=> handlemovearow("l")}/>
         <div className="slidderImagewrapper">
         <img src={data.photo[Viewsimg]} className='HotelsiderImg'/>
         </div>
          
         <FaArrowRight className='rightarrow' onClick={()=> handlemovearow("r")}/>
         </div>
            }
            <div className='Hotelwapper'>
                <div className=' Hoteldescribtion'>
                <button className='HotelheaderBTN'>Book Now </button>
                 <p className='Hotelheader'> {data.name}</p>
                 <div className='hotelicondes'>
                  <MdHotel/> 
                  <span className='hotelides'>{data.address}</span>
                 </div>
                 <p className='Hotelexcellent'>Excellent  Features</p>
                 <p className='Hotelporperty'> Book the Hotel and Price {data.chepestprice}</p>
                 </div>


                 <div className='Hotelphotodes'>
                  {
                    data.photo?.map((photoid,i) => <div className='HotelImg' >
                         <img onClick={()=>handleopenimg(i)} src={photoid.photourl} alt='M' className='HotelphotodesImg' />
                    </div>)
                  }
                     
                 </div>

                <div className='Hotelsubcriber'>
                <div className='Hotelsubcriberdes11'>
                <h5 className='Hotelsubcribertittle'> Stay in the  heart of Gandview</h5>
                    <span className='Hotelsubcriberdestitle'>
                    {data.describtion}
                </span>

                 </div>

                    <div className='Hotelsubcriberdes22'>
                        <p className='Hotelsubcriberdessubtille'> Lorem is a ggood buddy</p>
                        <span className='Hotelsubcriberdessub'>It is a long established fact that a reader will be distracted by 
                    the readable content of a page when looking at its layout.</span>
                        <p className='Hotelsubcriberdessubprice'>$123</p>
                        <button className='Hotelsubcriberdesbtn'> Book Now</button>
                    </div>
                    
                 </div>
                
                 

                </div>
               
            </div>
          )}
            <Maillist />
            <Footer/>
        </div>
    );
};

export default Hotel;