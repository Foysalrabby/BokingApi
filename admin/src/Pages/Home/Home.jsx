import React from 'react';
import './Home.scss';
import Sidebar from '../../Component/Sidebar/Sidebar';

const Home = () => {
    return (
        <div className='Home'>
          <Sidebar/>
          <div className="homecontainter">
            <p> home</p>
          </div>
        </div>
    );
};

export default Home;