import React from 'react';
import './Hotel.css';
import Navbar from '../../Component/Navbar/Navbar';
import Header from '../../Component/Header/Header';
import Maillist from '../../Component/Maillist/Maillist';
import Footer from '../../Component/Footer/Footer.jsx';
import { MdHotel } from "react-icons/md";

const Hotel = () => {
const photo=[
  {
  photourl :"https://bestinteriordesign.com.bd/wp-content/uploads/2022/11/Inserting-mirrors-in-salon-Design.jpg" 
  },
  {
    photourl:"https://bestinteriordesign.com.bd/wp-content/uploads/2022/11/Small-Salon-Interior-Design.jpg"
  },
  {
    photourl:"https://bestinteriordesign.com.bd/wp-content/uploads/2022/11/salon-interior-design-Insert-Lightning.jpg"
  },
  {
    photourl:"https://bestinteriordesign.com.bd/wp-content/uploads/2022/11/Inserting-mirrors-in-salon-Design.jpg"
  },
  {
    photourl :"https://bestinteriordesign.com.bd/wp-content/uploads/2022/11/Inserting-mirrors-in-salon-Design.jpg" 
    },
    {
      photourl:"https://bestinteriordesign.com.bd/wp-content/uploads/2022/11/Small-Salon-Interior-Design.jpg"
    },
    {
      photourl:"https://bestinteriordesign.com.bd/wp-content/uploads/2022/11/salon-interior-design-Insert-Lightning.jpg"
    },
    {
      photourl:"https://bestinteriordesign.com.bd/wp-content/uploads/2022/11/Inserting-mirrors-in-salon-Design.jpg"
    },
    ];
    return ( 
        <div>
        <Navbar/>
        <Header type="listshow"/>
        <div className='Hotelcointainer'>
            <div className='Hotelwapper'>
                <div className=' Hoteldescribtion'>
                 <p className='Hotelheader'> Grand Hotel</p>
                 <div className='hotelicondes'>
                  <MdHotel/> 
                  <span className='hotelides'>Dhaka ,12 Baridhara</span>
                 </div>
                 <p className='Hotelexcellent'>Excellent  Features</p>
                 <p className='Hotelporperty'> Book the Hotel and Price $123</p>
                 </div>


                 <div className='Hotelphotodes'>
                  {
                    photo.map( photoid=><div className='HotelImg'>
                         <img src={photoid.photourl} alt='M' className='HotelphotodesImg' />
                    </div>)
                  }
                     
                 </div>

                <div className='Hotelsubcriber'>
                <div className='Hotelsubcriberdes11'>
                <h5 className='Hotelsubcribertittle'> Stay in the  heart of Gandview</h5>
                    <span className='Hotelsubcriberdestitle'>
                    It is a long established fact that a reader will be distracted by 
                    the readable content of a page when looking at its layout. The point of using 
                    Lorem Ipsum is that it has a more-or-less normal distribution of letters, as 
                    opposed to using 'Content here, content here', making it look like readable
                    English. Many desktop publishing packages and web page editors 
                    now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'
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

            <Maillist />
            <Footer/>
        </div>
    );
};

export default Hotel;