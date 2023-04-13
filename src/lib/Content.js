import React from "react";
import Counter from "../HOC/Counter";
import HoverCounter from "../HOC/HoverCounter";
import ThemeContext from "./themeContext";

const Content = () => {
  return (
    <>
      <div> This is a Content</div>
      <Counter>
        {(counter, incrementCount) => {
          return (
            <ThemeContext.Consumer>
              {(theme) => (
                <HoverCounter
                  theme={theme}
                  count={counter}
                  incrementCount={incrementCount}
                />
              )}
            </ThemeContext.Consumer>
          );
        }}
      </Counter>
    </>
  );
};

export default Content;
