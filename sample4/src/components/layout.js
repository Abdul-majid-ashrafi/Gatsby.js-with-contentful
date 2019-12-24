import React from "react";
import Footer from './footer';
import Header from './header';
import './layout.css';

const Layout = (props) => (
    <div >
        <Header />
        {props.children}
        <Footer />
    </div>
)

export default Layout;

