import React from 'react';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import './SideDrawer.css';

const SideDrawer = props => {

    const content = (
        <CSSTransition
            in={props.show}
            timeout={500}
            classNames="slide-in-left"
            mountOnEnter
            unmountOnExit
        >
            <aside className="side-drawer" >
                {props.children}
            </aside>
        </CSSTransition>
    );

    return createPortal(content, document.getElementById('drawer-hook'));
}
 
export default SideDrawer;