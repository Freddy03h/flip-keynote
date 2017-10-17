// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
  Code,
  Link,
  S,
} from "spectacle";
import CodeSlide from 'spectacle-code-slide'

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "./theme";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  userperception: require("../assets/user-perception.jpg"),
};

preloader(images);

const theme = createTheme({
  primary: "#ff4081"
});

import {
  ListHandler,
  List4,
  ListTransform2,
} from '../src/components'

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["slide"]}
        transitionDuration={500}
        progress="bar"
        controls={false}
        theme={theme}
      >
        <Slide>
          <Heading size={1} fit caps lineHeight={1}>
            F.L.I.P.
          </Heading>
          <Heading size={1} fit caps textColor="secondary">
            Layout Animation
          </Heading>
        </Slide>

        <Slide bgColor="secondary">
          <Heading caps size={1} textColor="tertiary">
            (Previously Slide)
          </Heading>
        </Slide>

        <Slide>
          <Heading size={2} caps textColor="secondary">
            Design Constraints
          </Heading>
          <Text textColor="tertiary" margin="3.5rem auto 0">
            Using only <Code>opacity</Code> and <Code>transform</Code> is frustrating 😫
          </Text>
        </Slide>

        <Slide align="middle flex-start">
          <ListHandler>
            <List4 />
          </ListHandler>
        </Slide>

        <Slide>
          <Heading size={3} caps textColor="secondary">
            I want to be able to change the DOM
          </Heading>
          <Text textColor="tertiary" margin="3.5rem auto 0">
            I don't want to do all the Layout in JavaScript 😓
          </Text>
        </Slide>

        <Slide>
          <ListTransform2 />
        </Slide>

        <Slide>
          <Heading size={3} caps textColor="secondary">
            I want to animate Layout
          </Heading>
          <Text textColor="tertiary" margin="3.5rem auto 0">
            Please give me back <Code>width</Code> et <Code>height</Code> 😭
          </Text>
        </Slide>

        <Slide bgColor="secondary">
          <Heading caps size={1} textColor="tertiary">
            Fake
          </Heading>
          <Heading caps size={2} textColor="primary">
            Layout
          </Heading>
          <Heading caps size={3} textColor="tertiary">
            Animation
          </Heading>
        </Slide>

        <Slide>
          <List ordered>
            <ListItem textColor="tertiary" margin="3rem auto">
              <Text>
                <S type="bold" textColor="tertiary">First :</S> the initial state of the elements with <Code>getBoundingClientRect()</Code>
              </Text>
            </ListItem>
            <ListItem textColor="tertiary" margin="3rem auto">
              <Text>
                <S type="bold" textColor="tertiary">Last :</S> the final state of the elements with <Code>getBoundingClientRect()</Code>
              </Text>
            </ListItem>
            <ListItem textColor="tertiary" margin="3rem auto">
              <Text>
                <S type="bold" textColor="tertiary">Invert :</S> Visually replace elements to their initial positions, as if they hadn't moved, using <Code>transform</Code> or <Code>opacity</Code>
              </Text>
            </ListItem>
            <ListItem textColor="tertiary" margin="3rem auto">
              <Text>
                <S type="bold" textColor="tertiary">Play :</S> Animate the change to the final state
              </Text>
            </ListItem>
          </List>
        </Slide>

        <Slide>
          (here animation)
        </Slide>

        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../src/examples/flip.example")}
          ranges={[
            { loc: [0, 23], title: "F.L.I.P." },
          ]}
        />

        <Slide>
          <Heading size={3} caps textColor="secondary">
            By the way…
          </Heading>
          <Text textColor="tertiary" margin="3.5rem auto 0">
            You told us it's not performant to produce a Layout change…
          </Text>
          <Text textColor="tertiary" margin="3.5rem auto 0">
            But you did one ! 🤔
          </Text>
        </Slide>

        <Slide>
          <img className="content" src={images.userperception} />
          <Heading size={6} caps textColor="tertiary">
            Taking advantage of user perception
          </Heading>
        </Slide>

      </Deck>
    );
  }
}
