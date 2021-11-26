import React from "react";
import { useRef } from "react";

import { CSSTransition } from "react-transition-group";

import { TXT_EMAILADDR, TXT_LOGIN, TXT_PASSWS } from "../../../util/config";

import ButtonPri from "../../button/btn-pri/ButtonPri";
import Input from "../../input/Input";

import styles from "./login.module.css";

import useValidation from "../../../hooks/use-validation";

function Login(props) {
  const emailAddrRef = useRef("");
  const passwdRef = useRef("");
  const transistionRef = useRef(null);

  const [emailIsValid: isValid] = useValidation(
    emailAddrRef,
    {
      isEmail: true,
      isPass: false,
    },
    null,
    !props.changeView
  );
  const [passIsValid: isValid] = useValidation(
    passwdRef,
    {
      isEmail: false,
      isPass: true,
    },
    null,
    !props.changeView
  );

  return (
    <CSSTransition
      in={!props.changeView}
      timeout={200}
      nodeRef={transistionRef}
      classNames={{
        enter: styles["enter"],
        enterActive: styles["enter-active"],
        exitActive: styles["exit-active"],
      }}
      mountOnEnter
      unmountOnExit
    >
      <div
        className={[styles["container-main"]].join(" ")}
        ref={transistionRef}
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
    </CSSTransition>
  );
}

export default Login;
