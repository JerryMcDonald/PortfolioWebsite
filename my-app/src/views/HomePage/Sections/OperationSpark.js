import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";

import "../../../assets/css/styles.css";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";

import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Info from "../../../components/Typography/Info.js";

// my images and icons
import operationSpark from "../../../assets/img/OPSparkLogo.png";
import Crawl from "../../../assets/img/Crawl.jpg";
import crawlCrop from "../../../assets/img/showcase/crawlCrop.png";
import crawlLogo from "../../../assets/img/showcase/crawlLogo.png";
import OPHomepage from "../../../assets/img/OP-homepage.jpg";
import OPLogoMed from "../../../assets/img/OP-logoMed.jpg";

// images

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import typoStyles from "../../../assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";
import showcaseStyles from "../../../assets/jss/material-kit-react/views/profilePage.js";
import breakawayStyles from "../../../assets/jss/material-kit-react/views/componentsSections/breakawayStyle.js"

// const useStyles = makeStyles(styles);
const useTypoStyles = makeStyles(typoStyles);
const useShowcaseStyles = makeStyles(showcaseStyles);

const images = [
  {
    url: crawlLogo,
    title: "Crawl",
    width: "33%",
  },
  {
    url: OPLogoMed,
    width: "33%",
  },
  {
    url: crawlLogo,
    title: "LRN",
    width: "33%",
  },
];

const useStyles = makeStyles(breakawayStyles);

const dStyles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(dStyles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function OperationSpark() {
  const [open, setOpen] = React.useState(false);
  const [openTwo, setOpenTwo] = React.useState(false);

  const typoClasses = useTypoStyles();
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

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
        <div>
          <div className={classes.root}>
            {images.map((image, index) => (
              <ButtonBase
                focusRipple
                key={image.title}
                onClick={handleClickOpen}
                className={classes.image}
                focusVisibleClassName={classes.focusVisible}
                style={{
                  width: image.width,
                }}
              >
                <span
                  className={classes.imageSrc}
                  style={{
                    backgroundImage: `url(${image.url})`,
                  }}
                />
                <span className={classes.imageBackdrop} />
                <span className={classes.imageButton}>
                  <Typography
                    component="span"
                    variant="subtitle1"
                    color="inherit"
                    className={classes.imageTitle}
                  >
                    {/* {image.title} */}
                    <span className={classes.imageMarked} />
                  </Typography>
                </span>
              </ButtonBase>
            ))}
          </div>
          {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}> */}
            {/* <img alt=".." className="photo" src={crawlLogo} /> */}
            {/* test */}
          {/* </Button> */}
          <Dialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
          >
            <DialogTitle id="customized-dialog-title" onClose={handleClose}>
              Modal title
            </DialogTitle>
            <DialogContent dividers>
              <Typography gutterBottom>
                Cras mattis consectetur purus sit amet fermentum. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                risus, porta ac consectetur ac, vestibulum at eros.
              </Typography>
              <Typography gutterBottom>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur
                et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                dolor auctor.
              </Typography>
              <Typography gutterBottom>
                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                cursus magna, vel scelerisque nisl consectetur et. Donec sed
                odio dui. Donec ullamcorper nulla non metus auctor fringilla.
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={handleClose} color="primary">
                Save changes
              </Button>
            </DialogActions>
          </Dialog>
          <Dialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
          >
            <DialogTitle id="customized-dialog-title" onClose={handleClose}>
              Wakakaka
            </DialogTitle>
            <DialogContent dividers>
              <Typography gutterBottom>
                Cras mattis consectetur purus sit amet fermentum. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                risus, porta ac consectetur ac, vestibulum at eros.
              </Typography>
              <Typography gutterBottom>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur
                et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                dolor auctor.
              </Typography>
              <Typography gutterBottom>
                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                cursus magna, vel scelerisque nisl consectetur et. Donec sed
                odio dui. Donec ullamcorper nulla non metus auctor fringilla.
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={handleClose} color="primary">
                Save changes
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </GridContainer>
    </div>
  );
}
