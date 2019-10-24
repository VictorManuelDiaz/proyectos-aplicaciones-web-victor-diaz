import React from 'react';
import './layout.css';
import SideMenu from './sideMenu';
import SideBar from './sideBar';

const Layout = (props) => {
    return(
    <>
        <SideMenu/>
        <section>
            <div className="layout">
                {props.children}
            </div>
        </section>
        <SideBar/>
    </>
    )
}

export default Layout;
