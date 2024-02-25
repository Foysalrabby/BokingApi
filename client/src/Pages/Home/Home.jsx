import React from 'react';
import Navbar from '../../Component/Navbar/Navbar';
import Header from '../../Component/Header/Header';
import Features from '../../Component/Features/Features';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header> </Header>
            <div className="homecontainer">
            <Features/>
            
            </div>
            
        </div>
    );
};

export default Home;