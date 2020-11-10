import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Avatar from '@material-ui/core/Avatar';

// @material-ui/icons
// import Camera from "@material-ui/icons/Camera";
// import Palette from "@material-ui/icons/Palette";
// import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import Button from "../../components/CustomButtons/Button.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import NavPills from "../../components/NavPills/NavPills.js";
import Parallax from "../../components/Parallax/Parallax.js";

import profile from "../../assets/img/avatar-jerry.jpg";

import js from "../../assets/img/icons/JS.png";
import react from "../../assets/img/icons/React.png";

import studio1 from "../../assets/img/examples/studio-1.jpg";
import studio2 from "../../assets/img/examples/studio-2.jpg";
import studio3 from "../../assets/img/examples/studio-3.jpg";
import studio4 from "../../assets/img/examples/studio-4.jpg";
import studio5 from "../../assets/img/examples/studio-5.jpg";
import work1 from "../../assets/img/examples/olu-eletu.jpg";
import work2 from "../../assets/img/examples/clem-onojeghuo.jpg";
import work3 from "../../assets/img/examples/cynthia-del-rio.jpg";
import work4 from "../../assets/img/examples/mariya-georgieva.jpg";
import work5 from "../../assets/img/examples/clem-onojegaw.jpg";

import styles from "../../assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

const useStyles2 = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function AboutPage(props) {
  const classes = useStyles();
  const iconClasses = useStyles2();

  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Header
        color="transparent"
        brand="Material Kit React"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white",
        }}
        {...rest}
      />
      <Parallax
        small
        filter
        image={require("../../assets/img/bg3.jpg")}
      />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Jerry McDonald</h3>
                    <h6>Programmer</h6>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-twitter"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-instagram"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-facebook"} />
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                This is where I will talk about myslef. blah blah blah{" "}
              </p>
            </div>
            <GridContainer justify="center">
              <div className={iconClasses.root}>
              <Avatar variant="square" className={classes.square} src={js} title='Javascript' />

              <Avatar variant="square" className={classes.square} src={react} title='Javascript' />
              {/* <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}> */}

              {/* </GridItem> */}
              </div>
            </GridContainer>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
