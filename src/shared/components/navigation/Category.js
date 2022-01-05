import React from 'react';
import { NavLink } from 'react-router-dom';

import { MdKeyboardArrowRight as RightArrow } from 'react-icons/md';
import './Category.css';

const Category = props => {
    return ( 
        <div className={props.className}>
                {/* <div> */}
                    <NavLink onClick={props.onClick} to='/products/sales'>
                        <p>SALE DO -60%</p>
                        {props.isActive && <RightArrow />}
                    </NavLink>
                {/* </div> */}
                {/* <div> */}
                    <NavLink onClick={props.onClick} to='/products/she'>
                        <p>ONA</p>
                        {props.isActive && <RightArrow />}
                    </NavLink>
                {/* </div> */}
                {/* <div> */}
                    <NavLink onClick={props.onClick} to='/products/he'>
                        <p>ON</p>
                        {props.isActive && <RightArrow />}
                    </NavLink>
                {/* </div> */}
            </div>
     );
}
 
export default Category;