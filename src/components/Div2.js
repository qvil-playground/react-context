import React from "react";
import Div3 from "./Div3";

const Div2 = () => {
  return (
    <div
      style={{
        margin: 10,
        padding: 10,
        border: "solid 1px #92C13A"
      }}
    >
      Div2
      <Div3 />
    </div>
  );
};

export default Div2;
