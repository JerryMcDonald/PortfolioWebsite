import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
import Camera from "@material-ui/icons/Camera";

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import InfoArea from "../../../components/InfoArea/InfoArea.js";
import NavPills from "../../../components/NavPills/NavPills.js";

// images
import studio1 from "../../../assets/img/examples/studio-1.jpg";
import studio2 from "../../../assets/img/examples/studio-2.jpg";
import studio3 from "../../../assets/img/examples/studio-3.jpg";
import studio4 from "../../../assets/img/examples/studio-4.jpg";
import studio5 from "../../../assets/img/examples/studio-5.jpg";


import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

import showcaseStyles from "../../../assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles); 

const useShowcaseStyles = makeStyles(showcaseStyles);

export default function WebpageShowcase() {
  const classes = useStyles();
  const showcaseClasses = useShowcaseStyles();

  const navImageClasses = classNames(showcaseClasses.imgRounded, showcaseClasses.imgGallery);

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Showcase my work</h2>
          <h5 className={classes.description}>
            I will have large image icons that will showcase the work that I
            completed in Bootcamp, and later I will showcase my work with
            C#/.Net
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "Studio",
                      tabIcon: Camera,
                      tabContent: (
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
                        </GridContainer>
                      )
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
