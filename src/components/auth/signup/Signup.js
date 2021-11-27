import React from "react";
import { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import Input from "../../input/Input";
import ButtonPri from "../../button/btn-pri/ButtonPri";
import styles from "./signup.module.css";
import useValidation from "../../../hooks/use-validation";
import {
  TXT_CONFIRM_PASSWS,
  TXT_EMAILADDR,
  TXT_PASSWS,
  TXT_SIGNUP,
  TXT_USR_NAME,
} from "../../../util/config";
import { useSelector, useDispatch } from "react-redux";
import { toggleModal } from "../../../store/reducers/modal";
import { toggleBackdrop } from "../../../store/reducers/backdrop";

function Signup(props) {
  const emailAddrRef = useRef();
  const passwdRef = useRef();
  const confirmPasswdRef = useRef();
  const usernameRef = useRef();
  const transistionRef = useRef(null);

  const showModal = useSelector((state) => state.modal.showModal);
  const showBackdrop = useSelector((state) => state.backdrop.showBackdrop);
  const dispatchModal = useSelector();
  const dispatchBackdrop = useSelector();

  const [emailIsValid: isValid] = useValidation(
    emailAddrRef,
    {
      isEmail: true,
    },
    null,
    props.changeView
  );
  const [usernameIsValid: isValid] = useValidation(
    usernameRef,
    {
      isEmail: false,
      isName: true,
    },
    null,
    props.changeView
  );
  const [passIsValid: isValid] = useValidation(
    passwdRef,
    {
      isEmail: false,
      isName: false,
      isPass: true,
    },
    null,
    props.changeView
  );
  const [cmPassIsValid: isValid] = useValidation(
    confirmPasswdRef,
    { isEmail: false, isName: false, isPass: false, isCompare: true },
    passwdRef,
    props.changeView
  );

  const signupClickHandler = async () => {
    const username = usernameRef.current.value;
    const emailAddress = emailAddrRef.current.value;
    const password = passwdRef.current.value;

    let toSend = {
      username,
      emailAddress,
      password,
    };

    toSend = JSON.stringify(toSend);

    // try {
    //   const message = await fetch("http://localhost:8080/auth/signup", {
    //     method: "POST",
    //     body: toSend,
    //     headers: {
    //       "Content-Type": "Application/JSON",
    //     },
    //   });

    //   console.log((await message.json()).message);
    // } catch (e) {
    //   console.log("ERROR: ", e.message);
    // }
  };

  return (
    <CSSTransition
      in={props.changeView}
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
            inputPlaceholder={TXT_USR_NAME}
            inputRef={usernameRef}
            addedClass="auth-input"
            isValid={usernameIsValid}
          />
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
            inputType="password"
            isValid={passIsValid}
          />
          <Input
            inputPlaceholder={TXT_CONFIRM_PASSWS}
            inputRef={confirmPasswdRef}
            addedClass="auth-input"
            inputType="password"
            isValid={cmPassIsValid}
          />
          <ButtonPri
            value={TXT_SIGNUP}
            isValid={emailIsValid && passIsValid}
            click={signupClickHandler}
          />
        </div>
      </div>
    </CSSTransition>
  );
}

export default Signup;
