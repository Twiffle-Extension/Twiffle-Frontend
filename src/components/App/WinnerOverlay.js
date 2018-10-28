import React from "react";
import { css } from "glamor";
import Button from "./Button";
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

function WinnerOverlay(props) {
  return (
    <div>
      <Overlay width={400} height={400}>
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
          Street Address
        </Text>
        <TextInput
          borderRadius={6}
          value={props.answer}
          onChange={({ target }) =>
            props.onChange("streetAddress", target.value)
          }
        />
        <Text size="sm" color="#fff" weight="bold">
          City
        </Text>
        <TextInput
          borderRadius={6}
          value={props.answer}
          onChange={({ target }) => props.onChange("city", target.value)}
        />
        <Text size="sm" color="#fff" weight="bold">
          State
        </Text>
        <TextInput
          borderRadius={6}
          value={props.answer}
          onChange={({ target }) => props.onChange("state", target.value)}
        />
        <Text size="sm" color="#fff" weight="bold">
          Country
        </Text>
        <TextInput
          borderRadius={6}
          value={props.answer}
          onChange={({ target }) => props.onChange("country", target.value)}
        />
      </Overlay>
    </div>
  );
}

export default WinnerOverlay;
