import React from 'react';

import Slider from '../components/Slider';
import ProductsView from '../../products/components/ProductsView';
import Newsletter from '../../shared/components/newsletter/Newsletter';
import './MainPage.css';

const MainPage = () => {
    return ( 
        <main className='main-content'>
            <Slider />
            <ProductsView />
            <Newsletter />
        </main>
     );
}
 
export default MainPage;