import { createUseStyles } from "react-jss";
import colors from "../../assets/styles/abstracts/color";
import { rem } from "../../assets/styles/abstracts/functions";
import { breakpoint } from "../../assets/styles/abstracts/mixins";

const styles = {
  page: { height: "100vh" },
  left: {
    backgroundColor: "#ECBC76",
    minHeight: "100vh",
    width: "50%",
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
    borderRadius: "40px",
    padding: "50px 40px",
    backgroundColor: "white",
    [breakpoint(1200)]: {
      // padding: 0,
      maxWidth: "100%",
      margin: 0,
      // paddingBottom: 35,
      paddingLeft: 10,
      paddingRight: 10,
    },
  },
  title: {
    color: "black",
    fontSize: 20,
    fontWeight: "400",
    padding: "0px 188px",
    [breakpoint(1200)]: {
      padding: "0px 100px",
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
