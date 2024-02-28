import React from 'react';
import './Maillist.css';

const Maillist = () => {
    return (
        <div className='Maillist'>
            <h2 className="Maillisttitle"> Save Money Save Time !!</h2>
            <span className='Maildesc'> Sing Up And Login Enjoy Discount</span>
            <div className="mailInputcontainer">
                <input type="text" className='Mailinputbox' />
               <button className='mailbutton'>Subscribe</button>
            </div>

        </div>
    );
};

export default Maillist;