import React, { useState } from 'react';

import Logo from './Logo';
import Icons from './Icons';
import Category from './Category';
import Header from '../../../main/components/Header';
import Backdrop from '../UIElements/Backdrop';
import SideDrawer from './SideDrawer';
import { GiHamburgerMenu as Hamburger } from 'react-icons/gi';
import './MainNavigation.css';


const MainNavigation = () => {

    const [menuOpener, setMenuOpener] = useState(false);

    const openMenu = () => {
        setMenuOpener(true);
    }
    const closeMenu = () => {
        setMenuOpener(false);
    }
    return (
        <>
            <Header>
                {menuOpener && <Backdrop onClick={closeMenu}/>}
                <SideDrawer 
                    show={menuOpener}
                >
                    <Category
                    isActive={menuOpener}
                    className='categories-sidedrawer' 
                    onClick={closeMenu}/>
                </SideDrawer>

                <nav>
                    <Logo />
                    <Category isActive={menuOpener} className='categories'/>
                    <Icons />
                    <button onClick={openMenu} className='menu-hamburger'>
                        <Hamburger />
                    </button>
                </nav>
            </Header> 
        </>
     );
}
 
export default MainNavigation;