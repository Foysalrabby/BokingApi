import React from 'react';
import Navbar from '../../Component/Navbar/Navbar';
import Header from '../../Component/Header/Header';

const List = () => {
    return (
        <div>  
            <Navbar/>
            <Header type = "listshow"/>
            <div className="Listcontainer">
             <div className="listwrapper">
           <div className="listsearch">
                 <p>search</p>
           </div>
           <div className="listresult"></div>
             </div>
            </div>
        </div>
    );
};

export default List;