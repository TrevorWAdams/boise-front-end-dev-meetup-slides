// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Table,
  TableHeader,
  TableRow,
  TableHeaderItem,
  TableBody,
  TableItem,
  Text,
  Notes
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    white: "#f9f9fa",
    black: "#010101",
    lightGray: "#d7d0da",
    gray: "#baaec0",
    darkGray: "#94829d",
    brand0: "#0055ff",
    brand1: "#ad00ff",
    brand2: "#3488E8",
    danger: "#ff2b00",
    warning: "#e0ff49",
    success: "#00ff2b",

    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quaternary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

const header = `{
  "alg": "HS256",
  "typ": "JWT"
}.`;

const payload = `{
  "userId": "cjo1jltb1c99q0a63pbc9jjwu",
  "iat": 1541285441
}.`;

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide", "fade"]}
        transitionDuration={500}
        theme={theme}
        progress="bar"
      >
        <Slide transition={["zoom"]} bgColor="black" align="flex-start">
          <Heading size={1} caps lineHeight={1} textColor="brand0">
            JWT & SSR React
          </Heading>
          <Appear>
            <Text margin="10px 0 0" textColor="brand1" size={1} fit bold>
              My name is Britney Rae,
            </Text>
          </Appear>
          <Appear>
            <Text margin="10px 0 0" textColor="brand2" size={1} fit bold>
              and this is my dad Trevor.
            </Text>
          </Appear>

          <Notes>
            <p>JSON Web Token & Server Side Rendered React.Js</p>
          </Notes>
        </Slide>

        <Slide transition={["zoom"]} bgColor="black" align="flex-start">
          <Heading size={1} caps lineHeight={3} textColor="brand0">
            Demo Code
          </Heading>
          <Text margin="10px 0 0" textColor="brand1" size={1} bold textAlign="left">
            GitHub:
          </Text>
          <Text margin="10px 0 0" textColor="white" size={2} fit bold>
            https://github.com/foogaria/wootha-foogaria
          </Text>
        </Slide>

        <Slide transition={["zoom"]} bgColor="black" align="flex-start">
          <Heading size={1} fit caps lineHeight={1} textColor="brand0">
            Disclaimers:
          </Heading>
          <Appear>
            <Text margin="10px 0 0" textColor="white" size={1} fit bold>
              We are not security experts.
            </Text>
          </Appear>
          <Appear>
            <Text margin="10px 0 0" textColor="brand1" size={1} fit bold>
              The demo was built in a class.
            </Text>
          </Appear>

          <Notes>
            <p>
              This presentation is just my dad and me sharing our TIL moment.
            </p>
            <p>If you spot inaccuracies, please point them out.</p>
            <p>We're just here to learn.</p>
            <p>Built during: https://advancedreact.com/ by Wes Bos</p>
          </Notes>
        </Slide>

        <Slide transition={["zoom"]} bgColor="black" align="flex-start">
          <Heading size={1} caps lineHeight={1} textColor="brand0">
            Agenda
          </Heading>
          <List>
            <Appear>
              <ListItem textColor="white">What a JWT is.</ListItem>
            </Appear>

            <Appear>
              <ListItem textColor="white">What a JWT does.</ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="white">
                Some common security threats.
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="white">
                How to protect against those threats.
              </ListItem>
            </Appear>
          </List>
          <Appear>
            <Text margin="10px 0 0" textColor="brand1" size={1} fit bold>
              Plus we'll look at a simplified but pretty cool demo.
            </Text>
          </Appear>
          <Notes>
            <p>Notes:</p>
          </Notes>
        </Slide>

        <Slide transition={["zoom"]} bgColor="black" align="flex-start">
          <Heading size={1} fit caps lineHeight={1} textColor="brand0">
            What is a JWT?
          </Heading>
          <Heading size={1} fit caps lineHeight={1} textColor="brand1">
            JSON Web Token (JWT)
          </Heading>
          <BlockQuote>
            <Quote textSize="1em">
              JSON Web Token (JWT) is a compact, URL-safe means of representing
              claims to be transferred between two parties.
            </Quote>
            <Cite>Internet Engineering Task Force (IETF)</Cite>
          </BlockQuote>
          <Notes>
            <p>Notes:</p>
            <ol>
              <li>https://tools.ietf.org/html/rfc7519</li>
            </ol>
          </Notes>
        </Slide>

        <Slide transition={["zoom"]} bgColor="black" align="flex-start">
          <Heading size={1} caps lineHeight={1} textColor="brand0">
            A JWT.
          </Heading>
          .
          <Text margin="10px 0 0" textColor="gray" size={1} fit bold>
            HEADER.
          </Text>
          <Text margin="10px 0 0" textColor="brand1" size={1} fit bold>
            PAYLOAD.
          </Text>
          <Text margin="10px 0 0" textColor="brand2" size={1} fit bold>
            SIGNATURE
          </Text>
          .
          <Notes>
            <p>Notes:</p>
            <ul>
              <li>JWT is pronounced "jot" (or so it is suggested).</li>.
            </ul>
          </Notes>
        </Slide>

        <Slide transition={["zoom"]} bgColor="black" align="flex-start">
          <Heading size={1} fit caps lineHeight={1} textColor="brand0">
            A JWT.
          </Heading>
          <Text margin="10px 0 0" textColor="gray" size={1} fit bold>
            eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
          </Text>
          <Text margin="10px 0 0" textColor="brand1" size={1} fit bold>
            eyJ1c2VySWQiOiJjam8xamx0YjFjOTlxMGE2M3BiYzlqand1IiwiaWF0IjoxNTQxMjg1NDQxfQ.
          </Text>
          <Text margin="10px 0 0" textColor="brand2" size={1} fit bold>
            ORtIZsnwtw0TUrMtZaj6zyHeF4HeD15-oVSRsBk7hqo
          </Text>

          <Notes>
            <p>Notes:</p>
            <ul>
              <li>Base64UrlEncoded</li>
            </ul>
          </Notes>
        </Slide>

        <Slide transition={["zoom"]} bgColor="black" align="flex-start">
          <Heading size={1} fit caps lineHeight={1} textColor="brand0">
            A JWT.
          </Heading>

          <Text margin="10px 0 0" textColor="gray" size={1} fit bold>
            {`{
  "alg": "HS256",
  "typ": "JWT"
}`}
            .
          </Text>
          <Text margin="10px 0 0" textColor="brand1" size={1} fit bold>
            {`{
  "userId": "cjo1jltb1c99q0a63pbc9jjwu",
  "iat": 1541285441
}`}
            .
          </Text>

          <Notes>
            <p>Notes:</p>
            <ul>
              <li>Decoded</li>
              <li>We don't need to decode the signature</li>
              <li>
                It's just the hash of a function that takes your app secret.
              </li>
            </ul>
          </Notes>
        </Slide>

        <Slide transition={["zoom"]} bgColor="black" align="flex-start">
          <Heading size={1} fit caps lineHeight={1} textColor="brand0">
            What does a JWT do?
          </Heading>
          <BlockQuote>
            <Quote textSize="1em">
              JWTs encode claims to be transmitted as a JavaScript Object
              Notation (JSON) [RFC7159] object that is used as the payload of a
              JSON Web Signature (JWS) [JWS] structure or as the plaintext of a
              JSON Web Encryption (JWE) [JWE] structure, enabling the claims to
              be digitally signed or MACed and/or encrypted. JWTs are always
              represented using the JWS Compact Serialization or the JWE Compact
              Serialization.
            </Quote>
            <Cite>Internet Engineering Task Force (IETF)</Cite>
          </BlockQuote>
          <Notes>
            <p>Notes:</p>
          </Notes>
        </Slide>

        <Slide transition={["zoom"]} bgColor="black" align="flex-start">
          <Heading size={1} fit caps lineHeight={1} textColor="brand0">
            What does a JWT do? (simplified)
          </Heading>
          <List>
            <ListItem textColor="white">
              Has stores key value pair in the payload.
            </ListItem>
            <ListItem textColor="white">
              The keys represent claims names.
            </ListItem>
            <ListItem textColor="white">Some claim names are special.</ListItem>
          </List>
          <Notes>
            <p>Notes:</p>
            <p>Certain claim names (keys) are Registered.</p>
          </Notes>
        </Slide>

        <Slide transition={["zoom"]} bgColor="black" align="flex-start">
          <Heading size={1} fit caps lineHeight={1} textColor="brand0">
            Registered Claim Names
          </Heading>
          <List>
            <ListItem textColor="white" fit>
              "iss" (Issuer)
            </ListItem>
            <ListItem textColor="white">"sub" (Subject)</ListItem>
            <ListItem textColor="white">"aud" (Audience)</ListItem>
            <ListItem textColor="white">"exp" (Expiration Time)</ListItem>
            <ListItem textColor="white">"nbf" (Not Before)</ListItem>
            <ListItem textColor="white">"iat" (Issued At)</ListItem>
            <ListItem textColor="white">"jti" (JWT ID)</ListItem>
          </List>
          <Notes>
            <p>Notes:</p>
          </Notes>
        </Slide>

        <Slide transition={["zoom"]} bgColor="black" align="flex-start">
          <Heading size={1} fit caps lineHeight={1} textColor="brand0">
            Why are these important?
          </Heading>
          <List>
            <ListItem textColor="white" fit>
              OpenId
            </ListItem>
            <ListItem textColor="white" fit>
              OAuth 2.0
            </ListItem>
            <ListItem textColor="white" fit>
              OpenId Connect
            </ListItem>
          </List>

          <Notes>
            <p>Notes:</p>
            <ul>
              <li>Authentication - wootha foogaria</li>
              <li>
                Authentication - OpenId - https://openid.net/what-is-openid/
              </li>
              <li>
                Authorization - we know wooya are, now here's the things you can
                do and see.
              </li>
              <li>Authorization - OAuth 2.0 - https://oauth.net/2/</li>
              <li>
                OpenId Connect - the standard that connects the Authentication
                and Authorization standards.
              </li>
              <li>
                OIDC compliance is important - https://openid.net/connect/
              </li>
              <li>Custom claim names should be prefaced with a namespace</li>
              <li>Like this: https://foogaria.com/userId</li>
            </ul>
          </Notes>
        </Slide>

        <Slide transition={["zoom"]} bgColor="black" align="flex-start">
          <Heading size={1} fit caps lineHeight={1} textColor="brand0">
            Threat - Signature Stripping
          </Heading>
          <Text margin="10px 0 0" textColor="brand1" size={1} fit bold>
            What is it?
          </Text>
          <Text margin="10px 0 0" textColor="white" size={1} bold textAlign="left">
            It is possible to remove the signature and then change the header to
            claim the JWT is unsigned.
          </Text>
          <Text margin="10px 0 0" textColor="brand0" size={1} fit bold>
            What can we do?
          </Text>

          <Notes>
            <p>Notes:</p>
            <ul>
              <li>from "alg": "HS256"</li>
              <li>to "alg": "none"</li>
              <li>Don't accept unsigned tokens.</li>
            </ul>
          </Notes>
        </Slide>

       
       <Slide transition={["zoom"]} bgColor="black" align="flex-start">
          <Heading size={1} fit caps lineHeight={1} textColor="brand0">
            Threat - Cross-Site Request Forgery (CSRF)
            </Heading>
          <Text margin="10px 0 0" textColor="brand1" size={1} fit bold>
            What is it?
          </Text>
          <Text margin="10px 0 0" textColor="white" size={1} bold textAlign="left">
            Malicious code tricks the browser into sending a request from a
            different site.
          </Text>

          <Text margin="10px 0 0" textColor="brand0" size={1} fit bold>
            What can we do?
          </Text>
          <Notes>
            <p>Notes:</p>
            <ul>
              <li>Use short lived cookies, etc.</li>
            </ul>
          </Notes>
        </Slide>

        <Slide transition={["zoom"]} bgColor="black" align="flex-start">
          <Heading size={1} fit caps lineHeight={1} textColor="brand0">
            Threat - Cross-Site Scripting (XSS)
            </Heading>
          <Text margin="10px 0 0" textColor="brand1" size={1} fit bold>
            What is it?
          </Text>
          <Text margin="10px 0 0" textColor="white" size={1} bold textAlign="left">
            JavaScript can access the token if it is stored in the Browser's
            Local Storage.
          </Text>

          <Text margin="10px 0 0" textColor="brand0" size={1} fit bold>
            What can we do?
          </Text>
          <Notes>
            <p>Notes:</p>
            <ul>
              <li>Don't store the token in Local Storage.</li>
            </ul>
          </Notes>
        </Slide>

        <Slide transition={["zoom"]} bgColor="black" align="flex-start">
          <Heading size={1} fit caps lineHeight={1} textColor="brand0">
            Demo
          </Heading>
          <Text margin="10px 0 0" textColor="brand1" size={1} fit bold>
            Authentication:
          </Text>
          <List>
            <ListItem textColor="white" fit>
              Signup - New User
            </ListItem>
            <ListItem textColor="white" fit>
              Logout
            </ListItem>
            <ListItem textColor="white" fit>
              Login - Existing User
            </ListItem>
            <ListItem textColor="white" fit>
              Reset Password
            </ListItem>
          </List>

          <Notes>
            <p>Notes:</p>
            <ul>
              <li>Go thru each use case</li>
              <li>Permissions does not have link - url/permissions</li>
            </ul>
          </Notes>
        </Slide>

        <Slide transition={["zoom"]} bgColor="black" align="flex-start">
          <Heading size={1} fit caps lineHeight={1} textColor="brand0">
            Demo
          </Heading>

          <Text margin="10px 0 0" textColor="brand1" size={1} fit bold>
            Authorization:
          </Text>
          <List>
            <ListItem textColor="white" fit>
              Sell Item
            </ListItem>
            <ListItem textColor="white" fit>
              Set Permissions
            </ListItem>
          </List>
          <Notes>
            <p>Notes:</p>
            <ul>
              <li>Go thru each use case</li>
              <li>Permissions does not have link - url/permissions</li>
            </ul>
          </Notes>
        </Slide>

        <Slide transition={["zoom"]} bgColor="black" align="flex-start">
          <Heading size={1} fit caps lineHeight={1} textColor="brand0">
            Thanks
          </Heading>
          <Text margin="10px 0 0" textColor="brand1" size={1} fit bold>
            Let's go thru the code.
          </Text>

          <Notes>
            <p>Notes:</p>
            <ul>
              <li>Go thru each use case</li>
              <li>Permissions does not have link - url/permissions</li>
            </ul>
          </Notes>
        </Slide>
      </Deck>
    );
  }
}
