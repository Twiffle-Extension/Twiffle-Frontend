import React from "react";
import { css } from "glamor";
import Button from "./Button";
import Text from "./Text";

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
  button: {
    marginTop: 15,
  },
};

function Intro(props) {
  return (
    <div className={css(styles.container)}>
      <div className={css(styles.group)}>
        <Text color="#6E6778" weight="bold">
          Create a new Giveaway
        </Text>
      </div>

      <div className={css(styles.group)}>
        <Text>
          Currently there are 4 supported types of Giveaways: Raffle, Guessing,
          Trivia, and Custom Answers.
        </Text>
      </div>
      <div className={css(styles.button)}>
        <Button
          backgroundColor="#6445A2"
          color="#fff"
          onClick={() => props.setField("isIntroduced", true)}
        >
          Create Giveaway
        </Button>
      </div>
    </div>
  );
}
export default Intro;
