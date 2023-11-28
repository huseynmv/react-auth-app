import { createUseStyles } from "react-jss";
import colors from "../../assets/styles/abstracts/color";
import { rem } from "../../assets/styles/abstracts/functions";

const styles = {
  page: { height: "100vh" },
  left: {
    backgroundColor: "#ECBC76",
    minHeight: "100vh",
    width: "50%",
    justifyContent: "center",
  },
  right: {
    backgroundColor: "#FFFFFF",
    minHeight: "100vh",
    width: "40%",
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
  },
  title: {
    color: "black",
    fontSize: 20,
    fontWeight: "400",
    // alignItems: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0px 188px",
    // word-wrap: break-word
  },
  subTitle: {
    color: "black",
    fontSize: 55,
    fontWeight: "500",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0px 177px",
  },
};

export const useLoginStyles = createUseStyles(styles);
