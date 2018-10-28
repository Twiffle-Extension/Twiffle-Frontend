import React from "react";
import { css } from "glamor"
import Button from "./Button";
import Text from "./Text";
import TextInput from "./TextInput";

function Card(props){
  return (
    <div>
      <Text>Card Number</Text>
      <TextInput
        value={props.cNum}
        onChange={({ target }) =>
          props.onChange("cNum", target.value)
        }
      />

      <Text>Card Holder</Text>
      <TextInput
        value={props.cHold}
        onChange={({ target }) =>
          props.onChange("cHold", target.value)
        }
      />

      <Text>Expiration Date</Text>
      <TextInput
        value={props.cMonth}
        onChange={({ target }) =>
          props.onChange("cMonth", target.value)
        }
      />
      <TextInput
        value={props.cYear}
        onChange={({ target }) =>
          props.onChange("cYear", target.value)
        }
      />

      <Text>CCV</Text>
      <TextInput
        value={props.csk}
        onChange={({ target }) =>
          props.onChange("csk", target.value)
        }
      />
      <Button onClick={() => props.setField("isCard", true)}>
        Submit
      </Button>
      <Button onClick={() => props.setField("isStarted", false)}>
        Cancel
      </Button>
    </div>
  );
}
export default Card;