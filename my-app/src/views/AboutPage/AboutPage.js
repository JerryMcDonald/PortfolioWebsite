import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

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
import CSharp from "../../assets/img/icons/CSharp.png";
import dotNetCore from "../../assets/img/icons/dotNetCore.png";

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
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
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
      <Parallax small filter image={require("../../assets/img/bg3.jpg")} />
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
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={7} className={classes.navWrapper}>
                <p>
                  In my free time, I try to create, create, create. I build
                  webpages, design games, and edit YouTube videos with my
                  daughter. Because I am a developer, I would not be proud to
                  look back and see I did not spend my extra time crafting. I
                  would bring this perspective to my next place of employment,
                  making sure I can end my day proud of what I accomplished.{" "}
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
                  src={CSharp}
                  title="C#"
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
                  I have experience with both front and back-end JavaScript
                  frameworks: React, AngularJS, and Vue, Node/Express, Sails.js,
                  and WebSocket packages like Socket.IO. I have designed and
                  built databases with MySQL and MongoDB, working with raw SQL
                  queries and ORMs like Sequelize or Mongoose.
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
