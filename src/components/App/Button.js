import React from "react";
import { css } from "glamor";

let styles = {
  base: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 3,
    fontSize: 16,
    fontWeight: "500",
  },
  sm: { width: 100, height: 40 },
  md: { width: 210, height: 45 },
  lg: { width: 330, height: 50 },
  xl: { width: 500, height: 55 },
};

let noop = () => {};
let checkTheme = (theme, styles, prop, x = {}) =>
  theme && theme[prop] ? theme[prop] : { ...styles[prop], ...x };

function Button(props) {
  let { theme, size, shadow, border, backgroundColor, color } = props;
  return (
    <button
      className={css(
        checkTheme(theme, styles, "base", {
          border: border || "1px solid #ccc",
          backgroundColor: backgroundColor || "transparent",
          color: color || "#000",
          boxShadow: shadow || "none",
        }),
        checkTheme(theme, styles, size || "md")
      )}
      onClick={props.onClick || noop}
      onBlur={props.onBlur || noop}
    >
      {props.children}
    </button>
  );
}

export default Button;
