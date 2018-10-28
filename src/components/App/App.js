import React from "react";
import Authentication from "../../util/Authentication/Authentication";
import Button from "./Button";
import Overlay from "./Overlay";
import Text from "./Text";
import TextInput from "./TextInput";

let styles = {
  overlayHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
};

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
      <Button onClick={() => props.setField("isDone", true)}>Submit</Button>
      <Button onClick={() => props.setField("isCard", false)}>Cancel</Button>
    </div>
  );
}

function Trivia(props) {
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
      <Button onClick={() => props.setField("isDone", true)}>Submit</Button>
      <Button onClick={() => props.setField("isCard", false)}>Cancel</Button>
    </div>
  );
}

function Custom(props) {
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
      <Text>Question</Text>
      <TextInput
        value={props.prompt}
        onChange={({ target }) => props.onChange("prompt", target.value)}
      />
      <Text>Answer</Text>
      <TextInput
        value={props.answer}
        onChange={({ target }) => props.onChange("answer", target.value)}
      />
      <Button onClick={() => props.setField("isDone", true)}>Submit</Button>
      <Button onClick={() => props.setField("isCard", false)}>Cancel</Button>
    </div>
  );
}
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.Authentication = new Authentication();

    //if the extension is running on twitch or dev rig, set the shorthand here. otherwise, set to null.
    this.twitch = window.Twitch ? window.Twitch.ext : null;
    this.state = {
      answer: "",
      finishedLoading: false,
      theme: "light",
      isVisible: true,
      isIntroduced: false,
      isStarted: false,
      isCard: false,

      title: "",
      linkToItem: "",
      twiffleType: "raffle",

      cNum: "",
      cHold: "",
      cMonth: "",
      cYear: "",
      csk: "",

      participantRestriction: "Everyone",

      guessingType: "number", // number, riddle
      triviaNumQuestions: 5,
      triviaDifficulty: "Easy", // Easy, Medium, Hard
      triviaCategory: "", // 32, 31, 16, 15, 21
      triviaType: "", // t/f, multiple choice
      prompt: "",
      answer: "",
    };
  }

  contextUpdate(context, delta) {
    if (delta.includes("theme")) {
      this.setState(() => {
        return { theme: context.theme };
      });
    }
  }

  visibilityChanged(isVisible) {
    this.setState(() => {
      return {
        isVisible,
      };
    });
  }

  componentDidMount() {
    if (this.twitch) {
      this.twitch.onAuthorized(auth => {
        this.Authentication.setToken(auth.token, auth.userId);
        if (!this.state.finishedLoading) {
          // if the component hasn't finished loading (as in we've not set up after getting a token), let's set it up now.

          // now we've done the setup for the component, let's set the state to true to force a rerender with the correct data.
          this.setState(() => {
            return { finishedLoading: true };
          });
        }
      });

      this.twitch.listen("broadcast", (target, contentType, body) => {
        this.twitch.rig.log(
          `New PubSub message!\n${target}\n${contentType}\n${body}`
        );
        // now that you've got a listener, do something with the result...

        // do something...
      });

      this.twitch.onVisibilityChanged((isVisible, _c) => {
        this.visibilityChanged(isVisible);
      });

      this.twitch.onContext((context, delta) => {
        this.contextUpdate(context, delta);
      });
    }
  }

  componentWillUnmount() {
    if (this.twitch) {
      this.twitch.unlisten("broadcast", () =>
        console.log("successfully unlistened")
      );
    }
  }

  onChange = (field, next) => {
    this.setState(() => ({ [field]: next }));
  };

  setField = (field, next) => {
    this.setState(s => ({ [field]: next }));
  };

  render() {
    if (this.state.finishedLoading && this.state.isVisible) {
      if (this.Authentication.state.role === "broadcaster") {
        if (!this.state.isIntroduced) {
          return (
            <div>
              <Text color="" size="">
                Create a new Giveaway
              </Text>
              <Text>
                Currently there are 4 supported types of Giveaways: Raffle,
                Guessing, Trivia, and Custom Answers.
              </Text>
              <Button onClick={() => this.setField("isIntroduced", true)}>
                Create Giveaway
              </Button>
            </div>
          );
        } else {
          if (!this.state.isStarted) {
            return (
              <div>
                <Text>Title</Text>
                <TextInput
                  value={this.state.title}
                  onChange={({ target }) =>
                    this.onChange("title", target.value)
                  }
                />

                <Text>Link To Item</Text>
                <TextInput
                  value={this.state.linkToItem}
                  onChange={({ target }) =>
                    this.onChange("linkToItem", target.value)
                  }
                />

                <Text>Type of Giveaway</Text>
                <select
                  value={this.state.twiffleType}
                  onChange={({ target }) =>
                    this.onChange("twiffleType", target.value)
                  }
                >
                  <option value="raffle">Raffle</option>
                  <option value="guessing">Guessing</option>
                  <option value="trivia">Trivia</option>
                  <option value="custom">Custom</option>
                </select>

                <Button onClick={() => this.setField("isStarted", true)}>
                  Submit
                </Button>
                <Button onClick={() => this.setField("isIntroduced", false)}>
                  Cancel
                </Button>
              </div>
            );
          } else {
            if (!this.state.isCard) {
              return (
                <div>
                  <Text>Card Number</Text>
                  <TextInput
                    value={this.state.cNum}
                    onChange={({ target }) =>
                      this.onChange("cNum", target.value)
                    }
                  />

                  <Text>Card Holder</Text>
                  <TextInput
                    value={this.state.cHold}
                    onChange={({ target }) =>
                      this.onChange("cHold", target.value)
                    }
                  />

                  <Text>Expiration Date</Text>
                  <TextInput
                    value={this.state.cMonth}
                    onChange={({ target }) =>
                      this.onChange("cMonth", target.value)
                    }
                  />
                  <TextInput
                    value={this.state.cYear}
                    onChange={({ target }) =>
                      this.onChange("cYear", target.value)
                    }
                  />

                  <Text>CCV</Text>
                  <TextInput
                    value={this.state.csk}
                    onChange={({ target }) =>
                      this.onChange("csk", target.value)
                    }
                  />
                  <Button onClick={() => this.setField("isCard", true)}>
                    Submit
                  </Button>
                  <Button onClick={() => this.setField("isStarted", false)}>
                    Cancel
                  </Button>
                </div>
              );
            } else {
              if (this.state.twiffleType === "raffle") {
                return (
                  <Raffle
                    participantRestriction={this.state.participantRestriction}
                    onChange={this.onChange}
                    setField={this.setField}
                  />
                );
              }
              if (this.state.twiffleType === "guessing") {
                return (
                  <Guessing
                    participantRestriction={this.state.participantRestriction}
                    guessingType={this.state.guessingType}
                    prompt={this.state.prompt}
                    answer={this.state.answer}
                    onChange={this.onChange}
                    setField={this.setField}
                  />
                );
              }
              if (this.state.twiffleType === "trivia") {
                return (
                  <Trivia
                    participantRestriction={this.state.participantRestriction}
                    triviaNumQuestions={this.state.triviaNumQuestions}
                    triviaDifficulty={this.state.triviaDifficulty}
                    triviaCategory={this.state.triviaCategory}
                    triviaType={this.state.triviaType}
                    onChange={this.onChange}
                    setField={this.setField}
                  />
                );
              }
              if (this.state.twiffleType === "custom") {
                return (
                  <Custom
                    participantRestriction={this.state.participantRestriction}
                    prompt={this.state.prompt}
                    answer={this.state.answer}
                    onChange={this.onChange}
                    setField={this.setField}
                  />
                );
              }
            }
          }
        }
      }
      return (
        <div>
          <Overlay width={340} height={90}>
            <div style={styles.overlayHeader}>
              <Text color="#fff" weight="medium">
                Participate in {this.props.streamer || "ChoAssUpPussy"} Raffle
              </Text>
              <Text
                color="#fff"
                weight="medium"
                onClick={() => this.visibilityChanged(!this.state.isVisible)}
              >
                &#x2715;
              </Text>
            </div>

            <Text size="sm" color="#fff" weight="bold">
              {this.props.prompt || "Your Number"}
            </Text>
            <TextInput
              borderRadius={6}
              value={this.state.answer}
              onChange={({ target }) =>
                this.setState(() => ({ answer: target.value }))
              }
            />
          </Overlay>
        </div>
      );
    } else {
      return <div />;
    }
  }
}

{
  /* <div>
<p>Hello world!</p>
<p>My token is: {this.Authentication.state.token}</p>
<p>My opaque ID is {this.Authentication.getOpaqueId()}.</p>
<div>
  {this.Authentication.isModerator() ? (
    <p>
      I am currently a mod, and here's a special mod button{" "}
      <input value="mod button" type="button" />
    </p>
  ) : (
    "I am currently not a mod."
  )}
</div>
<p>
  I have{" "}
  {this.Authentication.hasSharedId()
    ? `shared my ID, and my user_id is ${this.Authentication.getUserId()}`
    : "not shared my ID"}
  .
</p>
</div> */
}
