import React from 'react';
import { Link } from 'react-router-dom';

import { BsHeartFill as Heart, BsLockFill as Lock, BsBasket3Fill as Basket } from "react-icons/bs";

import './Icons.css';

const Icons = () => {
    return ( 
            <div className='icons'>
                <div className='heart'>
                    <Link to='/favourites'>
                        <span className='dot'>5</span>
                        <Heart />
                        <p>Ulubione</p>
                    </Link>
                </div>
                <div className='lock'>
                    <Link to='/login'>
                        <Lock />
                        <p>Logowanie</p>
                    </Link>
                </div>
                <div className='basket'>
                    <Link to='/basket'>
                        <span className='dot'>5</span>
                        <Basket />
                        <p>Koszyk</p>
                    </Link>
                </div>
            </div>
     );
}
 
export default Icons;