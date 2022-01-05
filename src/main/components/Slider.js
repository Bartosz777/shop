import React, { useEffect, useState } from 'react';

import { TransitionGroup ,CSSTransition } from 'react-transition-group';
import { MdOutlineKeyboardArrowRight as RightArrow, MdOutlineKeyboardArrowLeft as LeftArrow } from 'react-icons/md'
import './Slider.css';

const images = ['https://ocdn.eu/pulscms-transforms/1/pgBktkpTURBXy9iNTExMjEwNjU5ZjY5NjE4MmMxMGI0ZWVhZThjNzhhZi5qcGeSlQMAH80D6M0CMpMFzQOYzQH0', 'https://s-trojmiasto.pl/zdj/c/n/9/2320/3000x0/2320437.jpg', 'https://images.zwierciadlo.pl/_resource/res/path/7c/55/7c55022a-7efd-497f-904f-f689da750558_f1400x900'];

let slideInterval;

const Slider = () => {

    const [counter, setCounter] = useState(0);

    const changeSlideRight = () => {
        
        setCounter(prev => prev + 1);
        if (counter >= 2) {
            return setCounter(0);
        }
    }

    const changeSlideLeft = () => {
        setCounter(prev => prev - 1);
        if (counter <= 0) {
            return setCounter(2)
        }
    }

    const changeSlideAuto = () => {
        setCounter(prev => prev + 1);
        if (counter >= 2) {
            setCounter(0);
            return;
        }
    }

    return ( 
        <div className='slider'>
            <button onClick={changeSlideLeft} className='left-arrow'><LeftArrow /></button>
            <TransitionGroup>
                <CSSTransition
                key={counter} 
                timeout={1000} classNames='slide-right'
                >
                    <img src={images[counter]} alt="" />
                </CSSTransition>
            </TransitionGroup>
            <button onClick={changeSlideRight}  className='right-arrow'><RightArrow /></button>
        </div>
     );
}
 
export default Slider;