import React from "react";
import Div2 from "./Div2";
import { Consumer } from "../store";

const Div1 = () => {
  return (
    <div
      style={{
        margin: 10,
        padding: 10,
        border: "solid 1px #FC5252"
      }}
    >
      <Consumer>
        {({ text, setText }) => (
          <div>
            Div1{" "}
            <button
              onClick={() =>
                setText(
                  text.indexOf("Hello") !== -1 ? "Hi World" : "Hello World"
                )
              }
            >
              setText
            </button>
          </div>
        )}
      </Consumer>
      <Div2 />
    </div>
  );
};

export default Div1;
