import React from "react";
// import Carousel from "react-slick";

import { makeStyles } from "@material-ui/core/styles";

import "../../../assets/css/styles.css";

// material-ui components
import Code from "@material-ui/icons/Code";
import Group from "@material-ui/icons/Group";
import Divider from "@material-ui/core/Divider";
import Ballot from "@material-ui/icons/Ballot";
import Flare from "@material-ui/icons/Flare";

// import MuiDialogTitle from "@material-ui/core/DialogTitle";
// import IconButton from "@material-ui/core/IconButton";
// import CloseIcon from "@material-ui/icons/Close";
// import Typography from "@material-ui/core/Typography";
// import FormatPaint from "@material-ui/icons/FormatPaint";
// import Dashboard from "@material-ui/icons/Dashboard";
// import Timeline from "@material-ui/icons/Timeline";

// components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Card from "../../../components/Card/Card.js";
import CardBody from "../../../components/Card/CardBody.js";
import Badge from "../../../components/Badge/Badge.js";
import InfoArea from "../../../components/InfoArea/InfoArea.js";

import CardHeader from "../../../components/Card/CardHeader.js";
import Quote from "../../../components/Typography/Quote.js";

// images and icons
// import CppCert from "../../../assets/img/creds/CodecademyCert.jpg";
// import CppBlogBannerOne from "../../../assets/img/blog/CppBlogBannerOne.png";
// import CppBlogBannerTwo from "../../../assets/img/blog/CppBlogBannerTwo.png";
import jsBlogBannerOne from "../../../assets/img/blog/jsBlogBannerOne.jpg";
import jsBlogBannerTwo from "../../../assets/img/blog/jsBlogBannerTwo.jpg";

import JsCert from "../../../assets/img/creds/JS-Cert-basic.jpg";
import JsBadge from "../../../assets/img/creds/JS-badge-complete.png";
import JqBadge from "../../../assets/img/creds/JQ-badge-complete.png";
import OOYAone from "../../../assets/img/projects/ooyaGifOne.webp";
import RPSLS from "../../../assets/img/projects/RPSLS.webp";
import ticTacToe from "../../../assets/img/projects/Tic-tac-toe-animated.gif";

// import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
// import breakawayStyles from "../../../assets/jss/material-kit-react/views/componentsSections/breakawayStyle.js";
// import showcaseStyles from "../../../assets/jss/material-kit-react/views/profilePage.js";
// import carouselStyle from "../../../assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";
// import typoStyles from "../../../assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";
import blogsStyle from "../../../assets/jss/material-kit-pro-react/views/sectionsSections/blogsStyle.js";
import projectsStyle from "../../../assets/jss/material-kit-pro-react/views/sectionsSections/projectsStyle.js";

// const useStyles = makeStyles(blogsStyle);
// const useShowcaseStyles = makeStyles(showcaseStyles);
// const useTypoStyles = makeStyles(typoStyles);
// const useCarouselStyles = makeStyles(carouselStyle);
const useStyles = makeStyles(blogsStyle);
const useProjectsStyles = makeStyles(projectsStyle);

