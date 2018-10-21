import React, { Component } from "react";
import { Provider } from "./store";
import { Div1 } from "./components";

class App extends Component {
  state = {
    text: "Hello World",
    setText: () =>
      this.setState({
        text:
          this.state.text.indexOf("Hello") !== -1 ? "Hi World" : "Hello World"
      })
  };

  render() {
    return (
      <Provider value={this.state}>
        <div>
          <Div1 />
        </div>
      </Provider>
    );
  }
}

export default App;
