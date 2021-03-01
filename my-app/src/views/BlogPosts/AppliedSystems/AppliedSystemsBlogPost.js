import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import FormatAlignLeft from "@material-ui/icons/FormatAlignLeft";
import Favorite from "@material-ui/icons/Favorite";

// core components
import Header from "../../../components/Header/Header.js";
import HeaderLinks from "../../../components/Header/HeaderLinks.js";
import Parallax from "../../../components/Parallax/Parallax.js";
import Footer from "../../../components/Footer/Footer.js";
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Button from "../../../components/CustomButtons/Button.js";
import ASIcon from "../../../assets/img/blog/ASICON.webp";
import w3c from "../../../assets/img/blog/w3c.png";

// sections for this page
import SectionText from "./AppliedSystemsSectionText.js";

import blogPostPageStyle from "../../../assets/jss/material-kit-pro-react/views/blogPostPageStyle.js";

const useStyles = makeStyles(blogPostPageStyle);

export default function ASBlog() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();

  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

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
      />
      <Parallax
        image={require("../../../assets/img/blog/ASBlogImage.jpg")}
        filter="dark"
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem md={8} className={classes.textCenter}>
              <h1 className={classes.title}>Hello Applied Systems!</h1>
              <h4 className={classes.subtitle}></h4>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classes.main}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.profile}>
                <div>
                  <img src={ASIcon} alt="..." className={imageClasses} />
                </div>
                <br />
              </div>
            </GridItem>
          </GridContainer>
          {/* <img src={w3c} alt="..." className={imageClasses} /> */}
          <SectionText />
        </div>
      </div>
      <Footer
        content={
          <div>
            <div className={classes.left}>
              <List className={classes.list}>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/?ref=mkpr-blog-post"
                    target="_blank"
                    className={classes.block}
                  >
                    Creative Tim
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/presentation?ref=mkpr-blog-post"
                    target="_blank"
                    className={classes.block}
                  >
                    About us
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://blog.creative-tim.com/?ref=mkpr-blog-post"
                    target="_blank"
                    className={classes.block}
                  >
                    Blog
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/license?ref=mkpr-blog-post"
                    target="_blank"
                    className={classes.block}
                  >
                    Licenses
                  </a>
                </ListItem>
              </List>
            </div>
            <div className={classes.right}>
              &copy; {1900 + new Date().getYear()} , made with{" "}
              <Favorite className={classes.icon} /> by{" "}
              <a
                href="https://www.creative-tim.com?ref=mkpr-blog-post"
                target="_blank"
              >
                Creative Tim
              </a>{" "}
              for a better web.
            </div>
          </div>
        }
      />
    </div>
  );
}