export default function Javascript() {
  // const typoClasses = useTypoStyles();
  // const carouselClasses = useCarouselStyles();
  const classes = useStyles();
  const projectClasses = useProjectsStyles();

  return (
    <div>
      <br />
      <GridContainer justify="center">
        <GridItem xs={12} sm={4} md={4}>
          <CardHeader image plain>
            <img src={JsBadge} alt="..." />

            <div
              className={classes.coloredShadow}
              style={{
                backgroundImage: `url(${JsCert})`,
                opacity: "1",
              }}
            />
          </CardHeader>
          
        </GridItem>
        <GridItem xs={12} sm={4} md={4}>
          <CardHeader image plain>
            <img src={JsCert} alt="..." />

            <div
              className={classes.coloredShadow}
              style={{
                backgroundImage: `url(${JsCert})`,
                opacity: "1",
              }}
            />
          </CardHeader>
          
        </GridItem>
        <GridItem xs={12} sm={4} md={4}>
          <CardHeader image plain>
            <img src={JqBadge} alt="..." />

            <div
              className={classes.coloredShadow}
              style={{
                backgroundImage: `url(${JsCert})`,
                opacity: "1",
              }}
            />
          </CardHeader>
          
        </GridItem>
      </GridContainer>
      <br />
      <br />
      <br />
      <hr />
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={14}>
          <Quote
            text="“You’re building your own maze, in a way, and you might just get lost in it.”"
            author="Marijn Haverbeke, Eloquent JavaScript: A Modern Introduction to Programming"
          />
        </GridItem>
      </GridContainer>
      <hr />
      {/* Blogs START */}
      <div className={classes.blog}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={10}
              md={10}
              className={classes.mlAuto + " " + classes.mrAuto}
            >
              <h2 className={classes.title}>Blogposts</h2>
              <Card plain blog className={classes.card}>
                <GridContainer>
                  <GridItem xs={12} sm={5} md={5}>
                    <CardHeader image plain>
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://dev.to/jerrymcdonald/c-variables-functions-conditionals-and-logic-in-vscode-2mpk"
                      >
                        <img src={jsBlogBannerOne} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${jsBlogBannerOne})`,
                          opacity: "1",
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={7} md={7}>
                    <h3 className={classes.cardTitle}>
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://dev.to/jerrymcdonald/javascript-object-construction-and-inheritance-2gkp"
                      >
                        Javascript object construction and inheritance
                      </a>
                    </h3>
                    <p className={classes.description1}>
                      The prototype property is put into Javascript functions by
                      default, and a developer can add even more properties or
                      methods to it. If you use the 'said' process to construct
                      an object, that object can 'inherit' the object's parent
                      function's properties and methods. This process is called
                      Prototype inheritance.
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://dev.to/jerrymcdonald/javascript-object-construction-and-inheritance-2gkp"
                      >
                        {" "}
                        Read More{" "}
                      </a>
                    </p>
                  </GridItem>
                </GridContainer>
              </Card>
              <Card
                plain
                blog
                className={classes.card}
                style={{ marginBottom: "0px" }}
              >
                <GridContainer>
                  <GridItem xs={12} sm={7} md={7}>
                    <h3 className={classes.cardTitle}>
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://dev.to/jerrymcdonald/create-a-c-program-run-in-visual-studio-code-58ea"
                      >
                        How socket.io interacts with node.js in a WebRTC
                        application.{" "}
                      </a>
                    </h3>
                    <p className={classes.description1}>
                      Are you building an application that will utilize webRTC
                      for real-time communication features? If so, and you have
                      a node.js environment in the back end of your application,
                      you will likely want to use Socket.io to create
                      connections.
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://dev.to/jerrymcdonald/how-socket-io-interacts-with-node-js-in-a-webrtc-application-3f8p"
                      >
                        {" "}
                        Read More{" "}
                      </a>
                    </p>
                  </GridItem>
                  <GridItem xs={12} sm={5} md={5}>
                    <CardHeader image plain>
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://dev.to/jerrymcdonald/how-socket-io-interacts-with-node-js-in-a-webrtc-application-3f8p"
                      >
                        <img src={jsBlogBannerTwo} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${jsBlogBannerTwo})`,
                          opacity: "1",
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Blogs END */}
      <hr />
      {/* Project START */}
      {/* <div className={projectClasses.projects + " " + projectClasses.projects4}>
        <div className={projectClasses.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={
                projectClasses.mlAuto +
                " " +
                projectClasses.mrAuto +
                " " +
                projectClasses.textCenter
              }
            >
              <h2 className={projectClasses.title}>C++ Applicaitons</h2>
              <h5 className={projectClasses.description}>
                This is the paragraph where you can write more details about
                your projects. Keep you user engaged by providing meaningful
                information.
              </h5>
              <div className={projectClasses.sectionSpace} />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={5} md={5} className={projectClasses.mlAuto}>
              <Card
                background
                className={projectClasses.card4}
                style={{ backgroundImage: `url(${OOYAone})` }}
              >
                <CardBody background className={projectClasses.cardBody4}>
                  <br />
                  <br />
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://github.com/JerryMcDonald/cpp-projects/tree/master/OOYA"
                  >
                    <Badge color="primary">View Repo</Badge>
                  </a>
                  <h3 className={projectClasses.cardTitle}>
                    The Object Of Your Affection
                  </h3>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={5} md={5} className={projectClasses.mrAuto}>
              <InfoArea
                className={projectClasses.info4}
                title="Summary"
                description="A well-organized system of dating profiles built with C++ Objects and Classes allows users to view and create profile cards."
                icon={Ballot}
                iconColor="primary"
              />
              <InfoArea
                className={projectClasses.info4}
                title="Key Concepts"
                description="A C++ constructor to instantiate new profile objects and C++ Vectors allows for organized user hobbies that can be modified."
                icon={Code}
                iconColor="danger"
              />
            </GridItem>
          </GridContainer>
          <hr />
          <GridContainer>
            <GridItem xs={12} sm={5} md={5} className={projectClasses.mlAuto}>
              <InfoArea
                className={projectClasses.info4}
                title="Summary"
                description="A Traditional 2-player tic-tac-toe game on a 3x3 grid in the terminal."
                icon={Ballot}
                iconColor="success"
              />
              <InfoArea
                className={projectClasses.info4}
                title="Key Concepts"
                description="Makes excellent use of a header file to organize function declarations and uses C++ logic and conditionals to determine a winner."
                icon={Code}
                iconColor="info"
              />
            </GridItem>
            <GridItem xs={12} sm={5} md={5} className={projectClasses.mrAuto}>
            <Card
                background
                className={projectClasses.card4}
                style={{ backgroundImage: `url(${ticTacToe})` }}
              >
                <CardBody background className={projectClasses.cardBody4}>
                  <br />
                  <br />
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://github.com/JerryMcDonald/cpp-projects/tree/master/TTT"
                  >
                    <Badge color="primary">View Repo</Badge>
                  </a>
                  <h3 className={projectClasses.cardTitle}>
                    The Object Of Your Affection
                  </h3>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
          <hr />
          <GridContainer>
            <GridItem xs={12} sm={5} md={5} className={projectClasses.mlAuto}>
              <Card
                background
                className={projectClasses.card4}
                style={{ backgroundImage: `url(${RPSLS})` }}
              >
                <CardBody background className={projectClasses.cardBody4}>
                  <br />
                  <br />
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://github.com/JerryMcDonald/cpp-projects/tree/master/RPSLS"
                  >
                    <Badge color="primary">View Repo</Badge>
                  </a>
                  <h3 className={projectClasses.cardTitle}>
                    The Object Of Your Affection
                  </h3>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={5} md={5} className={projectClasses.mrAuto}>
              <InfoArea
                className={projectClasses.info4}
                title="Summary"
                description="Sheldons favorite way handle a dispute"
                icon={Flare}
                iconColor="primary"
              />
              <InfoArea
                className={projectClasses.info4}
                title="Key Concepts"
                description="I use the computer's internal clock to create a seed for the random number generator algorithm, allowing for code to generate a random response. "
                icon={Code}
                iconColor="danger"
              />
            </GridItem>
          </GridContainer>
        </div>
      </div> */}
      {/* Projects END */}
      <Divider variant="middle" />
    </div>
  );
}
