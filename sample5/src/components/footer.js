import React from "react";
import { Link, graphql, useStaticQuery } from 'gatsby';

const Footer = () => {
    const data = useStaticQuery(graphql`
query{
    site{
      siteMetadata{
        author
      }
    }
  }
`)
    return (
        <footer>
            <hr />
            <p>Created by {data.site.siteMetadata.author} 12/24/2019</p>
        </footer>
    )
}
export default Footer;

