import React from "react";
import { css } from "glamor";

let styles = {
  base: {
    margin: 5,
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    outlineWidth: 0,
    "&:focus": {
      outlineWidth: 0,
    },
  },
};

let size = {
  sm: { width: 100, height: 15, fontSize: 12 },
  md: { width: 180, height: 20, fontSize: 14 },
  lg: { width: 300, height: 25, fontSize: 16 },
  xl: { width: 450, height: 30, fontSize: 20 },
  inherit: { width: "100%", height: 30 },
};

let areaSize = {
  sm: { width: 130, height: 125, fontSize: 12 },
  md: { width: 180, height: 130, fontSize: 14 },
  lg: { width: 300, height: 135, fontSize: 18 },
  xl: { width: 450, height: 140, fontSize: 20 },
  inherit: { width: "100%", height: 30 },
};

let noop = () => {};
let checkTheme = (theme, styles, prop, x = {}) =>
  theme && theme[prop] ? theme[prop] : { ...styles[prop], ...x };

function TextInput(props) {
  if (props.multiline) {
    return (
      <textarea
        className={css(
          checkTheme(props.theme, styles, "base", {
            border: props.border || "1px solid #ccc",
            borderRadius: props.borderRadius || "none",
            background: props.background || "#fff",
            color: props.color || "#333",
            boxShadow: props.shadow || "",
            zIndex: props.zIndex || 1,
          }),
          checkTheme(props.theme, areaSize, props.size || "md")
        )}
        type={props.type || "text"}
        value={props.value || ""}
        placeholder={props.placeholder || ""}
        onChange={props.onChange || noop}
        onBlur={props.onBlur}
      />
    );
  }
  return (
    <input
      className={css(
        checkTheme(props.theme, styles, "base", {
          border: props.border || "1px solid #ccc",
          borderRadius: props.borderRadius || "none",
          background: props.background || "#fff",
          color: props.color || "#333",
          boxShadow: props.shadow || "",
          zIndex: props.zIndex || 1,
        }),
        checkTheme(props.theme, size, props.size || "md")
      )}
      type={props.type || "text"}
      value={props.value || ""}
      placeholder={props.placeholder || ""}
      onChange={props.onChange || noop}
      onKeyPress={props.onKeyPress || noop}
      onBlur={props.onBlur}
    />
  );
}

export default TextInput;
