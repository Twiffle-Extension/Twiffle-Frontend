import React from "react";
import { css } from "glamor";

let styles = {
  base: {
    padding: 10,
    background: "rgba(72, 56, 120, 0.75)",
  },
};

function Overlay({ children, width, height, marginTop, marginLeft }) {
  return (
    <div
      className={css(styles.base, {
        marginTop: marginTop || "45%",
        marginLeft: marginLeft || "42%",
        width: width || 380,
        height: height || 130,
      })}
    >
      {children}
    </div>
  );
}

export default Overlay;
