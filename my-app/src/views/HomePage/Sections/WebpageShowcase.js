import React from "react";

// nodejs library that concatenates classes
// import classNames from "classnames";

import "../../../assets/css/styles.css";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
// import SvgIcon from '@material-ui/core/SvgIcon';
// import Icon from '@material-ui/core/Icon';

// @fortawesome library
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";

import OperationSpark from "../Sections/OperationSpark.js";
import Cpp from "../Sections/Cpp.js";
import Javascript from "../Sections/Javascript.js";

// @material-ui/icons
// import Button from "../../../components/CustomButtons/Button.js";
// import Chat from "@material-ui/icons/Chat";
// import VerifiedUser from "@material-ui/icons/VerifiedUser";
// import Fingerprint from "@material-ui/icons/Fingerprint";
// import Camera from "@material-ui/icons/Camera";
// import CellWifiOutlined from "@material-ui/icons/CellWifiOutlined";
// import Code from "@material-ui/icons/Code";
// import CSharp from "../../../assets/img/icons/CSharp.png";
import CppIcon from "../../../assets/img/icons/C++_Icon.png";
import JsIcon from "../../../assets/img/icons/JS.png";

// core components
// import Info from "../../../components/Typography/Info.js";
// import InfoArea from "../../../components/InfoArea/InfoArea.js";
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import NavPills from "../../../components/NavPills/NavPills.js";

// my images and icons
// import operationSparkSVG from "../../../assets/img/icons/operationSparkSVG.svg";
// import operationSpark from "../../../assets/img/OPSparkLogo.png";
// import Crawl from "../../../assets/img/Crawl.jpg";
// import crawlLogo from "../../../assets/img/showcase/crawlLogo.png";
// import crawlCrop from "../../../assets/img/showcase/crawlCrop.png";
// import CSharp from "../../../assets/img/icons/CSharp.png";
// import studio1 from "../../../assets/img/examples/studio-1.jpg";
// import studio2 from "../../../assets/img/examples/studio-2.jpg";
// import studio3 from "../../../assets/img/examples/studio-3.jpg";
// import studio4 from "../../../assets/img/examples/studio-4.jpg";
// import studio5 from "../../../assets/img/examples/studio-5.jpg";
// import dotNetCore from "../../../assets/img/icons/dotNetCore.png";

// styles
// import iconStyles from "../../../assets/jss/material-kit-react/views/componentsSections/downloadStyle.js";
// import typoStyles from "../../../assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";
// import showcaseStyles from "../../../assets/jss/material-kit-react/views/profilePage.js";
import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

// const useTypoStyles = makeStyles(typoStyles);
// const useIconStyles = makeStyles(iconStyles);
// const useShowcaseStyles = makeStyles(showcaseStyles);
const useStyles = makeStyles(styles);
const useStyles2 = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function WebpageShowcase() {
  // const typoClasses = useTypoStyles();
  // const iconClasses = useIconStyles();
  const classes = useStyles();
  const iconClasses = useStyles2();

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
          <GridItem xs={18} sm={18} md={10} className={classes.navWrapper}>
            <NavPills
              alignCenter
              color="primary"
              tabs={[
                {
                  tabButton: (
                    <div className={iconClasses.root}>
                      <Avatar
                        variant="square"
                        className={classes.square}
                        src={JsIcon}
                        title="JS"
                      />
                    </div>
                  ),
                  // tabIcon: Code,
                  tabContent: (
                    <div>
                      <Javascript />
                    </div>
                  ),
                },
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
                {
                  tabButton: (
                    <div className={iconClasses.root}>
                      <Avatar
                        variant="square"
                        className={classes.square}
                        src={CppIcon}
                        title="C#"
                      />
                    </div>
                  ),
                  // tabIcon: Code,
                  tabContent: (
                    <div>
                      <Cpp />
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
