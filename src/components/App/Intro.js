import React from "react";
import { css } from "glamor"
import Button from "./Button";
import Text from "./Text";

function Intro(props){
  return (
    <div>
      <Text color="" size="">
        Create a new Giveaway
      </Text>
      <Text>
        Currently there are 4 supported types of Giveaways: Raffle,
        Guessing, Trivia, and Custom Answers.
      </Text>
      <Button onClick={() => props.setField("isIntroduced", true)}>
        Create Giveaway
      </Button>
    </div>
  );
}
export default Intro;