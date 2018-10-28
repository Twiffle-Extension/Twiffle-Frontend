import React from "react";
import { css } from "glamor";
import Button from "./Button";
import WinnerOverlay from "./WinnerOverlay";
import Overlay from "./Overlay";
import Text from "./Text";
import TextInput from "./TextInput";

let styles = {
  overlayHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
};

function ViewerOverlay(props) {
  if (props.didWin) {
    return <WinnerOverlay onChange={props.onChange} />;
  }
  return (
    <div>
      <Overlay width={340} height={90}>
        <div className={css(styles.overlayHeader)}>
          <Text color="#fff" weight="medium">
            Participate in {props.streamer || "kennetpostigo"} Raffle
          </Text>
          <Text
            color="#fff"
            weight="medium"
            onClick={() => props.visibilityChanged(!props.isVisible)}
          >
            &#x2715;
          </Text>
        </div>

        <Text size="sm" color="#fff" weight="bold">
          {props.prompt || "Your Number"}
        </Text>
        <div style={{display: "flex"}}>
        <TextInput
          borderRadius={6}
          value={props.answer}
          onChange={({ target }) => props.onChange("answer", target.value)}
        />
        <Button size="sm"backgroundColor="#78D4FD" color="#fff" border="none" onClick={() => props.visibilityChanged(!props.isVisible)}>
          GO
        </Button>
        </div>
      </Overlay>
    </div>
  );
}

export default ViewerOverlay;
