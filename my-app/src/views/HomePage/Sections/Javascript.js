import React from "react";
import Lightbox from "react-image-lightbox";

import "react-image-lightbox/style.css";

import { makeStyles } from "@material-ui/core/styles";

import "../../../assets/css/styles.css";

// material-ui components
import Divider from "@material-ui/core/Divider";

// components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Card from "../../../components/Card/Card.js";

import CardHeader from "../../../components/Card/CardHeader.js";
import Quote from "../../../components/Typography/Quote.js";

// Games
// import MemoryMatchButton from "./JavascriptGames/MemoryMatch/MemoryMatchButton.js";

import jsBlogBannerOne from "../../../assets/img/blog/jsBlogBannerOne.jpg";
import jsBlogBannerTwo from "../../../assets/img/blog/jsBlogBannerTwo.jpg";

import JsCert from "../../../assets/img/creds/JS-Cert-basic.jpg";
import JsBadge from "../../../assets/img/creds/JS-badge-complete.png";
import JqBadge from "../../../assets/img/creds/JQ-badge-complete.png";

import blogsStyle from "../../../assets/jss/material-kit-pro-react/views/sectionsSections/blogsStyle.js";
// import projectsStyle from "../../../assets/jss/material-kit-pro-react/views/sectionsSections/projectsStyle.js";

// const useStyles = makeStyles(blogsStyle);
// const useShowcaseStyles = makeStyles(showcaseStyles);
// const useTypoStyles = makeStyles(typoStyles);
// const useCarouselStyles = makeStyles(carouselStyle);
// const useProjectsStyles = makeStyles(projectsStyle);
const useStyles = makeStyles(blogsStyle);

const certImages = [JsBadge, JsCert, JqBadge];

export default function Javascript() {
  const [photoIndex, setPhotoIndex] = React.useState(0);
  const [certOpen, setCertOpen] = React.useState(false);

  // const typoClasses = useTypoStyles();
  // const carouselClasses = useCarouselStyles();
  // const projectClasses = useProjectsStyles();
  const classes = useStyles();

  return (
    <div>
      <br />
      <GridContainer justify="center">
        <GridItem xs={12} sm={4} md={4}>
          <CardHeader image plain>
            <div
              type="button"
              className={classes.mag}
              onClick={() => {
                setPhotoIndex(0);
                setCertOpen(true);
              }}
            >
              <img src={certImages[0]} alt="..." />
            </div>
            <div
              className={classes.coloredShadow}
              style={{
                backgroundImage: `url(${certImages[0]})`,
                opacity: "1",
              }}
            />
          </CardHeader>
        </GridItem>
        <GridItem xs={12} sm={4} md={4}>
          <CardHeader image plain>
            <div
              type="button"
              className={classes.mag}
              onClick={() => {
                setPhotoIndex(1);
                setCertOpen(true);
              }}
            >
              <img src={certImages[1]} alt="..." />
            </div>
            <div
              className={classes.coloredShadow}
              style={{
                backgroundImage: `url(${certImages[1]})`,
                opacity: "1",
              }}
            />
          </CardHeader>
        </GridItem>
        <GridItem xs={12} sm={4} md={4}>
          <CardHeader image plain>
            <div
              type="button"
              className={classes.mag}
              onClick={() => {
                setPhotoIndex(2);
                setCertOpen(true);
              }}
            >
              <img src={certImages[2]} alt="..." />
            </div>
            <div
              className={classes.coloredShadow}
              style={{
                backgroundImage: `url(${certImages[2]})`,
                opacity: "1",
              }}
            />
          </CardHeader>
        </GridItem>
        {certOpen && (
          <Lightbox
            mainSrc={certImages[photoIndex]}
            nextSrc={certImages[(photoIndex + 1) % certImages.length]}
            prevSrc={
              certImages[
                (photoIndex + certImages.length - 1) % certImages.length
              ]
            }
            onCloseRequest={() => setCertOpen(false)}
            onMovePrevRequest={() =>
              setPhotoIndex(
                (photoIndex + certImages.length - 1) % certImages.length
              )
            }
            onMoveNextRequest={() =>
              setPhotoIndex((photoIndex + 1) % certImages.length)
            }
          />
        )}
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
      {/* <hr />
        <MemoryMatchButton />
      <hr /> */}
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
      <Divider variant="middle" />
    </div>
  );
}
