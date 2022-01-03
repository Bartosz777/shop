import React from 'react';

import './Header.css';

const Header = props => {


    return (
        <header className='head'>
            {props.children}
        </header>
     );
}
 
export default Header;