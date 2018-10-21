import React from "react";
import Div2 from "./Div2";
import { Consumer } from "../store";

const Div1 = () => {
  return (
    <div
      style={{
        margin: 10,
        padding: 10,
        border: "solid 1px #FC5C9C"
      }}
    >
      <Consumer>
        {({ text, setText }) => (
          <div>
            <div>{`Div1 text : ${text} `}</div>
            <button onClick={setText}>setText</button>
          </div>
        )}
      </Consumer>
      <Div2 />
    </div>
  );
};

export default Div1;
