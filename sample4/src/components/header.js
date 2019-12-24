import React from "react";
import { Link } from 'gatsby';
import headerStyles from './header.module.scss'

const Header = () => (
    <header className={headerStyles.header}>
        <h1>Majid Ashraf</h1>
        <nav>
            <ul className={headerStyles.nav}>
                <li>
                    <Link to="/" className={headerStyles.link}>Home</Link>
                </li>
                <li>
                    <Link to="/about" className={headerStyles.link}>About</Link>
                </li>
            </ul>
        </nav>
        <hr />
    </header>
)

export default Header;

