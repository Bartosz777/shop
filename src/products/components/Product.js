import React from 'react';
import { Link } from 'react-router-dom';

import './Product.css';

const Product = props => {
    const isSale = true;

    return (
            <Link to='/product/id/1' className='product'>
                <img src="https://mosquito-sklep.pl/30863-tm_large_default/bluza-z-kieszenia-i-kapturem-forest-green-ilm.jpg" alt="" />
                {isSale &&<div className='sale'>
                    <span> S </span>
                    <span> A </span>
                    <span> L </span>
                    <span> E </span>
                </div>}
                <h3>Bluza z kapturem Mosquito ciemna zieleń</h3>
                <p>79.99$</p>
            </Link>
     );
}
 
export default Product;