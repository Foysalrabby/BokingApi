import React from 'react';
import Navbar from '../../Component/Navbar/Navbar';
import Header from '../../Component/Header/Header';
import Features from '../../Component/Features/Features';
import './Home.css';
import Propertieslist from '../../Component/PropertieList/Propertieslist';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header> </Header>
            <div className="homecontainer">
            <Features/>
            <div className="hometitle">
                <h1> Browse Types Propertie</h1>
            </div>
            <Propertieslist/>
            <h1> Browse Types Propertie</h1>
            </div>
            
        </div>
    );
};

export default Home;