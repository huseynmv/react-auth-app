import { useStore } from "../../store/store.config";
import { useHomeStyles } from "./home.style";
import { removeToken } from "../../core/helpers/get-token";
import { useNavigate } from "react-router-dom";
import { Routes } from "../../router/routes";

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
        <p className={styles.txtHeader}>Welcome</p> <br />
        <p className={styles.username}>{user.email}</p>
        <button
          className={styles.logoutBtn}
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
