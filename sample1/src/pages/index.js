import React from "react";
import { Link } from "gatsby";
// you dont need to create routes you can use file name;

// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

const IndexPage = () => (
  <div>
    <h1>Hi World</h1>
    <p>Welcome to your new Gatsby site.</p>
    <Link to="/about">You want to reach me?</Link>
  </div>

  // <Layout>
  // <SEO title="Home" />
  // <p>Now go build something great.</p>
  //   <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
  //     <Image />
  //   </div>
  //   <Link to="/page-2/">Go to page 2</Link>
  // </Layout>
)

export default IndexPage
