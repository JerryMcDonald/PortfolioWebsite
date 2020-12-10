import React from "react";
import Carousel from "react-slick";

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
import LocationOn from "@material-ui/icons/LocationOn";

import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Info from "../../../components/Typography/Info.js";
import Card from "../../../components/Card/Card.js";

// my images and icons
import operationSpark from "../../../assets/img/OPSparkLogo.png";
import Crawl from "../../../assets/img/Crawl.jpg";
import crawlCrop from "../../../assets/img/showcase/crawlCrop.png";
import crawlLogo from "../../../assets/img/showcase/crawlLogo.png";
import OPHomepage from "../../../assets/img/OP-homepage.jpg";
import OPLogoMed from "../../../assets/img/OP-logoMed.jpg";
import lrnLogo from "../../../assets/img/showcase/learningResourcesNowLogo.png";
import lrnLogoCropOne from "../../../assets/img/showcase/lrnLogoCropOne.png";
import lrnImageOne from "../../../assets/img/showcase/lrnShowcaseOne.jpg";
import lrnImageTwo from "../../../assets/img/showcase/lrnShowcaseTwo.jpg";
import lrnImageThree from "../../../assets/img/showcase/lrnShowcaseThree.jpg";
import lrnImageFour from "../../../assets/img/showcase/lrnShowcaseFour.jpg";

// images

import carouselStyle from "../../../assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";
import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import typoStyles from "../../../assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";
import showcaseStyles from "../../../assets/jss/material-kit-react/views/profilePage.js";
import breakawayStyles from "../../../assets/jss/material-kit-react/views/componentsSections/breakawayStyle.js";

// const useStyles = makeStyles(styles);
const useTypoStyles = makeStyles(typoStyles);
const useShowcaseStyles = makeStyles(showcaseStyles);
const useCarouselStyles = makeStyles(carouselStyle);

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
    url: lrnLogoCropOne,
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
  const [openThree, setOpenThree] = React.useState(false);

  const typoClasses = useTypoStyles();
  const classes = useStyles();
  const carouselClasses = useCarouselStyles();

  const handleClickOpen = (i) => {
    if (i === 0) {
      setOpen(true);
    }
    if (i === 1) {
      setOpenTwo(true);
    }
    if (i === 2) {
      setOpenThree(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setOpenTwo(false);
    setOpenThree(false);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
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
                onClick={() => handleClickOpen(index)}
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
              <GridItem xs={12} sm={4}>
                <img
                  src={crawlLogo}
                  alt="..."
                  className={
                    typoClasses.imgRounded + " " + typoClasses.imgFluid
                  }
                />
              </GridItem>
            </DialogTitle>
            <DialogContent dividers>
              <GridContainer justify="center">
                <GridItem xs={12} sm={10}>
                  <img
                    src={Crawl}
                    alt="..."
                    className={
                      typoClasses.imgRounded + " " + typoClasses.imgFluid
                    }
                  />
                </GridItem>
              </GridContainer>
              <Typography gutterBottom> <h3> An app for planning and managing social bar crawl events.
              </h3></Typography>
              <Typography gutterBottom>Paragraph two about Crawl</Typography>
              <Typography gutterBottom>Paragraph three about Crawl</Typography>
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
            open={openTwo}
          >
            <DialogTitle id="customized-dialog-title" onClose={handleClose}>
              Organize Power
            </DialogTitle>
            <DialogContent dividers>
              <GridContainer justify="center">
                <GridItem xs={12} sm={10}>
                  <img
                    src={OPHomepage}
                    alt="..."
                    className={
                      typoClasses.imgRounded + " " + typoClasses.imgFluid
                    }
                  />
                </GridItem>
              </GridContainer>
              <Typography gutterBottom>Paragraph one about OP</Typography>
              <Typography gutterBottom>Paragraph two about OP</Typography>
              <Typography gutterBottom>Paragraph three about OP</Typography>
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
            open={openThree}
          >
            <div>
              <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                Learning Resources Now
              </DialogTitle>
              <DialogContent dividers>
                <GridItem
                  xs={12}
                  sm={12}
                  md={12}
                  className={classes.marginAuto}
                >
                  <Card carousel>
                    <Carousel {...settings}>
                      <div>
                        <img
                          src={lrnImageThree}
                          alt="First slide"
                          className="slick-image"
                        />
                        <div className="slick-caption">
                          {/* <h4>
                            <LocationOn className="slick-icons" />
                            Yellowstone National Park, United States
                          </h4> */}
                        </div>
                      </div>
                      <div>
                        <img
                          src={lrnImageOne}
                          alt="Second slide"
                          className="slick-image"
                        />
                        <div className="slick-caption"></div>
                      </div>
                      <div>
                        <img
                          src={lrnImageTwo}
                          alt="Third slide"
                          className="slick-image"
                        />
                        <div className="slick-caption"></div>
                      </div>
                      <div>
                        <img
                          src={lrnImageFour}
                          alt="Third slide"
                          className="slick-image"
                        />
                        <div className="slick-caption"></div>
                      </div>
                    </Carousel>
                  </Card>
                </GridItem>
                <Typography gutterBottom>Paragraph one about LRN</Typography>
                <Typography gutterBottom>Paragraph two about LRN</Typography>
                <Typography gutterBottom>Paragraph three about LRN</Typography>
              </DialogContent>
              <DialogActions>
                <Button autoFocus onClick={handleClose} color="primary">
                  Save changes
                </Button>
              </DialogActions>
            </div>
          </Dialog>
        </div>
      </GridContainer>
    </div>
  );
}
