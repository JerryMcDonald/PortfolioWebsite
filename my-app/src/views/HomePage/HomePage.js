import React, { useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "../../components/Header/Header.js";
// import Footer from "../../components/Footer/Footer.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Button from "../../components/CustomButtons/Button.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import Parallax from "../../components/Parallax/Parallax.js";

import styles from "../../assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import WebpageShowcase from "./Sections/WebpageShowcase.js";
import SectionDownload from "./Sections/SectionDownload.js";
// import Resume from "./Sections/Resume.js";
import Contact from "./Sections/Contact.js";
import About from "./Sections/About.js";

// import TeamSection from "./Sections/TeamSection.js";
// import WorkSection from "./Sections/WorkSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function HomePage(props) {
  const [clickShowcase, setClickShowcase] = useState(true);
  const [clickAbout, setClickAbout] = useState(false);
  const [clickContact, setClickContact] = useState(false);

  const classes = useStyles();
  const { ...rest } = props;

  const showcaseClick = () => {
    setClickShowcase(true);
    setClickAbout(false);
    setClickContact(false);
  };

  const aboutClick = () => {
    setClickAbout(true);
    setClickContact(false);
    setClickShowcase(false);
  };

  const contactClick = () => {
    setClickContact(true);
    setClickAbout(false);
    setClickShowcase(false);
  };

  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Jerry McDonald"
        rightLinks={
          <HeaderLinks
            showcaseClick={showcaseClick}
            aboutClick={aboutClick}
            contactClick={contactClick}
          />
        }
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      {!clickContact ? (
        <div>
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

                  <p style={{ paddingLeft: 94, fontSize: 25 }}>
                    {" "}
                    Problem Solver || Coder || Dad{" "}
                  </p>
                  {/* <Button color="twitter">
                    <i className={classes.socials + " fab fa-twitter"} /> Tweet
                  </Button>
                  <Button color="facebook">
                    <i
                      className={classes.socials + " fab fa-facebook-square"}
                    />{" "}
                    Share
                  </Button>
                  <Button color="google">
                    <i className={classes.socials + " fab fa-google-plus-g"} />
                    Share
                  </Button> */}
                </GridItem>
              </GridContainer>
              <GridContainer justify="center">
                <GridItem style={{ paddingLeft: 150 }} xs={12} sm={12} md={6}>
                  <Button color="github" target="_blank" href="https://github.com/JerryMcDonald">
                    <i className={classes.socials + " fab fa-github"} /> Github
                  </Button>
                  <Button color="linkedIn" target="_blank" href="https://www.linkedin.com/in/jerry-mcdonald-2089891b3/">
                    <i className={classes.socials + " fab fa-linkedin"} />{" "}
                    LinkedIN
                  </Button>
                </GridItem>
              </GridContainer>
            </div>
          </Parallax>
          <div className={classNames(classes.main, classes.mainRaised)}>
            <div className={classes.container}>
              {clickShowcase ? <WebpageShowcase /> : null}
              {clickAbout ? <About /> : null}
              {/* {clickContact ? <Contact /> : null} */}
              {/* <SectionDownload /> */}
              {/* {showCard} */}
              {/* <WebpageShowcase /> */}
              {/* {clickContact ? <Contact /> } */}
              {/* <TeamSection /> */}
              {/* <WorkSection /> */}
            </div>
          </div>
          {/* <Footer /> */}
        </div>
      ) : (
        <Contact />
      )}
    </div>
  );
}
