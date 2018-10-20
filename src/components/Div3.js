import React from "react";
import { Consumer } from "../store";

const Div3 = () => {
  return (
    <Consumer>
      {({ text }) => {
        return <div>Div3 {`text : ${text}`}</div>;
      }}
    </Consumer>
  );
};

export default Div3;
