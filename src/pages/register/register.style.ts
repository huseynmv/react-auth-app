import { createUseStyles } from "react-jss";
import colors from "../../assets/styles/abstracts/color";
import { rem } from "../../assets/styles/abstracts/functions";

const styles = {
  page: { height: "100vh" },
  left: {
    backgroundColor: "#ECBC76",
    minHeight: "100vh",
    width: "50%",
  },
  right: {
    backgroundColor: "#FFFFFF",
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
  },
  subTitle: {
    color: "black",
    fontSize: 55,
    fontWeight: "500",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
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
    backgroundColor: "#E48700",
    color: "white",
  },
};

export const useRegisterStyles = createUseStyles(styles);
