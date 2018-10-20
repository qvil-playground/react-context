import React from "react";

const defaultValue = {
  text: "hihihihihi",
  // setText: () => {}
};

export const { Provider, Consumer } = React.createContext(defaultValue);
