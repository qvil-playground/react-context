import React, { Component } from "react";
import { Provider } from "./store";
import { Div1 } from "./components";

class App extends Component {
  state = {
    text: "Hello",
    setText: text => this.setState({ text })
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
