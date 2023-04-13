import React from "react";
import ClickCounter from "../HOC/ClickCounter";
import Counter from "../HOC/Counter";
import Section from "./Section";
import ThemeContext from "./themeContext";

export default class App2 extends React.Component {
  state = {
    theme: "dark",
  };
  render() {
    const { theme } = this.state;
    return (
      <>
        <Counter>
          {(counter, incrementCount) => (
            <ClickCounter count={counter} incrementCount={incrementCount} />
          )}
        </Counter>
        <ThemeContext.Provider value={{ theme }}>
          <Section theme={theme} />
        </ThemeContext.Provider>
      </>
    );
  }
}
