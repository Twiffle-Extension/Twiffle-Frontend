import React from "react";
import { css } from "glamor";

let styles = {
  base: { padding: 0, margin: 0 },
  xs: { fontSize: 10 },
  sm: { fontSize: 14 },
  md: { fontSize: 18 },
  lg: { fontSize: 26 },
  xl: { fontSize: 40 },
  normal: { fontWeight: 300 },
  medium: { fontWeight: 500 },
  bold: { fontWeight: 700 },
  heavy: { fontWeight: 900 },
};

let noop = () => {};
let checkTheme = (theme, styles, prop, x = {}) =>
  theme && theme[prop] ? { ...theme[prop], ...x } : { ...styles[prop], ...x };

function Text({ theme, size, weight, color, font, children, onClick }) {
  return (
    <p
      className={css(
        checkTheme(theme, styles, "base", {
          fontFamily: `'${font || "helvetica"}', sans-serif`,
          color: styles[color] || color,
        }),
        checkTheme(theme, styles, size || "md"),
        checkTheme(theme, styles, weight || "normal")
      )}
      onClick={onClick || noop}
    >
      {children}
    </p>
  );
}

export default Text;
