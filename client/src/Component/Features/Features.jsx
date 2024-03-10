import React from 'react';
import './Features.css';

const Features = () => {
    return (
        <div className='featured'>
        <div className="featureditem">
        {/* <img src="https://drive.google.com/uc?export=view&id=1mMbf2kzrbCyBrjx1VxSV05XfxDDxlnN9"
          alt="Drive Preview"/> */}
          {/* <img src={require("../../images/dhaka.jpg")} width="260px" height="260px" alt="dhaka" /> */}
          <img src={"https://img.freepik.com/premium-photo/city-skyline-with-single-tree-growing-out-it-representing-balance-urbanization-nature-generative-ai_864588-3403.jpg?w=740"}
           alt="m" className='featureImg' />
          <div className="features_title">
            <h1>Rajshahi </h1>
            <h1>123 properties </h1>
          </div>
        </div>

        <div className="featureditem">
          <img src={"https://bestinteriordesign.com.bd/wp-content/uploads/2022/06/bedroom-interior-pictures.png"}
           alt="m" className='featureImg' />
          <div className="features_title">
            <h1>Dhaka </h1>
            <h1>453 properties </h1>
          </div>
        </div>
          

        <div className="featureditem">
          <img src={"https://i0.hippopx.com/photos/945/657/311/slovenia-birds-field-tree-preview.jpg"}
           alt="m" className='featureImg' />
          <div className="features_title">
            <h1>khulna </h1>
            <h1>453 properties </h1>
          </div>
        </div>

        <div className="featureditem">
          <img src={"http://ro-pskov.ru/wp-content/uploads/2020/07/naberezhnayapskovy2.jpg"}
           alt="m" className='featureImg' />
          <div className="features_title">
            <h1>Borishal </h1>
            <h1>453 properties </h1>
          </div>
        </div>
        <div className="featureditem">
          <img src={"https://bestinteriordesign.com.bd/wp-content/uploads/2022/06/bedroom-interior-pictures.png"}
           alt="m" className='featureImg' />
          <div className="features_title">
            <h1>Sylhet </h1>
            <h1>453 properties </h1>
          </div>
        </div>
        <div className="featureditem">
          <img src={"http://ro-pskov.ru/wp-content/uploads/2020/07/naberezhnayapskovy2.jpg"}
           alt="m" className='featureImg' />
          <div className="features_title">
            <h1>Rongpur </h1>
            <h1>453 properties </h1>
          </div>
        </div>
        
        </div>
    );
};

export default Features;