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
      display: "none",
    },
  },
  wrapper: { display: "flex" },
  form: {
    position: "absolute",
    transform: "translate(-50%, -50%)",
    top: "50%",
    left: "50%",
    zIndex: 999,
    boxShadow: "0px 4px 35px rgba(0, 0, 0, 0.88 )",

    borderRadius: rem(40),
    padding: rem(50) + " " + rem(40),
    backgroundColor: "white",
    [breakpoint(1200)]: {
      maxWidth: "100%",
      margin: 0,
      padding: rem(50) + " " + rem(10),
    },
  },
  title: {
    color: colors.textPrimaryColor,
    fontSize: 20,
    fontWeight: "400",
    fontFamily: "Poppins",
    // padding: rem(0) + " " + rem(150),
    [breakpoint(1200)]: {
      // padding: rem(0) + " " + rem(80),
      // paddingLeft: rem(90),
      // float: "left",
      width: rem(130),
      fontSize: 16,
    },
  },
  label: {
    marginTop: 15,
    [breakpoint(1200)]: {
      width: "260px",
    },
  },
  subTitle: {
    color: colors.textPrimaryColor,
    fontSize: 55,
    fontWeight: "500",
    fontFamily: "Poppins",
    [breakpoint(1200)]: {
      fontSize: 40,
      lineHeight: 1.5,
    },
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  headerLeftWrapper: {
    paddingLeft: 121,
    [breakpoint(1200)]: {
      paddingLeft: 77,
    },
  },
  headerLeftTitle: {
    fontSize: 13,
    color: "#8d8d8d",
    fontWeight: "400",
  },
  headerLeftSubtitle: {
    fontSize: 13,
    color: "#B87514",
    fontWeight: "400",
  },
  button: {
    width: "100%",
    backgroundColor: colors.textSecondaryColor,
    color: "white",
  },
};

export const useRegisterStyles = createUseStyles(styles);
