import * as React from "react";
import HelmetComponent from "../components/Helmet";
import TempLanding from "../components/TempLanding";
import "./style.css";

const IndexPage = () => {
  return (
    <>
      <HelmetComponent />
      <TempLanding />
    </>
  );
};

export default IndexPage;
