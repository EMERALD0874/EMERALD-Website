import React from "react";
import Head from "next/head";
import Footer from "../src/components/Footer";
import Landing from "../src/components/Landing";
import Projects from "../src/components/Projects";

const IndexPage = () => {
  return (
    <div className="page-root" style={{ backgroundColor: "#000" }}>
      <Head>
        <title>EMERALD</title>
        <meta name="title" content="EMERALD" />
        <meta name="description" content="The personal website for EMERALD's web apps and social media." />
        <meta name="theme-color" content="#5865F2" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:title" content="EMERALD" />
        <meta property="og:site_name" content="EMERALD" />
        <meta property="og:description" content="The personal website for EMERALD's web apps and social media." />
        <meta property="og:image" content="/favicon.png" />
        
        {/* Twitter */}
        <meta property="twitter:title" content="EMERALD" />
        <meta property="twitter:description" content="The personal website for EMERALD's web apps and social media." />
        <meta property="twitter:image" content="/favicon.png" />
        
        {/* Other */}
        <meta name="msapplication-TileColor" content="#5865F2" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Landing />
      {/* <Projects /> */}
      <Footer />
    </div>
  );
};

export default IndexPage;
