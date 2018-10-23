import React, { Component } from "react";
import { Provider } from "./store";
import { Div1 } from "./components";
import { ThemeProvider } from "./store/ThemeProvider";

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
        <ThemeProvider>
          {({ mode, setMode }) => (
            <div
              style={{ backgroundColor: mode === "light" ? "white" : "black" }}
            >
              {mode}
              <button onClick={() => setMode(mode)}>{mode} mode</button>
              <Div1 />
            </div>
          )}
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
