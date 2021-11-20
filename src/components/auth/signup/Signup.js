import React from "react";
import { useRef } from "react";
import {
  TXT_CONFIRM_PASSWS,
  TXT_EMAILADDR,
  TXT_PASSWS,
  TXT_SIGNUP,
} from "../../../util/config";

import Input from "../../input/Input";
import ButtonPri from "../../button/btn-pri/ButtonPri";

import styles from "./signup.module.css";
import useValidation from "../../../hooks/use-validation";

function Signup(props) {
  const emailAddrRef = useRef();
  const passwdRef = useRef();
  const confirmPasswdRef = useRef();

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
        <Input
          inputPlaceholder={TXT_CONFIRM_PASSWS}
          inputRef={confirmPasswdRef}
          addedClass="auth-input"
          isValid={true}
        />
        <ButtonPri value={TXT_SIGNUP} isValid={emailIsValid && passIsValid} />
      </div>
    </div>
  );
}

export default Signup;
