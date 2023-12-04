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
    // padding: 180,
    [breakpoint(1200)]: {
      width: "100%",
    },
  },
  right: {
    backgroundColor: "#FFFFFF",
    [breakpoint(1200)]: {
      width: "0%",
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
    // padding: "50px 40px",
    padding: rem(50) + " " + rem(40),
    backgroundColor: "white",
    [breakpoint(1200)]: {
      maxWidth: "100%",
      margin: 0,
      paddingLeft: rem(10),
      paddingRight: rem(10),
    },
  },
  title: {
    color: colors.textPrimaryColor,
    fontSize: 20,
    fontWeight: "400",
    padding: rem(0) + " " + rem(188),
    [breakpoint(1200)]: {
      padding: rem(0) + " " + rem(100),
      float: "left",
      fontSize: 16,
    },
  },
  subTitle: {
    color: "black",
    fontSize: 55,
    fontWeight: "500",
    textAlign: "center",
    [breakpoint(1200)]: {
      fontSize: 40,
    },
  },
};

export const useLoginStyles = createUseStyles(styles);
