import * as React from "react";
import Footer from "../components/Footer";
import HelmetComponent from "../components/Helmet";
import Landing from "../components/Landing";
import Projects from "../components/Projects";
import "./style.css";

const IndexPage = () => {
  return (
    <div style={{ backgroundColor: "#000" }}>
      <HelmetComponent />
      <Landing />
      <Projects />
      <Footer />
    </div>
  );
};

export default IndexPage;
