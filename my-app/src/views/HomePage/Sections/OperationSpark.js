import React from "react";
import Carousel from "react-slick";
import Lightbox from "react-image-lightbox";

import "react-image-lightbox/style.css";

import { makeStyles, withStyles } from "@material-ui/core/styles";

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
import CardHeader from "../../../components/Card/CardHeader.js";

// my images and icons
import operationSpark from "../../../assets/img/assorted/OPSparkLogo.png";
import Crawl from "../../../assets/img/assorted/Crawl.jpg";
import crawlCrop from "../../../assets/img/showcase/crawlCrop.png";
import crawlLogo from "../../../assets/img/showcase/crawlLogo.png";
import OPHomepage from "../../../assets/img/assorted/OP-homepage.jpg";
import OPLogoMed from "../../../assets/img/assorted/OP-logoMed.jpg";
import lrnLogoCropOne from "../../../assets/img/showcase/lrnLogoCropOne.png";
import lrnImageOne from "../../../assets/img/showcase/lrnShowcaseOne.jpg";
import lrnImageTwo from "../../../assets/img/showcase/lrnShowcaseTwo.jpg";
import lrnImageThree from "../../../assets/img/showcase/lrnShowcaseThree.jpg";
import lrnImageFour from "../../../assets/img/showcase/lrnShowcaseFour.jpg";
import OperationSparkCert from "../../../assets/img/creds/opsparkCert.png";

// images

import carouselStyle from "../../../assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";
import typoStyles from "../../../assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";
import showcaseStyles from "../../../assets/jss/material-kit-react/views/profilePage.js";
import breakawayStyles from "../../../assets/jss/material-kit-react/views/componentsSections/breakawayStyle.js";
import blogsStyle from "../../../assets/jss/material-kit-pro-react/views/sectionsSections/blogsStyle.js";

const useTypoStyles = makeStyles(typoStyles);
const useShowcaseStyles = makeStyles(showcaseStyles);
const useCarouselStyles = makeStyles(carouselStyle);
const useBlogsStyle = makeStyles(blogsStyle);
const useStyles = makeStyles(breakawayStyles);

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

const certImages = [OperationSparkCert];

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
  // const [index, setIndex] = React.useState(0);
  const [certOpen, setCertOpen] = React.useState(false);

  const typoClasses = useTypoStyles();
  const classes = useStyles();
  const carouselClasses = useCarouselStyles();
  const blogClasses = useBlogsStyle();

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
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  return (
    <div>
      <br />
      <br />
      <GridContainer justify="center">
        <GridItem xs={12} sm={4} md={4}>
          <CardHeader image plain>
            <div
              type="button"
              className={blogClasses.mag}
              onClick={() => {
                setCertOpen(true);
                console.log("test");
              }}
            >
              <img src={certImages[0]} alt="..." />
            </div>
            <div
              className={blogClasses.coloredShadow}
              style={{
                backgroundImage: `url(${certImages[0]})`,
                opacity: "1",
              }}
            />
          </CardHeader>
          // this will be the lightbox that will open if the cert is clicked
          {certOpen && (
            <Lightbox
              mainSrc={certImages[0]}
              imagePadding={500}
              onCloseRequest={() => setCertOpen(false)}
            />
          )}
          <br />
          <br />
          <br />
        </GridItem>
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
              <Typography gutterBottom>
                <p>
                  An app for planning and managing social bar crawl events.{" "}
                </p>
              </Typography>
              <Typography gutterBottom>
                <h3>Features</h3>
              </Typography>
              <Typography gutterBottom>
                On our website, you can create and save your own party's bar
                crawls. Then you can search Google Maps and add bars to a crawl
                by location. You can View individual crawl pages with a custom
                map of user locations. Users can also follow the crawl's status,
                see crawl participants, and send text messages to participants.
                Our site also Authenticates users via Google.
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button
                autoFocus
                href="https://github.com/Apptonomy/Crawl"
                target="_blank"
                color="primary"
              >
                View the Repo
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
              <Typography gutterBottom></Typography>
              <Typography
                gutterBottom
                style={{
                  paddingTop: "50px",
                  boxSizing: "content-box",
                }}
              >
                <p>
                  Organize power a social media platform that promotes social
                  causes and helps users organize movements.{" "}
                </p>
              </Typography>
              <Typography gutterBottom>
                <h3>Features</h3>
              </Typography>
              <Typography gutterBottom>
                OP features individual movement pages, user profiles, and the
                explore section. Users can interact with movements and each
                other through a feature-packed comment section. A user can also
                associate political figures with movements and begin civic
                engagement through text or email. We have also included Passport
                authentication.{" "}
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button
                autoFocus
                href="https://github.com/Apptonomy/organizepower"
                target="_blank"
                color="primary"
              >
                View the Repo
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
                <Typography gutterBottom>
                  <p>
                    Connecting students with classroom-like instruction in a
                    video lecture. Offering more features that are related to
                    the classroom. Built around the idea of more freelance
                    educators being able to start and hold classes.{" "}
                  </p>
                </Typography>
                <Typography gutterBottom>
                  <h3>Features</h3>
                </Typography>
                <Typography gutterBottom>
                  LRN features a good map of your local city that lists lectures
                  that instructors have posted. It features real-time face to
                  face communication through socket.io. It also features a
                  shareable whiteboard and a classroom chat.{" "}
                </Typography>
              </DialogContent>
              <DialogActions>
                <Button
                  autoFocus
                  href="https://github.com/HWY-61/LRN"
                  target="_blank"
                  color="primary"
                >
                  View the Repo
                </Button>
              </DialogActions>
            </div>
          </Dialog>
        </div>
      </GridContainer>
    </div>
  );
}
