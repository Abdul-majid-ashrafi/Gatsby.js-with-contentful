import React from "react";
import { Link, graphql, useStaticQuery } from 'gatsby';
// useStaticQuery  this is going to allow use to query or graphQL api
import headerStyles from './header.module.scss'

const Header = () => {
    const data = useStaticQuery(graphql`
query{
    site{
      siteMetadata{
        title
      }
    }
  }
`)
    return (
        <header className={headerStyles.header}>
            <h1>{data.site.siteMetadata.title}</h1>
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
}

export default Header;

