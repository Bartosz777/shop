import React from 'react';
import { Link } from 'react-router-dom';

import { MdKeyboardArrowRight as RightArrow } from 'react-icons/md';
import './Category.css';

const Category = props => {
    return ( 
        <div className={props.className}>
                {/* <div> */}
                    <Link onClick={props.onClick} to='/products/sales'>
                        <p>SALE DO -60%</p>
                        {props.isActive && <RightArrow />}
                    </Link>
                {/* </div> */}
                {/* <div> */}
                    <Link onClick={props.onClick} to='/products/she'>
                        <p>ONA</p>
                        {props.isActive && <RightArrow />}
                    </Link>
                {/* </div> */}
                {/* <div> */}
                    <Link onClick={props.onClick} to='/products/he'>
                        <p>ON</p>
                        {props.isActive && <RightArrow />}
                    </Link>
                {/* </div> */}
            </div>
     );
}
 
export default Category;