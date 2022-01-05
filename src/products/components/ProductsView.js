import React from 'react';

import Product from './Product';
import './ProductsView.css';

const ProductsView = () => {
    return ( 
        <div className='product-view'>
            <Product />
            <Product />
            <Product />
            <Product />
        </div>
     );
}
 
export default ProductsView;