import React from "react";
// import Carousel from "react-slick";

import { makeStyles } from "@material-ui/core/styles";

import "../../../assets/css/styles.css";

// material-ui components
// import MuiDialogTitle from "@material-ui/core/DialogTitle";
// import IconButton from "@material-ui/core/IconButton";
// import CloseIcon from "@material-ui/icons/Close";
// import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import FormatPaint from "@material-ui/icons/FormatPaint";
import Code from "@material-ui/icons/Code";
import Dashboard from "@material-ui/icons/Dashboard";
import Timeline from "@material-ui/icons/Timeline";
import Group from "@material-ui/icons/Group";

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
      <hr />
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={16}>
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
              <br />
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
              <Card plain blog className={classes.card}>
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
              <h2 className={projectClasses.title}>
                Some of Our Awesome Products - 4
              </h2>
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
                style={{ backgroundImage: `url(${CppBlogBannerOne})` }}
              >
                <CardBody background className={projectClasses.cardBody4}>
                  <Badge color="rose">Client: Apple</Badge>
                  <a href="#pablo" onClick={(e) => e.preventDefault}>
                    <h3 className={projectClasses.cardTitle}>
                      Beautiful Project
                    </h3>
                    <p className={projectClasses.cardDescription}>
                      Don{"'"}t be scared of the truth because we need to
                      restart the human foundation in truth.
                    </p>
                  </a>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={5} md={5} className={projectClasses.mrAuto}>
              <InfoArea
                className={projectClasses.info4}
                title="Graphic Design"
                description="We've created the design of the website using modern Technologies like Sketch. It was a very interesting collaboration."
                icon={FormatPaint}
                iconColor="info"
              />
              <InfoArea
                className={projectClasses.info4}
                title="Fully Coded in HTML5"
                description="We've developed the website with HTML5 and CSS3. The client has access to the code using GitHub."
                icon={Code}
                iconColor="primary"
              />
              <InfoArea
                className={projectClasses.info4}
                title="CMS Admin Dashboard"
                description="There is also a Fully Customizable CMS Admin Dashboard for this product."
                icon={Dashboard}
                iconColor="danger"
              />
            </GridItem>
          </GridContainer>
          <hr />
          <GridContainer>
            <GridItem xs={12} sm={5} md={5} className={projectClasses.mlAuto}>
              <InfoArea
                className={projectClasses.info4}
                title="Marketing"
                description="We've created the marketing campaign of the website. It was a very interesting collaboration."
                icon={Timeline}
                iconColor="rose"
              />
              <InfoArea
                className={projectClasses.info4}
                title="Fully Coded in HTML5"
                description="We've developed the website with HTML5 and CSS3. The client has access to the code using GitHub."
                icon={Code}
                iconColor="success"
              />
              <InfoArea
                className={projectClasses.info4}
                title="Built Audience"
                description="There is also a Fully Customizable CMS Admin Dashboard for this product."
                icon={Group}
                iconColor="info"
              />
            </GridItem>
            <GridItem xs={12} sm={5} md={5} className={projectClasses.mrAuto}>
              <Card
                background
                className={projectClasses.card4}
                style={{ backgroundImage: `url(${CppBlogBannerOne})` }}
              >
                <CardBody background className={projectClasses.cardBody4}>
                  <Badge color="rose">CLIENT: DJ KHALED</Badge>
                  <a href="#pablo" onClick={(e) => e.preventDefault}>
                    <h3 className={projectClasses.cardTitle}>Another One</h3>
                    <p className={projectClasses.cardDescription}>
                      Don{"'"}t be scared of the truth because we need to
                      restart the human foundation in truth.
                    </p>
                  </a>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Projects END */}
      <Divider variant="middle" />
    </div>
  );
}
