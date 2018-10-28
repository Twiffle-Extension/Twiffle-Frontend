import React from "react";
import Button from "./Button";
import Text from "./Text";
import TextInput from "./TextInput";

function Guessing(props) {
  return (
    <div>
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
      <Text size="sm" weight="bold">
        Type of Guessing Game
      </Text>
      <select
        value={props.guessingType}
        onChange={({ target }) => props.onChange("guessingType", target.value)}
      >
        <option value="number">Number</option>
        <option value="riddle">Riddle</option>
      </select>
      <Text size="sm" weight="bold">
        Prompt
      </Text>
      <TextInput
        value={props.prompt}
        onChange={({ target }) => props.onChange("prompt", target.value)}
      />
      <Text size="sm" weight="bold">
        Answer
      </Text>
      <TextInput
        value={props.answer}
        onChange={({ target }) => props.onChange("answer", target.value)}
      />
      <Button
        backgroundColor="#6445A2"
        color="#fff"
        onClick={() => props.setField("isDone", true)}
      >
        Submit
      </Button>
      <Button onClick={() => props.setField("isCard", false)}>Cancel</Button>
    </div>
  );
}

export default Guessing;
