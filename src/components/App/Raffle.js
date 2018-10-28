import React from "react";
import Button from "./Button";
import Text from "./Text";

function Raffle(props) {
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
      <Button onClick={() => props.setField("isDone", true)}>Submit</Button>
      <Button onClick={() => props.setField("isCard", false)}>Cancel</Button>
    </div>
  );
}

export default Raffle;