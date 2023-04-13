import React from "react";

export default function HoverCounter({ count, incrementCount, theme }) {
  console.log(theme);
  const style =
    theme === "dark" ? { backgroundColor: "#000000", color: "#ffffff" } : null;
  console.log(style);

  return (
    <div>
      <h1 onMouseOver={incrementCount} style={style}>
        Hoverd {count} times
      </h1>
    </div>
  );
}
