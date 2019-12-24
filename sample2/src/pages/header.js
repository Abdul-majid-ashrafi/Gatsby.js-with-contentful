import React from "react";
import { Link } from 'gatsby';

const Header = () => (
    <header>
        <h1>Majid Ashraf</h1>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>

    </header>
)

export default Header;

