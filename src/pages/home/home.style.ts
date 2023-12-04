import { createUseStyles } from "react-jss";
import { breakpoint } from "../../assets/styles/abstracts/mixins";
import colors from "../../assets/styles/abstracts/color";
import { rem } from "../../assets/styles/abstracts/functions";
const styles = {
  page: {
    display: "flex",
    height: "100vh",
  },
  left: {
    width: "50%",
    backgroundColor: colors.bgColor,
    [breakpoint(1200)]: {
      width: "100%",
    },
  },
  right: {
    width: "50%",
    backgroundColor: colors.homebgColor,
    [breakpoint(1200)]: {
      width: "0%",
    },
  },
  wrapper: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    boxShadow: "0px 4px 35px rgba(0, 0, 0, 0.08)",
    borderRadius: 40,
    padding: rem(180) + " " + rem(400),
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [breakpoint(1200)]: {
      padding: rem(200) + " " + rem(0),
      width: "100%",
    },
  },
  logoutBtn: {
    width: "100%",
    backgroundColor: colors.buttonPrimaryColor,
    borderWidth: 0,
    padding: rem(15),
    boxShadow: "0px 4px 19px rgba(119, 147, 65, 0.30)",
    borderRadius: 10,
    marginTop: 85,
    color: "white",
  },
  txtHeader: {
    fontSize: 55,
    fontWeight: "500",
    textAlign: "center",
    [breakpoint(1200)]: {
      fontSize: 40,
    },
  },
  username: {
    fontSize: 55,
    fontWeight: "500",
    color: colors.buttonPrimaryColor,
    textAlign: "center",
    [breakpoint(1200)]: {
      fontSize: 40,
    },
  },
};

export const useHomeStyles = createUseStyles(styles);
