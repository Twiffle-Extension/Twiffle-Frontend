import React from "react";
import { css } from "glamor";
import Button from "./Button";
import Text from "./Text";
import TextInput from "./TextInput";

let styles = {
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  group: {
    width: "100%",
    marginTop: 5,
    marginBottom: 5,
  },
  inputGroup: {
    display: "flex",
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  btnGroup: {
    display: "flex",
    marginTop: 20,
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
  },
};

function Card(props) {
  return (
    <div className={css(styles.container)}>
      <div className={css(styles.group)}>
        <Text size="sm" weight="bold">
          Card Number
        </Text>
        <TextInput
          value={props.cNum}
          onChange={({ target }) => props.onChange("cNum", target.value)}
        />
      </div>
      <div className={css(styles.group)}>
        <Text size="sm" weight="bold">
          Card Holder
        </Text>
        <TextInput
          value={props.cHold}
          onChange={({ target }) => props.onChange("cHold", target.value)}
        />
      </div>
      <div className={css(styles.group)}>
        <Text size="sm" weight="bold">
          Expiration Date
        </Text>
        <div className={css(styles.inputGroup)}>
          <TextInput
            size="sm"
            value={props.cMonth}
            onChange={({ target }) => props.onChange("cMonth", target.value)}
          />
          <TextInput
            size="sm"
            value={props.cYear}
            onChange={({ target }) => props.onChange("cYear", target.value)}
          />
        </div>
      </div>
      <div className={css(styles.group)}>
        <Text size="sm" weight="bold">
          CCV
        </Text>
        <TextInput
          value={props.csk}
          onChange={({ target }) => props.onChange("csk", target.value)}
        />
      </div>
      <div className={css(styles.btnGroup)}>
        <Button
          backgroundColor="#6445A2"
          color="#fff"
          onClick={() => props.setField("isCard", true)}
        >
          Submit
        </Button>
        <Button onClick={() => props.setField("isStarted", false)}>
          Cancel
        </Button>
      </div>
    </div>
  );
}
export default Card;
