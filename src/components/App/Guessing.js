import React from "react";
import { css } from "glamor";
import Button from "./Button";
import Text from "./Text";
import TextInput from "./TextInput";

let styles = {
  group: {
    width: "100%",
    marginTop: 10,
    marginBottom: 10,
  },
  btnGroup: {
    display: "flex",
    marginTop: 10,
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
  },
};

function Guessing(props) {
  return (
    <div>
      <div className={css(styles.group)}>
        <Text size="sm" weight="bold">
          Participant Restriction
        </Text>
        <select
          value={props.participantRestriction}
          onChange={({ target }) =>
            props.onChange("participantRestriction", target.value)
          }
        >
          <option value="everyone">Everyone</option>
          <option value="viewerOnly">Viewer Only</option>
          <option value="subscriberOnly">Subscriber Only</option>
        </select>
      </div>
      <div className={css(styles.group)}>
        <Text size="sm" weight="bold">
          Type of Guessing Game
        </Text>
        <select
          value={props.guessingType}
          onChange={({ target }) =>
            props.onChange("guessingType", target.value)
          }
        >
          <option value="number">Number</option>
          <option value="riddle">Riddle</option>
        </select>
      </div>
      <div className={css(styles.group)}>
        <Text size="sm" weight="bold">
          Prompt
        </Text>
        <TextInput
          value={props.prompt}
          onChange={({ target }) => props.onChange("prompt", target.value)}
        />
      </div>
      <div className={css(styles.group)}>
        <Text size="sm" weight="bold">
          Answer
        </Text>
        <TextInput
          value={props.answer}
          onChange={({ target }) => props.onChange("answer", target.value)}
        />
      </div>
      <div className={css(styles.btnGroup)}>
        <Button
          backgroundColor="#6445A2"
          color="#fff"
          onClick={() => props.setField("isRunning", true)}
        >
          Submit
        </Button>
        <Button onClick={() => props.setField("isCard", false)}>Cancel</Button>
      </div>
    </div>
  );
}

export default Guessing;
