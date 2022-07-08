import * as React from "react";
import Footer from "../components/Footer";
import HelmetComponent from "../components/Helmet";
import Landing from "../components/Landing";
import "./style.css";

const IndexPage = () => {
  return (
    <>
      <HelmetComponent />
      <Landing />
      <Footer />
    </>
  );
};

export default IndexPage;
