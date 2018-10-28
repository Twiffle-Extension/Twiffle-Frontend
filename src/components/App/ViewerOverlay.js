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
  if (props.didWin){
    return <WinnerOverlay onChange={onChange}/>
  }
  return (
    <div>
      <Overlay width={340} height={90}>
        <div className={css(styles.overlayHeader)}>
          <Text color="#fff" weight="medium">
            Participate in {props.streamer || "ChoAssUpPussy"} Raffle
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
        <TextInput
          borderRadius={6}
          value={props.answer}
          onChange={({ target }) => props.onChange("answer", target.value)}
        />
      </Overlay>
    </div>
  );
}

export default ViewerOverlay;
