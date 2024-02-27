import React from 'react';
import Navbar from '../../Component/Navbar/Navbar';
import Header from '../../Component/Header/Header';
import Features from '../../Component/Features/Features';
import './Home.css';
import Propertieslist from '../../Component/PropertieList/Propertieslist';
import Propertiesfeautre from '../../Component/Propertfeature/Propertiesfeautre';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header> </Header>
            <div className="homecontainer">
            <Features/>
            <h1> Browse Types Propertie</h1>
            <Propertieslist/>
            <h1> Browse Types Propertie</h1>
            <Propertiesfeautre/>
            </div>
            
        </div>
    );
};

export default Home;