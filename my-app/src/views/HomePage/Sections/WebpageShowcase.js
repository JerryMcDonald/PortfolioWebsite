import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// import SvgIcon from '@material-ui/core/SvgIcon';
// import Icon from '@material-ui/core/Icon';

// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/icons
// import Chat from "@material-ui/icons/Chat";
// import VerifiedUser from "@material-ui/icons/VerifiedUser";
// import Fingerprint from "@material-ui/icons/Fingerprint";
// import Camera from "@material-ui/icons/Camera";
// import CellWifiOutlined from "@material-ui/icons/CellWifiOutlined";
import Code from "@material-ui/icons/Code";

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
// import InfoArea from "../../../components/InfoArea/InfoArea.js";
import NavPills from "../../../components/NavPills/NavPills.js";
import Info from "../../../components/Typography/Info.js";

// my images and icons
// import operationSparkSVG from "../../../assets/img/icons/operationSparkSVG.svg";
import operationSpark from "../../../assets/img/operationSpark.png";

// images
// import studio1 from "../../../assets/img/examples/studio-1.jpg";
import studio2 from "../../../assets/img/examples/studio-2.jpg";
// import studio3 from "../../../assets/img/examples/studio-3.jpg";
// import studio4 from "../../../assets/img/examples/studio-4.jpg";
import studio5 from "../../../assets/img/examples/studio-5.jpg";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

// bring in typography style
import typoStyles from "../../../assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";

import showcaseStyles from "../../../assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);
const useTypoStyles = makeStyles(typoStyles);

const useShowcaseStyles = makeStyles(showcaseStyles);

export default function WebpageShowcase() {
  const classes = useStyles();
  const typoClasses = useTypoStyles();

  const showcaseClasses = useShowcaseStyles();

  const navImageClasses = classNames(
    showcaseClasses.imgRounded,
    showcaseClasses.imgGallery
  );

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Showcase</h2>
          {/* <h5 className={classes.description}>
            I will have large image icons that will showcase the work that I
            completed in Bootcamp, and later I will showcase my work with
            C#/.Net
          </h5> */}
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
            <NavPills
              alignCenter
              color="rose"
              tabs={[
                {
                  tabButton: <img alt=".." src={operationSpark} />,
                  // tabIcon: Code,
                  tabContent: (
                    <div>
                      <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={16}>
                          <img alt=".." src={operationSpark} />
                          <div className={typoClasses.section}>
                            <div
                              className={typoClasses.typo}
                              style={{ paddingLeft: 0 }}
                            >
                              <Info>
                                <p style={{ color: "gray" }}>
                                  Operation Spark is a coding Bootcamp in New
                                  Orleans, Louisiana. There are three phases of
                                  the course: prep, bootcamp, and immersion. You
                                  begin by being introduced to javascript, then
                                  strengthen your skills through coding
                                  challenges and projects. You transition to
                                  front end web development using HTML, CSS,
                                  React, and Vue, then to back-end API services
                                  like Node.js, and finally database management
                                  with MySQL and MongoDB. At the end of the
                                  program, they pair you into groups with the
                                  task of building webpages, programs, or games
                                  with technologies of your choosing. I am proud
                                  to have completed OPSpark, and I would be
                                  happy to talk with anyone considering the
                                  program. Just send me a message!
                                </p>
                              </Info>
                            </div>
                          </div>
                          <div>
                            <p style={{ color: "black" }}>
                              Here are the three webpages my team and I
                              completed during Operation Spark.
                            </p>
                          </div>
                        </GridItem>
                      </GridContainer>
                      <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={4}>
                          <img
                            alt="..."
                            src={studio2}
                            className={navImageClasses}
                          />
                          {/* <img
                              alt="..."
                              src={studio2}
                              className={navImageClasses}
                            /> */}
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4}>
                          <img
                            alt="..."
                            src={studio5}
                            className={navImageClasses}
                          />
                          {/* <img
                              alt="..."
                              src={studio4}
                              className={navImageClasses}
                            /> */}
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4}>
                          <img
                            alt="..."
                            src={studio5}
                            className={navImageClasses}
                          />
                          {/* <img
                              alt="..."
                              src={studio4}
                              className={navImageClasses}
                            /> */}
                        </GridItem>
                      </GridContainer>
                    </div>
                  ),
                },
              ]}
            />
          </GridItem>
        </GridContainer>
        {/* </div>
          </div> */}
        {/* <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="LRN"
              // description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={Chat}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Crawl"
              // description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Organize Power"
              // description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={Fingerprint}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer> */}
      </div>
    </div>
  );
}
