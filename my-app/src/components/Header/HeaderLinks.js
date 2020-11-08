/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "../../components/CustomDropdown/CustomDropdown.js";
import Button from "../../components/CustomButtons/Button.js";

import styles from "../../assets/jss/material-kit-react/components/headerLinksStyle.js";
import resume from "../../assets/img/pdfs/Jerry_McDonald_Resume.pdf"

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();

  return (
    <List className={classes.list}>
        <ListItem className={classes.listItem}>
        <Button
          href={"/"}
          color="transparent"
          // target="_blank"
          className={classes.navLink}
        >
           Showcase
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="https://www.creative-tim.com/product/material-kit-react?ref=mkr-navbar"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
           about
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href={"/contact-page"}
          color="transparent"
          // we do not want contact to open in a new tab
          // target="_blank"
          className={classes.navLink}
        >
           Contact
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href={resume}
          onClick={props.resumeClick}
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
           Resume
        </Button>
      </ListItem>
    </List>
  );
}

// that one day is now
