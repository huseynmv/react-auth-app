import { useStore } from "../../store/store.config";
import { useHomeStyles } from "./home.style";
import { removeToken } from "../../core/helpers/get-token";
import { useNavigate } from "react-router-dom";
import { Routes } from "../../router/routes";
import colors from "../../assets/styles/abstracts/color";

const HomeComponent = () => {
  const user = useStore("user");
  const styles = useHomeStyles();
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.page}>
        <div className={styles.left}></div>
        <div className={styles.right}></div>
      </div>
      <div className={styles.wrapper}>
        <p style={{ fontSize: 55, fontWeight: "500", textAlign: "center" }}>
          Welcome
        </p>{" "}
        <br />{" "}
        <p
          style={{
            fontSize: 55,
            fontWeight: "500",
            color: colors.buttonPrimaryColor,
            textAlign: "center",
          }}
        >
          {user}
        </p>
        <button
          onClick={() => {
            removeToken();
            navigate(Routes.login);
          }}
        >
          Log out
        </button>
      </div>
    </>
  );
};

export default HomeComponent;
