import React from "react";
import Ticker from "react-flip-ticker"
import { css } from "glamor";
import Button from "./Button";
import Text from "./Text";

function Countdown(props) {
  return <Ticker text={props.countdown} textClassName="text" />
}

export default Countdown;
