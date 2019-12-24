import React from "react";
import Footer from './footer';
import Header from './header';
import headerStyles from './layout.module.scss';

const Layout = (props) => (
    <div className={headerStyles.container}>
        <Header />
        {props.children}
        <Footer />
    </div>
)

export default Layout;

