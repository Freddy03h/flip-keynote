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
  AnimFLIP,
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
            Give me back my <Code>width</Code> & <Code>height</Code> 😭
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
          <AnimFLIP />
        </Slide>

        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../src/examples/flip.example")}
          ranges={[
            { loc: [0, 15], title: "F.L.I.P." },
            { loc: [0, 1], note: "Get the first position" },
            { loc: [2, 3], note: "Change the Layout" },
            { loc: [4, 5], note: "Get the last position" },
            { loc: [6, 7], note: "Invert" },
            { loc: [8, 9], note: "Wait for the next frame" },
            { loc: [10, 12], note: "Play the animation" },
            { loc: [14, 15], note: "Capture the end with transitionend" },
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

        <Slide>
          <Heading size={4} caps textColor="secondary" margin="-4rem auto 0.5rem">
            References
          </Heading>

          <Text textAlign="left">Articles</Text>
          <List textColor="tertiary" margin="0px 0px 1em">
            <ListItem><Link href="https://aerotwist.com/blog/flip-your-animations/" target="_blank">FLIP Your Animations</Link></ListItem>
            <ListItem><Link href="https://medium.com/developers-writing/animating-the-unanimatable-1346a5aab3cd#.7a0hhecpw" target="_blank">Animating the Unanimatable. Smooth reordering transitions in React.js</Link></ListItem>
          </List>

          <Text textAlign="left">Talks</Text>
          <List textColor="tertiary" margin="0px 0px 1em">
            <ListItem><Link href="https://www.youtube.com/watch?v=RCFQu0hK6bU" target="_blank">The Applied Science of Runtime Performance</Link></ListItem>
            <ListItem><Link href="https://www.youtube.com/watch?v=thNyy5eYfbc" target="_blank">High performance web user interfaces</Link></ListItem>
          </List>

          <Text textAlign="left">Tools</Text>
          <List textColor="tertiary" margin="0px 0px 1em">
            <ListItem><Link href="https://github.com/joshwcomeau/react-flip-move" target="_blank">react-flip-move</Link></ListItem>
          </List>

          <Text textAlign="left">Others</Text>
          <List textColor="tertiary" margin="0px 0px 1em">
            <ListItem><Link href="http://jankfree.org/" target="_blank">Jank Free</Link></ListItem>
          </List>
        </Slide>

        <Slide>
          (issue about FLIP, vDOM is a cool abstraction)
        </Slide>

        <Slide>
          (What's next : css contain and firefox quantum web render)
        </Slide>

        <Slide>
          <Heading size={1} caps textColor="tertiary">
            Merci
          </Heading>
          <Heading size={5} caps textColor="secondary" margin="3em 0 0">
            <Link href="https://twitter.com/HarrisFreddy" textColor="secondary">
              <img src={images.twitter} style={{border: 'none', boxShadow: 'none', verticalAlign: 'sub', height: 60, margin: 0, marginRight: 15}} />
              @harrisfreddy
            </Link>
          </Heading>
          <Heading size={6} caps textColor="tertiary" margin="1em 0 0.5em">
            Freelance React Native & Progressive Web App
          </Heading>
        </Slide>

      </Deck>
    );
  }
}
