import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// import InputAdornment from "@material-ui/core/InputAdornment";
// import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
// import People from "@material-ui/icons/People";

// core components
// import Header from "../../../components/Header/Header.js";
// import HeaderLinks from "../../../components/Header/HeaderLinks.js";
import Footer from "../../../components/Footer/Footer.js";
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Button from "../../../components/CustomButtons/Button.js";
import Card from "../../../components/Card/Card.js";
// import CardBody from "../../components/Card/CardBody.js";
// import CardHeader from "../../components/Card/CardHeader.js";
// import CardFooter from "../../components/Card/CardFooter.js";
// import CustomInput from "../../components/CustomInput/CustomInput.js";

import styles from "../../../assets/jss/material-kit-react/views/loginPage.js";

import image from "../../../assets/img/bg3.jpg";

const useStyles = makeStyles(styles);

export default function ContactPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  // const [classicModal, setClassicModal] = React.useState(false);
  // const [fromContactPage, setFromContactPage] = React.useState(true);

  
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  // const { ...rest } = props;
  return (
    <div>
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <p
                    style={{ fontSize: 20, color: "gray" }}
                    className={classes.divider}
                  >
                    I would love to hear from you!
                  </p>
                  <GridContainer justify="center">
                    <GridItem
                      style={{ paddingBottom: 30 }}
                      xs={12}
                      sm={12}
                      md={6}
                      lg={4}
                    >
                      <Button
                        color="gray"
                        href="mailto:jmcdonald.dad.dev@gmail.com"
                        className={classes.divider}
                        block
                        // onClick={() => setClassicModal(true)}
                      >
                        <Email className={classes.icon} />
                        Email
                      </Button>
                    </GridItem>
                  </GridContainer>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
