import React from 'react';
import './Resultsearch.css';
import { Link } from 'react-router-dom';

const Reasultsearch = ({item}) => {
    return (
            <div className='Resultsearchconatiner'>
            <div className="reasulsearchitem">
            <img src={item.photo[0]} alt="" className='' /> 
        <div className="reachitem2">
                <h3 className='resusubitemTitle'>{item.title}</h3>
                <span className='resusubitemsubdis'> {item.address}</span>
                <span className='resusubitemsubtexi'>{item.describtion}</span>
                <span className='resusubitemsubtittle'>{item.describtion}</span>
                <span className='resusubitemsubfeature'>{item.describtion}</span>
                <span className='resusubitemcancel'>Free Cancilation</span>
                <span className='resusubitemcanceldes'> {item.describtion}</span>
            
            </div>
            <div className="reachitem3">
            {item.ratting &&
                <div className='Rattingseeearchitem'>
                    <p className='excellent'>Excellent</p>
                    <p className='rattingfitem'>{item.ratting}</p>
                </div> }
                
                <div className='Priceandabelitity'>
                  <p className='searchitemprice'>${item.chepestprice}</p>
                  <span className='Taxsearchitem'>Includes tax and fee</span>
                  <Link to={`/hotel/${item._id}`}>
                  <button className='resultbtnabilty'>See Availabity</button>
                  </Link>
                  
                </div>
            </div> 
                
            </div>

            



            </div>
       
      


 

      
    );
};

export default Reasultsearch;