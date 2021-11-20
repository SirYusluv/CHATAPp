import Login from "../components/auth/login/Login";
import Signup from "../components/auth/signup/Signup";
import { TXT_LOGO } from "../util/config";

import styles from "./auth.module.css";

import logo from "../img/logo.png";
import { useState } from "react";

function Auth() {
  const [currViewIsLogin, setCurrViewIsLogin] = useState(true);

  // function changeView() {
  //   if (currView === LOGIN_VIEW) {
  //     setCurrView("KJJSJ");
  //     return;
  //   }

  //   setCurrView(LOGIN_VIEW);
  // }

  return (
    <div className={styles["container-main"]}>
      <div className={styles["container-sec"]}>
        <img src={logo} alt={TXT_LOGO} className={styles.logo} />
        <Login changeView={!currViewIsLogin} />
        <Signup changeView={!currViewIsLogin} />
        <div className={styles["buttom-txt-ctn"]}>
          {!currViewIsLogin && (
            <p
              className={styles.p}
              onClick={setCurrViewIsLogin.bind(
                null,
                (prevViewIsLogin) => !prevViewIsLogin
              )}
            >
              Have an account? Login
            </p>
          )}

          {currViewIsLogin && (
            <p
              className={styles.p}
              onClick={setCurrViewIsLogin.bind(
                null,
                (prevViewIsLogin) => !prevViewIsLogin
              )}
            >
              New here? signup
            </p>
          )}

          {currViewIsLogin && (
            <p
              className={styles.p}
              onClick={setCurrViewIsLogin.bind(
                null,
                (prevViewIsLogin) => !prevViewIsLogin
              )}
            >
              forget password?
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Auth;
