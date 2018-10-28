import React from "react";
import { css } from "glamor";
import Button from "./Button";
import Text from "./Text";

let styles = {
  group: {
    width: "100%",
    marginTop: 10,
    marginBottom: 10,
  },
  btnGroup: {
    display: "flex",
    marginTop: 15,
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
  },
};

function Trivia(props) {
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
          Number of Questions
        </Text>
        <select
          value={props.triviaNumQuestions}
          onChange={({ target }) =>
            props.onChange("triviaNumQuestions", target.value)
          }
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>
      </div>
      <div className={css(styles.group)}>
        <Text size="sm" weight="bold">
          Difficulty
        </Text>
        <select
          value={props.triviaDifficulty}
          onChange={({ target }) =>
            props.onChange("triviaDifficulty", target.value)
          }
        >
          <option value="everyone">Easy</option>
          <option value="viewerOnly">Medium</option>
          <option value="subscriberOnly">Hard Only</option>
        </select>
      </div>
      <div className={css(styles.group)}>
        <Text size="sm" weight="bold">
          Category of Trivia
        </Text>
        <select
          value={props.triviaCategory}
          onChange={({ target }) =>
            props.onChange("triviaCategory", target.value)
          }
        >
          <option value="32">Entertainment: Cartoon & Animations</option>
          <option value="31">Entertainment: Japanese Anime & Manga</option>
          <option value="16">Entertainment: Board Games</option>
          <option value="15">Entertainment: Video Games</option>
          <option value="21">Sports</option>
        </select>
      </div>
      <div className={css(styles.group)}>
        <Text size="sm" weight="bold">
          Type of Trivia
        </Text>
        <select
          value={props.triviaType}
          onChange={({ target }) => props.onChange("triviaType", target.value)}
        >
          <option value="trueFalse">True/False</option>
          <option value="multipleChoice">multipleChoice</option>
        </select>
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

export default Trivia;
