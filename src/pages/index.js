import * as React from "react";
import HelmetComponent from "../components/Helmet";
import Landing from "../components/Landing";
import "./style.css";

const IndexPage = () => {
  return (
    <>
      <HelmetComponent />
      <Landing />
    </>
  );
};

export default IndexPage;
