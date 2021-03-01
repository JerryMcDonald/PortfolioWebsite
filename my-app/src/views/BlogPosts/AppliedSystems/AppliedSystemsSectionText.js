import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

// @material-ui/icons

//scss and css
import "../../../assets/scss/styles.scss";
import "../../../assets/css/styles.css";

import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";

import sectionTextStyle from "../../../assets/jss/material-kit-pro-react/views/blogPostSections/sectionTextStyle.js";

const useStyles = makeStyles(sectionTextStyle);

const useMaterialStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function SectionText() {
  const classes = useStyles();
  const materialClasses = useMaterialStyles();

  const menuClick = () => {
    alert("Menu Clicked!");
  };

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={8} md={8}>
          <h3 className={classes.title}>WCAG</h3>
          <p>
            {`
              Web Content Accessibility Guidelines (WCAG) aims to provide a single shared standard for web content accessibility that meets the needs of individuals, organizations, and governments internationally.
            `}
          </p>
          <p>
            {`
              In this short blog, I have chosen and demonstrated three of my favorite guidelines.

            `}
          </p>
          <hr />
          <br />
          <h3 className={classes.cardTitle}>Section 1.4.1: Use of Color</h3>
          <p>
            {`
              Color is an essential asset in web design. However, some users have difficulty perceiving color, and this could be due to old age or color blindness. 
            `}
          </p>
          <p>
            {`
              I have a red-green deficiency (Protanopia), and distinguishing red and green pigments can be difficult. This and Deuteranopia (complete inability to distinguish red-green) are the most common types of color blindness. It affects 7% of men and only 0.4% of women.
            `}
          </p>
          <p>
            {`We can help colorblind users by ensuring our links have a 3:1 contrast ratio with the surrounding text.`}{" "}
            <a>Blue</a>{" "}
            {`is commonly used to achieve this ratio, and thankfully it is already the default color when using the 'href' attribute in HTML. Also, by default, links will appear underlined, which also aids colorblind users.
            `}
          </p>
          <pre>
            <code>
              {`
        <a id="link" href="https://www.w3.org/WAI/WCAG21/Understanding/use-of-color">
          Understanding Success Criterion 1.4.1: Use of Color{" "}
        </a>
              `}
            </code>
          </pre>
          <p>
            {`
              Another great addition would be to add a highlight on link hover. This can be done
              in CSS. 
              
              Example:
            `}
          </p>
          <br />
          <p>
            Example:&nbsp;
            <a
              id="link"
              href="https://enchroma.com/pages/types-of-color-blindness"
            >
              <u>Types of Colorblindness </u>
            </a>
          </p>
          <pre>
            <code>
              {`
        a#link:hover {
          background-color: yellow;
        }
              `}
            </code>
          </pre>
          <br />

          <h4 className={classes.cardTitle}>Resources:</h4>
          <a
            id="link"
            href="https://www.w3.org/WAI/WCAG21/Understanding/use-of-color"
          >
            <u>Understanding Success Criterion 1.4.1: Use of Color </u>
          </a>
          <br />
          <a
            id="link"
            href="https://www.w3.org/WAI/WCAG21/working-examples/link-contrast/"
          >
            <u>Links with a 3:1 contrast ratio with surrounding text </u>
          </a>
          <br />
          <br />

          <hr />
          <br />

          {/* Second Standard -------------------------------- */}
          <h3 className={classes.cardTitle}>Section 2.5.5: Target Size</h3>
          <p>
            {`
            Some users may have limited dexterity, so mice and similar pointing devices can be hard to use for these users.
            `}
          </p>
          <p>
            {`
            Or maybe the user is accessing content on a small handheld.  A finger is larger than a mouse pointer and can obstruct the user's view of the element being touched/activated.
            `}
          </p>
          <p>
            {`
            That is why Section 2.5.5 states that pointer inputs' target should be at least 44 by 44 pixels. We can use CSS or SCSS on any element to ensure they at least meet the size requirement. 
            `}
          </p>
          <div className="wrapper">
            <p>Hamburger menus are a great example</p>
            <p>
              {" "}
              The menu button on the left meets the requirement. The button on
              the right does not.
            </p>
            <br />
            <br />

            <button onClick={menuClick} className="menu">
              .menu
              <br />
              <span></span>
              <span></span>
              <span></span>
            </button>

            <button onClick={menuClick} className="menu-2">
              .menu-2
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          <br />
          <br />
          <br />

          <p>
            Here is an example of SCSS used to set the size of the clickable
            area:
          </p>
          <pre>
            <code>
              {`
        .menu {
          width: 50px;
          height: 45px;
          background: transparent;
        }

        .menu-2 {
          width: 28px;
          height: 18px;
          background: transparent;
        }
              `}
            </code>
          </pre>
          <br />
          <h4 className={classes.cardTitle}>Resources:</h4>
          <a
            id="link"
            href="https://www.w3.org/WAI/WCAG21/Understanding/target-size.html"
          >
            <u>Understanding 2.5.5 </u>
          </a>
          <br />
          <a id="link" href="https://ishadeed.com/article/clickable-area/">
            <u>Awesome blog on text area </u>
          </a>

          <br />
          <br />
          {/* Third Standard -------------------------------- */}
          <hr />
          <br />
          <h3 className={classes.cardTitle}>
            Section 1.3.5: Identify Input Purpose
          </h3>
          <p>
            {`
              Some users may have language or memory-related disabilities. Users may also have a motor impairment that can benefit from the reduced need for manually filling out forms. The purpose of standard 1.3.5 is to address these issues. 
          `}
          </p>
          <p>
            {`
              Here is an example of input forms with a placeholder and an autocomplete feature.
          `}
          </p>
          <br />
          <form className={materialClasses.root} noValidate autoComplete="on">
            <TextField id="standard-basic" label="First name" name="fname" />
            <TextField id="standard-basic" label="Last name" name="lname" />
            <TextField id="standard-basic" label="E-mail" name="email" />
          </form>
          <br />
          <p>
            {`
            HTML has a built-in attribute "autocomplete". When this is on, the browser will search for an 'id' or 'name' attribute and auto-fill the form accordingly. 
            `}
          </p>
          <p>
            {`
            The placeholder attribute will specify the desired value of an input field. 
            `}
          </p>
          <pre>
            <code>
              {`
          <form action="/action_page.php" autocomplete="on">
            <input type="text" name="fname" placeholder="First Name"><br>
            <input type="text" name="lname" placeholder="Last Name"><br>
            <input type="email" name="email" placeholder="Email"><br>
            <input type="submit">
          </form>
              `}
            </code>
          </pre>
          <h4 className={classes.cardTitle}>Resources:</h4>
          <a
            id="link"
            href="https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose"
          >
            <u>
              Understanding Success Criterion 1.3.5: Identify Input Purpose{" "}
            </u>
          </a>
          <br />
          <a id="link" href="https://www.w3.org/WAI/WCAG21/Techniques/html/H98">
            <u>Using HTML 5.2 autocomplete attributes </u>
          </a>
          <br />
          <br />
          <hr />
          <br />
          <br />
          <p>
            {`
              Here is a link to the code on GitHub for this blog. I am using the React Framework in combination with Material-UI.
          `}
          </p>
        </GridItem>
      </GridContainer>
    </div>
  );
}
