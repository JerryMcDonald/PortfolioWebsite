import React from "react";
import classNames from "classnames";
import {Helmet} from "react-helmet";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

// @material-ui/icons
// import Camera from "@material-ui/icons/Camera";
// import Palette from "@material-ui/icons/Palette";
// import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "../../components/Header/Header.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import Parallax from "../../components/Parallax/Parallax.js";
import Footer from "../../components/Footer/Footer.js";

import profile from "../../assets/img/assorted/avatar-jerry.jpg";
import meta from "../../assets/img/metaImages/newMainPageMetaImage.png";

import js from "../../assets/img/icons/JS.png";
import react from "../../assets/img/icons/React.png";
import css from "../../assets/img/icons/CSS.png";
import html from "../../assets/img/icons/html.png";
import vue from "../../assets/img/icons/vue.png";
import AngularJS from "../../assets/img/icons/AngularJS.png";
import nodejs from "../../assets/img/icons/nodejs.png";
import mysql from "../../assets/img/icons/mysql.png";
import ExpressJS from "../../assets/img/icons/Express JS.png";
import mongoDB from "../../assets/img/icons/mongoDB.png";
import Sequelize from "../../assets/img/icons/Sequelize.png";
import GCloud from "../../assets/img/icons/GCloud.png";
import Cpp from "../../assets/img/icons/C++_Icon.png";
import dotNetCore from "../../assets/img/icons/dotNetCore.png";

import styles from "../../assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

const useStyles2 = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
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
  return (
    <div>
      <Helmet>
                <meta charSet="utf-8" />
                <title>My Title</title>
                <meta property="og:url" content="https://www.jerrymcdonald.dev/#/aboutme-page"></meta>
                {/* <link rel="canonical" href="http://mysite.com/example" /> */}
      </Helmet>
      <Header
        color="transparent"
        brand="Jerry McDonald"
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
        image={require("../../assets/img/assorted/bg3.jpg")}
      />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  {/* <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div> */}
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>

                  <div className={classes.name}>
                    <h3 className={classes.title}>Jerry McDonald</h3>
                    <h6>Programmer</h6>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={7} className={classes.navWrapper}>
                <p>
                  I try to use my free time to create. I build webpages, design
                  games, and edit YouTube videos with my daughter. I would not
                  be proud to look back and see I did not spend my extra time
                  crafting or making a difference. I would bring this
                  perspective to my next place of employment, making sure I can
                  end my day proud of what I accomplished.{" "}
                </p>
              </GridItem>
            </GridContainer>
            <GridContainer justify="center">
              <div className={iconClasses.root}>
                <Avatar
                  variant="square"
                  className={classes.square}
                  src={js}
                  title="Javascript"
                />

                <Avatar
                  variant="square"
                  className={classes.square}
                  src={react}
                  title="React"
                />
                {/* <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}> */}
                <Avatar
                  variant="square"
                  className={classes.square}
                  src={css}
                  title="CSS"
                />
                {/* </GridItem> */}
                <Avatar
                  variant="square"
                  className={classes.square}
                  src={html}
                  title="HTML"
                />

                <Avatar
                  variant="square"
                  className={classes.square}
                  src={vue}
                  title="Vue.js"
                />

                <Avatar
                  variant="square"
                  className={classes.square}
                  src={AngularJS}
                  title="AngularJS"
                />

                <Avatar
                  variant="square"
                  className={classes.square}
                  src={nodejs}
                  title="NodeJS"
                />
              </div>
            </GridContainer>
            <GridContainer justify="center">
              <div className={iconClasses.root}>
                <Avatar
                  variant="square"
                  className={classes.square}
                  src={Cpp}
                  title="C++"
                />

                <Avatar
                  variant="square"
                  className={classes.square}
                  src={dotNetCore}
                  title=".NET Core"
                />

                <Avatar
                  variant="square"
                  className={classes.square}
                  src={mysql}
                  title="MySQL"
                />

                <Avatar
                  variant="square"
                  className={classes.square}
                  src={ExpressJS}
                  title="Express JS"
                />

                <Avatar
                  variant="square"
                  className={classes.square}
                  src={mongoDB}
                  title="mongoDB"
                />

                <Avatar
                  variant="square"
                  className={classes.square}
                  src={Sequelize}
                  title="Sequelize"
                />

                <Avatar
                  variant="square"
                  className={classes.square}
                  src={GCloud}
                  title="Google Cloud"
                />
              </div>
            </GridContainer>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <p>
                  I can code in JS or C++. I have experience with both front and
                  back-end JavaScript frameworks: React, AngularJS, and Vue,
                  Node/Express, Sails.js, and WebSocket packages like Socket.IO.
                  I have designed and built databases with MySQL and MongoDB,
                  working with raw SQL queries and ORMs like Sequelize or
                  Mongoose.
                </p>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
