import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// import SvgIcon from '@material-ui/core/SvgIcon';
// import Icon from '@material-ui/core/Icon';

// @fortawesome library
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

// nodejs library that concatenates classes
import classNames from "classnames";

import OperationSpark from "../Sections/OperationSpark.js";

// @material-ui/icons
import Button from "../../../components/CustomButtons/Button.js";
// import Chat from "@material-ui/icons/Chat";
// import VerifiedUser from "@material-ui/icons/VerifiedUser";
// import Fingerprint from "@material-ui/icons/Fingerprint";
// import Camera from "@material-ui/icons/Camera";
// import CellWifiOutlined from "@material-ui/icons/CellWifiOutlined";
// import Code from "@material-ui/icons/Code";
import "../../../assets/css/styles.css";

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
// import InfoArea from "../../../components/InfoArea/InfoArea.js";
import NavPills from "../../../components/NavPills/NavPills.js";
import Info from "../../../components/Typography/Info.js";

// my images and icons
// import operationSparkSVG from "../../../assets/img/icons/operationSparkSVG.svg";
import operationSpark from "../../../assets/img/OPSparkLogo.png";
import Crawl from "../../../assets/img/Crawl.jpg";
import crawlCrop from "../../../assets/img/showcase/crawlCrop.png";
import crawlLogo from "../../../assets/img/showcase/crawlLogo.png";
// import CSharp from "../../../assets/img/icons/CSharp.png";

// images
// import studio1 from "../../../assets/img/examples/studio-1.jpg";
import studio2 from "../../../assets/img/examples/studio-2.jpg";
// import studio3 from "../../../assets/img/examples/studio-3.jpg";
// import studio4 from "../../../assets/img/examples/studio-4.jpg";
import studio5 from "../../../assets/img/examples/studio-5.jpg";
import dotNetCore from "../../../assets/img/icons/dotNetCore.png";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

// bring in typography style
import typoStyles from "../../../assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";
// bring in icon style
// import iconStyles from "../../../assets/jss/material-kit-react/views/componentsSections/downloadStyle.js";

import showcaseStyles from "../../../assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);
const useTypoStyles = makeStyles(typoStyles);
// const useIconStyles = makeStyles(iconStyles);
const useShowcaseStyles = makeStyles(showcaseStyles);

export default function WebpageShowcase() {
  const classes = useStyles();
  const typoClasses = useTypoStyles();
  // const iconClasses = useIconStyles();
  const showcaseClasses = useShowcaseStyles();

  const navImageClasses = classNames(
    showcaseClasses.imgRounded,
    showcaseClasses.imgGallery
  );

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          {/* <h2 className={classes.title}>Showcase</h2> */}
          {/* <h5 className={classes.description}>cx
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
                  tabButton: (
                    <span style={{ fontSize: 40 }}>
                      <i className="fas fa-robot"></i>
                      {/* <img alt=".." className="photo" src={crawlLogo} /> */}
                    </span>
                  ),
                  // tabIcon: Code,
                  tabContent: (
                    <div>
                      <OperationSpark />
                    </div>
                  ),
                },
              ]}
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
