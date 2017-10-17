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
} from "spectacle";
import CodeSlide from 'spectacle-code-slide'

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "./theme";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


// const images = {
//   city: require("../assets/city.jpg"),
//   kat: require("../assets/kat.png"),
//   logo: require("../assets/formidable-logo.svg"),
//   markdown: require("../assets/markdown.png")
// };

// preloader(images);

const theme = createTheme({
  primary: "#ff4081"
});

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
          <Heading size={1} fit caps textColor="black">
            Layout Animation
          </Heading>
        </Slide>

      </Deck>
    );
  }
}
