import React from "react";
import FunctionalComponent from "./FunctionalComponent";
import ClassComponent from "./ClassComponent";

const MainContent = (props) => {
  return (
    <main>
      <FunctionalComponent message={props.message} numValue={props.numValue} />
      <ClassComponent info={props.info} />
    </main>
  );
};

export default MainContent;
