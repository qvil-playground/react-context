import React from "react";
import { Consumer } from "../store";

const Div3 = () => {
  return (
    <Consumer>
      {({ text }) => {
        return (
          <div
            style={{
              margin: 10,
              padding: 10,
              border: "solid 1px #3E5EB6"
            }}
          >
            Div3 {`text : ${text}`}
          </div>
        );
      }}
    </Consumer>
  );
};

export default Div3;
