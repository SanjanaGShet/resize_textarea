import React from "react";
import FunctionalComp from "./FunctionalComp/Parent";
import ClassComp from "./classComp/Parent";

const App = () => {
  return (
    <React.Fragment>
      <h3>Example of functional component</h3>
      <FunctionalComp />
      <br></br>
      <h3>Example of class component</h3>
      <ClassComp />
    </React.Fragment>
  );
};

export default App;
