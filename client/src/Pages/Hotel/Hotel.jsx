import React, { useContext } from 'react';
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
import { useLocation, useNavigate } from 'react-router-dom';
import useFetchdata from '../../Hooks/Usefetchdata.js';
import { SearchContext } from '../../context/Searchcontext.js';
import { AuthLogincontext } from '../../context/Authentication.jsx';
import Reserve from '../../Component/Reserveroom/Reserve.jsx';

const Hotel = () => {
  const location=useLocation();
  console.log(location) //take searchresult one hotel id and path use usefetch
 //pathname"0/hotel1/2 '65aac35ecee5f660a6f11401'" split hoi header link
 const id=location.pathname.split("/")[2];
 const {data,load,error,refetch} =useFetchdata(`/hotels/find/${id}`);

 const {user}=useContext(AuthLogincontext);
 const navigate=useNavigate();

 //usecontext 
 const {dates,optionsnum}=useContext(SearchContext);
 console.log(dates);

 //to determine the specfic day

// Constants
const millisecondsInADay = 1000 * 60 * 60 * 24;

// Function to determine the difference in days
function dayTimeDiff(date1, date2) {
  const timeDiff = Math.abs(date2.getTime() - date1.getTime()); // Corrected getTime()
  const dayDiff = Math.ceil(timeDiff / millisecondsInADay);
  return dayDiff;
}
 //console.log(dayTimeDiff(dates[0].endDate,dates[0].startDate));
 const day=dayTimeDiff(dates[0]?.endDate,dates[0]?.startDate);

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
     const [openloginreserve,seuloginreserve]=useState(false);

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
//handle book button after take user from authlogincontext
  const handleclikbook=()=>{
           if(user){
            seuloginreserve(true);
           }else{
            navigate("/login")
           }
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
                    data.photo?.map((photoid,i) => <div className='HotelImg' key={photoid} >
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
                        <p className='Hotelsubcriberdessubtille'> Perfect for {day} night stay</p>
                        <span className='Hotelsubcriberdessub'>It is a long established fact that a reader will be distracted by 
                    the readable content of a page when looking at its layout.</span>
                        <p className='Hotelsubcriberdessubprice'>{day*optionsnum.room*data.chepestprice}</p>
                        <button onClick={handleclikbook} className='Hotelsubcriberdesbtn'> Book Now</button>
                    </div>
                    
                 </div>
                
                 

                </div>
               
            </div>
          )}
            <Maillist />
            <Footer/>
            {openloginreserve && <Reserve seuloginreserve={seuloginreserve} hotelid={id}/>}
        </div>
        
    );
};

export default Hotel;