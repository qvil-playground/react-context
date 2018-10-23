import React from "react";

const defaultValue = {
  mode: "light",
  setMode: mode => {
    console.log(mode === "light");
    return mode === "light" ? "dark" : "light";
  }
};

export const ThemeProvider = React.createContext(defaultValue);
