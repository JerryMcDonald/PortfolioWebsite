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
import CppBlogBannerOne from "../../../assets/img/blog/CppBlogBannerOne.png";
import CppBlogBannerTwo from "../../../assets/img/blog/CppBlogBannerTwo.png";
import CppCert from "../../../assets/img/creds/CodecademyCert.jpg";
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

export default function Cpp() {
  // const typoClasses = useTypoStyles();
  // const carouselClasses = useCarouselStyles();
  const classes = useStyles();
  const projectClasses = useProjectsStyles();

  return (
    <div>
      <br />
      <GridContainer justify="center">
        <GridItem xs={12} sm={5} md={5}>
          <CardHeader image plain>
            <img src={CppCert} alt="..." />

            <div
              className={classes.coloredShadow}
              style={{
                backgroundImage: `url(${CppCert})`,
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
            text="“C++ is designed to allow you to express ideas, but if you don't have ideas or don't have any clue about how to express them, C++ doesn't offer much help.”"
            author=" Bjarne Stroustrup"
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
                        <img src={CppBlogBannerTwo} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${CppBlogBannerTwo})`,
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
                        href="https://dev.to/jerrymcdonald/c-variables-functions-conditionals-and-logic-in-vscode-2mpk"
                      >
                        C++ Variables, Functions, Conditionals, and Logic. In
                        VSCode.
                      </a>
                    </h3>
                    <p className={classes.description1}>
                      In this series, I am reviewing the C++ basics, primarily
                      for those who already understand a coding language and are
                      curious about what makes C++ different.
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://dev.to/jerrymcdonald/c-variables-functions-conditionals-and-logic-in-vscode-2mpk"
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
                        Create a C++ program. Run in Visual Studio Code.{" "}
                      </a>
                    </h3>
                    <p className={classes.description1}>
                      Do you think that C++ is too old school to learn? Think
                      again! It is still a highly sought after skill. Learning
                      C++ will better prepare you for learning C# and give you a
                      broader skill set!
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://dev.to/jerrymcdonald/create-a-c-program-run-in-visual-studio-code-58ea"
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
                        href="https://dev.to/jerrymcdonald/create-a-c-program-run-in-visual-studio-code-58ea"
                      >
                        <img src={CppBlogBannerOne} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${CppBlogBannerOne})`,
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
      <div className={projectClasses.projects + " " + projectClasses.projects4}>
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
      </div>
      {/* Projects END */}
      <Divider variant="middle" />
    </div>
  );
}
