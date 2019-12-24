import React from "react";
import { Link } from "gatsby";
import Header from './header';

// you dont need to create routes you can use file name;

const IndexPage = () => (
  <div>
    <Header />
    <h1>Hi</h1>
    <p>Welcome to your new Gatsby site.</p>
    <Link to="/about">You want to reach me?</Link>
  </div>
)

export default IndexPage
