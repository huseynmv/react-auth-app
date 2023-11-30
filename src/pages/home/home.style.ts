import { createUseStyles } from "react-jss";

const styles = {
  page: {
    display: "flex",
    height: "100vh",
  },
  left: {
    width: "50%",
    backgroundColor: "#ECBC76",
  },
  right: {
    width: "50%",
    backgroundColor: "#FFFEF9",
  },
  wrapper: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    boxShadow: "0px 4px 35px rgba(0, 0, 0, 0.08)",
    borderRadius: 40,
    paddingTop: 277,
    paddingBottom: 277,
    paddingLeft: 465,
    paddingRight: 465,
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export const useHomeStyles = createUseStyles(styles);
