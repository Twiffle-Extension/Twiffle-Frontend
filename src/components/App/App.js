import React from "react";
import Authentication from "../../util/Authentication/Authentication";
import Intro from "./Intro";
import Started from "./Started";
import Card from "./Card";
import Raffle from "./Raffle";
import Guessing from "./Guessing";
import Trivia from "./Trivia";
import Custom from "./Custom";
import ViewerOverlay from "./ViewerOverlay";

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

  visibilityChanged = (isVisible) => {
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

  postGiveAway = () => {
    var data = {
      "url": this.state.linkToItem,
      "title": this.state.title,
      "raffle_type": this.state.twiffleType
    }
    console.log(data)
    // fetch('https://210bd120.ngrok.io/stream/raffle/start/123', {
    //   method: 'POST',
    //   mode: "cors",
    //   credentials: "same-origin",
    //   headers: {
    //     "Content-Type": "application/json; charset=utf-8",
    //     // "Content-Type": "application/x-www-form-urlencoded",
    //   },
    //   body: JSON.stringify(data)
    // })
    this.setField("isStarted", true)
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
          return <Intro setField={this.setField} />;
        } else {
          if (!this.state.isStarted) {
            return (
              <Started
                title={this.state.title}
                linkToItem={this.state.linkToItem}
                twiffleType={this.state.twiffleType}
                onChange={this.onChange}
                setField={this.setField}
              />
            );
          } else {
            if (!this.state.isCard) {
              return (
                <Card
                  cNum={this.state.cNum}
                  cHold={this.state.cHold}
                  cMonth={this.state.cMonth}
                  cYear={this.state.cYear}
                  csk={this.state.csk}
                  onChange={this.onChange}
                  setField={this.setField}
                />
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
        <ViewerOverlay
          streamer={this.state.streamer}
          visibilityChanged={this.visibilityChanged}
          isVisible={this.state.isVisible}
          onChange={this.onChange}
          prompt={this.state.prompt}
          answer={this.state.answer}
        />
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
