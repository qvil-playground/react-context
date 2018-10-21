import React from "react";
import { Consumer } from "../store";

const Div3 = () => {
  return (
    <Consumer>
      {({ text, setText }) => {
        return (
          <div
            style={{
              margin: 10,
              padding: 10,
              border: "solid 1px #3E5EB6"
            }}
          >
            <div>Div3 {`text : ${text}`}</div>
            <button onClick={setText}>setText</button>
          </div>
        );
      }}
    </Consumer>
  );
};

export default Div3;
