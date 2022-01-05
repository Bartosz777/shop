import React from 'react';

import Slider from '../components/Slider';
import ProductsView from '../../products/components/ProductsView';
import './MainPage.css';

const MainPage = () => {
    return ( 
        <main className='main-content'>
            <Slider />
            <ProductsView />
        </main>
     );
}
 
export default MainPage;