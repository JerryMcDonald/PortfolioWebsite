import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import "../../../assets/css/styles.css";

import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Info from "../../../components/Typography/Info.js";

// my images and icons
import operationSpark from "../../../assets/img/OPSparkLogo.png";
import Crawl from "../../../assets/img/Crawl.jpg";
import crawlCrop from "../../../assets/img/showcase/crawlCrop.png";
import crawlLogo from "../../../assets/img/showcase/crawlLogo.png";


// images

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import typoStyles from "../../../assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";
import showcaseStyles from "../../../assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);
const useTypoStyles = makeStyles(typoStyles);
const useShowcaseStyles = makeStyles(showcaseStyles);

export default function OperationSpark() {
  const typoClasses = useTypoStyles();

  return (
    <div>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={16}>
          <img alt=".." src={operationSpark} />
          <div className={typoClasses.section}>
            <div className={typoClasses.typo} style={{ paddingLeft: 0 }}>
              <Info>
                <p style={{ color: "gray" }}>
                  Operation Spark is a coding Bootcamp in New Orleans,
                  Louisiana. There are three phases of the course: prep,
                  bootcamp, and immersion. You begin by being introduced to
                  javascript, then strengthen your skills through coding
                  challenges and projects. You transition to front end web
                  development using HTML, CSS, React, and Vue, then to back-end
                  API services like Node.js, and finally database management
                  with MySQL and MongoDB. At the end of the program, they pair
                  you into groups with the task of building webpages, programs,
                  or games with technologies of your choosing. I am proud to
                  have completed OPSpark, and I would be happy to talk with
                  anyone considering the program. Just send me a message!
                </p>
              </Info>
            </div>
          </div>
          <div>
            <p style={{ color: "black" }}>
              Here are the three webpages my team and I completed during
              Operation Spark.
            </p>
          </div>
        </GridItem>
      </GridContainer>
    </div>
  );
}
