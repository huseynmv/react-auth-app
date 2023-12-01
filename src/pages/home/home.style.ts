import { createUseStyles } from "react-jss";
import { breakpoint } from "../../assets/styles/abstracts/mixins";
const styles = {
  page: {
    display: "flex",
    height: "100vh",
  },
  left: {
    width: "50%",
    backgroundColor: "#ECBC76",
    [breakpoint(1200)]: {
      width: "100%",
    },
  },
  right: {
    width: "50%",
    backgroundColor: "#FFFEF9",
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
    padding: "260px",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [breakpoint(1200)]: {
      padding: "250px 30px",
    },
  },
};

export const useHomeStyles = createUseStyles(styles);
