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
  freddy: require("../assets/freddy.jpg"),
  thomas: require("../assets/thomas.jpg"),
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
          <Heading caps size={1} textColor="tertiary" textAlign="left" margin="0.3em auto">
            <div style={{display: 'inline-flex', width: '0.74em', height: '0.74em', marginRight: '0.3em'}}>
              <svg style={{margin: 'auto', fill: 'white', width: '100%'}} x="0px" y="0px" viewBox="0 0 50 50" enable-background="new 0 0 50 50"><g><g><path d="M50,50H1V1h49V50z M5,46h41V5H5V46z"/><rect x="16" y="17" width="4" height="31"/><rect x="3" y="14" width="45" height="4"/></g><rect x="17" y="30" width="31" height="4"/></g></svg>
            </div>
            Layout
          </Heading>
          <Heading caps size={1} textColor="tertiary" textAlign="left" margin="0.3em auto">
            <div style={{display: 'inline-flex', width: '0.74em', height: '0.74em', marginRight: '0.3em'}}>
              <svg style={{margin: 'auto', fill: 'white', width: '100%', transform: 'scale(1.3)'}} x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100"><g><path d="M63.6083,33.3253l-5.6326-4.8058c-0.6924-0.5907-1.3169-1.2565-1.8621-1.9852L45.8148,12.7692   c-0.5551-0.7419-1.6389-0.8195-2.2939-0.1644L20.1917,35.9339c-0.8425,0.8426-0.8693,2.2001-0.0607,3.0754l8.6663,9.3792   c0.47,0.5085-0.2387,1.2413-0.7626,0.7885l-9.7507-8.4251c-0.8801-0.7604-2.1978-0.7124-3.0203,0.11l-1.7855,1.7855   c-0.5367,0.5367-0.5957,1.387-0.1381,1.9927L23.687,58.3359c0.5468,0.7236,1.1719,1.3845,1.8641,1.9705l6.1729,5.226   c0.9782,0.8281,2.4278,0.768,3.334-0.1382L63.7421,36.71C64.6933,35.7587,64.6316,34.1985,63.6083,33.3253z"/><path d="M84.7972,75.308c-7.569-7.4921-19.1168-15.9644-19.1168-15.9644c-2.9304-1.9994-2.2886-4.1873-1.0511-5.4247l6.0219-6.0218   c3.1407-3.1407,3.1407-8.233,0-11.3737c-0.5366-0.5366-1.4066-0.5366-1.9432,0.0001l-33.058,33.0579   c-0.5366,0.5366-0.5366,1.4066,0,1.9432c3.1407,3.1407,8.233,3.1407,11.3737,0l6.0217-6.0218   c1.2375-1.2375,2.9297-2.0137,5.4248,1.0511c0,0,8.4723,11.5479,15.9643,19.1168c2.8564,2.8858,7.5142,2.8937,10.3853,0.0226   h0.0001C87.6908,82.8222,87.683,78.1644,84.7972,75.308z M80.9224,81.7959c-1.027,1.027-2.6921,1.027-3.7191,0   c-1.027-1.027-1.027-2.6921,0-3.7191c1.027-1.027,2.6921-1.027,3.7191,0C81.9494,79.1038,81.9494,80.7689,80.9224,81.7959z"/></g></svg>
            </div>
            Paint
          </Heading>
          <Heading caps size={1} textColor="primary" textAlign="left" margin="0.3em auto">
            <div style={{display: 'inline-flex', width: '0.74em', height: '0.74em', marginRight: '0.3em'}}>
              <svg style={{margin: 'auto', fill: '#ff4081', width: '100%', transform: 'scale(1.3)'}} x="0px" y="0px" viewBox="0 0 256 256" enable-background="new 0 0 256 256"><path d="M188.156,107.66l35.227-20.34L128,32.245L32.617,87.319l35.228,20.34L32.617,128l35.228,20.34l-35.228,20.34L128,223.755  l95.382-55.074l-35.227-20.34L223.383,128L188.156,107.66z M128,42.638l77.383,44.682L128,132.001L50.616,87.319L128,42.638z   M76.844,112.856L128,142.394l51.156-29.538L205.384,128L128,172.682L50.616,128L76.844,112.856z M205.384,168.681L128,213.362  l-77.384-44.682l26.228-15.144L128,183.074l51.156-29.538L205.384,168.681z"/></svg>
            </div>
            Composite
          </Heading>
        </Slide>

        <Slide bgColor="secondary">

          <Link href="https://www.youtube.com/watch?v=qrbbD-1ET14" target="_blank" style={{display: 'flex', alignItems: 'center', margin: '0 auto 3em'}}>
            <img src={images.freddy} style={{width: 150, height: 150, display: 'block', borderRadius: 75, border: 'solid white 4px'}} />
            <div style={{textAlign: 'left', marginLeft: '1em'}}>
              <Heading caps size={5} textColor="primary" margin="0.25rem auto">Web Animation Performance</Heading>
              <Text textColor="tertiary">Freddy Harris</Text>
              <Text textColor="tertiary">Best of Web 2016</Text>
            </div>
          </Link>

          <Link href="https://www.youtube.com/watch?v=ziV-8SsaFzk" target="_blank" style={{display: 'flex', alignItems: 'center', margin: '3em auto'}}>
            <img src={images.thomas} style={{width: 150, height: 150, display: 'block', borderRadius: 75, border: 'solid white 4px'}} />
            <div style={{textAlign: 'left', marginLeft: '1em'}}>
              <Heading caps size={5} textColor="primary" margin="0.25rem auto">La performance de rendu CSS</Heading>
              <Text textColor="tertiary">Thomas Zilliox</Text>
              <Text textColor="tertiary">BlendWebMix 2016</Text>
            </div>
          </Link>

          <Text textColor="tertiary">Only use <Code textColor="tertiary">transform</Code> and <Code textColor="tertiary">opacity</Code> for animations 🚀</Text>
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
            { loc: [0, 17], title: "F.L.I.P." },
            { loc: [0, 1], note: "Get the first position" },
            { loc: [2, 3], note: "Change the Layout" },
            { loc: [4, 5], note: "Get the last position" },
            { loc: [6, 9], note: "Invert" },
            { loc: [10, 11], note: "Wait for the next frame" },
            { loc: [12, 14], note: "Play the animation" },
            { loc: [16, 17], note: "Capture the end with transitionend" },
          ]}
        />

        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../src/examples/flip2.example")}
          ranges={[
            { loc: [8, 15] },
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
          <Heading size={4} caps textColor="secondary">
            It's that simple ?
          </Heading>
          <List textColor="tertiary">
            <ListItem>
              How to animate an element that disapears from the DOM ?<br/>
              We need to handle a <S type="italic">'ghost'</S> element : get the removed element back, to animate it
            </ListItem>
            <ListItem>
              Also, <Code>getBoundingClientRect()</Code> is relative to viewport, it isn't easy to handle nested elements
            </ListItem>
            <ListItem>
              It's easier to answer those problems with an abstraction layer (vDOM like in React, Vue, …)
            </ListItem>
          </List>
        </Slide>

        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../src/examples/reactflipmove.example")}
          ranges={[
            { loc: [0, 12], title: "react-flip-move" },
            { loc: [0, 6], note: "FlipMove component" },
            { loc: [7, 10], note: "Change the DOM the way I want it" },
          ]}
        />

        <Slide>
          <Heading size={4} caps textColor="secondary">
            What's Next ?
          </Heading>
          <List textColor="tertiary" margin="0 0 0 8rem">
            <ListItem margin="2rem auto">
              CSS Containment <Code>contain: layout;</Code>
            </ListItem>
            <ListItem margin="2rem auto">
              Firefox Quantum WebRender : Paint in the GPU 🔥
            </ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={4} caps textColor="secondary" margin="-4rem auto 0.5rem">
            References
          </Heading>

          <Text textAlign="left">Articles</Text>
          <List textColor="tertiary" margin="0px 0px 1em">
            <ListItem><Link href="https://aerotwist.com/blog/flip-your-animations/" target="_blank">FLIP Your Animations</Link></ListItem>
            <ListItem><Link href="https://medium.com/developers-writing/animating-the-unanimatable-1346a5aab3cd#.7a0hhecpw" target="_blank">Animating the Unanimatable. <span style={{fontSize: '0.8em'}}>Smooth reordering transitions in React.js</span></Link></ListItem>
            <ListItem><Link href="https://termvader.github.io/css-contain/" target="_blank">CSS 'contain' Property</Link></ListItem>
            <ListItem><Link href="https://hacks.mozilla.org/2017/10/the-whole-web-at-maximum-fps-how-webrender-gets-rid-of-jank/" target="_blank">How Firefox Quantum WebRender gets rid of jank</Link></ListItem>
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
