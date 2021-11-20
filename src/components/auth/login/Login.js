import React from "react";
import Input from "../../input/Input";

import { TXT_EMAILADDR, TXT_LOGIN, TXT_PASSWS } from "../../../util/config";
import { useRef } from "react";
import ButtonPri from "../../button/btn-pri/ButtonPri";
import styles from "./login.module.css";
import useValidation from "../../../hooks/use-validation";

function Login(props) {
  const emailAddrRef = useRef("");
  const passwdRef = useRef("");

  const [emailIsValid: isValid] = useValidation(emailAddrRef, {
    isEmail: true,
    isPass: false,
  });
  const [passIsValid: isValid] = useValidation(passwdRef, {
    isEmail: false,
    isPass: true,
  });

  return (
    <div
      className={[
        styles["container-main"],
        props.changeView && styles["change-view"],
      ].join(" ")}
    >
      <div className={styles["container-sec"]}>
        <Input
          inputPlaceholder={TXT_EMAILADDR}
          inputRef={emailAddrRef}
          addedClass="auth-input"
          isValid={emailIsValid}
        />
        <Input
          inputPlaceholder={TXT_PASSWS}
          inputRef={passwdRef}
          addedClass="auth-input"
          isValid={passIsValid}
        />
        <ButtonPri value={TXT_LOGIN} isValid={emailIsValid && passIsValid} />
      </div>
    </div>
  );
}

export default Login;
