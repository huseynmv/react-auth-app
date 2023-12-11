import { createUseStyles } from "react-jss";
import colors from "../../assets/styles/abstracts/color";
import { breakpoint } from "../../assets/styles/abstracts/mixins";
import { rem } from "../../assets/styles/abstracts/functions";

const styles = {
  page: { height: "100vh" },
  left: {
    backgroundColor: colors.bgColor,
    minHeight: "100vh",
    width: "50%",
    [breakpoint(1200)]: {
      width: "100%",
    },
  },
  leftImg: {
    paddingLeft: 181,
    paddingTop: 193,
    [breakpoint(1200)]: {
      display: "none",
      padding: 0,
    },
  },
  right: {
    backgroundColor: "#FFFFFF",
    [breakpoint(1200)]: {
      width: "0%",
    },
  },
  rightImg: {
    paddingTop: 144,
    paddingLeft: 190,
    [breakpoint(1200)]: {
      padding: 0,
    },
  },
  wrapper: { display: "flex" },
  form: {
    position: "absolute",
    transform: "translate(-50%, -50%)",
    top: "50%",
    left: "50%",
    zIndex: 999,
    boxShadow: "0px 4px 35px 0px rgba(0, 0, 0, 0.08)",
    borderRadius: rem(40),
    // padding: "50px 40px",
    padding: rem(50) + " " + rem(40),
    backgroundColor: "white",
    [breakpoint(1200)]: {
      maxWidth: "100%",
      margin: 0,
      paddingLeft: rem(10),
      paddingRight: rem(10),
      // paddingRight: rem(),
    },
  },
  title: {
    color: colors.textPrimaryColor,
    fontSize: 20,
    fontWeight: "400",
    padding: rem(0) + " " + rem(150),
    [breakpoint(1200)]: {
      padding: rem(0) + " " + rem(80),
      paddingLeft: rem(90),
      float: "left",
      fontSize: 16,
    },
  },
  subTitle: {
    color: "black",
    fontSize: 55,
    fontFamily: "Poppins",
    fontWeight: "500",
    textAlign: "center",
    [breakpoint(1200)]: {
      fontSize: 40,
      marginTop: rem(33),
    },
  },
  or: {
    color: "#ABABAB",
    fontFamily: "Poppins",
    fontSize: 16,
    fontWeight: "400",
    [breakpoint(1200)]: {
      display: "none",
    },
  },
  site: {
    [breakpoint(1200)]: {
      color: colors.buttonPrimaryColor,
      fontSize: 16,
    },
  },
  signInBtn: {
    width: "100%",
    borderRadius: 10,
    fontSize: 16,
    backgroundColor: colors.buttonSecondaryColor,
    color: colors.secondaryButtonTextColor,
    height: 54,
    boxShadow: "0px 4px 19px 0px rgba(119, 147, 65, 0.30)",
    [breakpoint(1200)]: {
      display: "none",
    },
  },
  signInBtnMobile: {
    width: "100%",
    borderRadius: 10,
    marginTop: 33,
    fontSize: 16,
    backgroundColor: colors.buttonSecondaryColor,
    color: colors.secondaryButtonTextColor,
    height: 54,
    boxShadow: "0px 4px 19px 0px rgba(119, 147, 65, 0.30)",
    display: "none",
    [breakpoint(1200)]: {
      display: "block",
    },
  },
};

export const useLoginStyles = createUseStyles(styles);
