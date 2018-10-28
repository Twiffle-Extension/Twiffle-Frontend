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
    marginTop: 10,
    marginBottom: 10,
  },
  btnGroup: {
    display: "flex",
    marginTop: 50,
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
    justifyContent: "space-around",
  },
};

function Started(props) {
  return (
    <div>
      <div className={css(styles.group)}>
        <Text size="sm" weight="bold">
          Title
        </Text>
        <TextInput
          value={props.title}
          onChange={({ target }) => props.onChange("title", target.value)}
        />
      </div>
      <div className={css(styles.group)}>
        <Text size="sm" weight="bold">
          Link To Item
        </Text>
        <TextInput
          value={props.linkToItem}
          onChange={({ target }) => props.onChange("linkToItem", target.value)}
        />
      </div>
      <div className={css(styles.group)}>
        <Text size="sm" weight="bold">
          Type of Giveaway
        </Text>
        <select
          value={props.twiffleType}
          onChange={({ target }) => props.onChange("twiffleType", target.value)}
        >
          <option value="raffle">Raffle</option>
          <option value="guessing">Guessing</option>
          <option value="trivia">Trivia</option>
          <option value="custom">Custom</option>
        </select>
      </div>
      <div className={css(styles.btnGroup)}>
        <Button
          backgroundColor="#6445A2"
          color="#fff"
          onClick={() => props.setField("isStarted", true)}
        >
          Submit
        </Button>
        <Button onClick={() => props.setField("isIntroduced", false)}>
          Cancel
        </Button>
      </div>
    </div>
  );
}
export default Started;
