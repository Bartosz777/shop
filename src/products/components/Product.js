import React from 'react';


import './Product.css';

const Product = props => {
    const isSale = true;

    return ( 
        <div className='product'>
            <img src="https://mosquito-sklep.pl/30863-tm_large_default/bluza-z-kieszenia-i-kapturem-forest-green-ilm.jpg" alt="" />
            {isSale &&<div className='sale'>
                <span> S </span>
                <span> A </span>
                <span> L </span>
                <span> E </span>
            </div>}
            <h3>Bluza z kapturem z kieszenią i spodnie dresowe</h3>
            <p>79.99$</p>
        </div>
     );
}
 
export default Product;