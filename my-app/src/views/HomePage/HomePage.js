import React, { useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Button from "../../components/CustomButtons/Button.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import Parallax from "../../components/Parallax/Parallax.js";

import styles from "../../assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import WebpageShowcase from "./Sections/WebpageShowcase.js";
import Resume from "./Sections/Resume.js";
import TeamSection from "./Sections/TeamSection.js";
import WorkSection from "./Sections/WorkSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function HomePage(props) {
  const [clickResume, setClickResume] = useState(false);
  const classes = useStyles();
  const { ...rest } = props;
  const resumeClick = () => {
    setClickResume(!clickResume);
  };
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Jerry McDonald"
        rightLinks={<HeaderLinks resumeClick={resumeClick} />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax filter image={require("../../assets/img/bg3.jpg")}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <p style={{ paddingLeft: 150, fontSize: 35, lineHeight: 2 }}>
                Hi{" "}
                <span role="img" aria-label="sheep">
                  👋
                </span>{" "}
                I'm Jerry{" "}
              </p>

              <p style={{ paddingLeft: 10, fontSize: 25 }}>
                {" "}
                Mr. Positive || Problem Solver || Coder || Dad{" "}
              </p>
              {/* <h1>This is my portfolio</h1> */}

              {/* <Button
              
                color="danger"
                size="lg"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                Watch video
              </Button> */}
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          {clickResume ? <Resume /> : <WebpageShowcase />}
          {/* <TeamSection /> */}
          {/* <WorkSection /> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
