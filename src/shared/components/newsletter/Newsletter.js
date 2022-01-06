import React from 'react';

import './Newsletter.css';

import { FaCarSide as Car } from 'react-icons/fa'
import { BsFillTelephoneFill as Phone } from 'react-icons/bs'
import { MdDone as Done } from 'react-icons/md'

const Newsletter = () => {
    return ( 
        <div className='newsletter'>
            <h2>NEWSLETTER</h2>
            <div>
                <input type="text" />
                <button>WYŚLIJ</button>
            </div>
            <div className='car'>
                <Car />
                <p>Darmowa dostawa od 150$</p>
            </div>
            <div className='done'>
                <Done />
                <p>Zwrot nawet do 30 dni</p>
            </div>
            <div className='phone'>
                <Phone />
                <p>Infolinia - 000000000</p>
            </div>
        </div>
     );
}
 
export default Newsletter;