import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";
import { useSelector, useDispatch } from "react-redux";
import { hideBackdrop } from "../../store/reducers/backdrop";

import styles from "./backdrop.module.css";
import { useRef } from "react";

const DOMbackdrop = document.getElementById("backdrop");

function Backdrop() {
  const showBackdrop = useSelector((state) => state.backdrop.showBackdrop);
  const dispatch = useDispatch();
  const backdropRef = useRef();

  const toRender = (
    <CSSTransition
      in={showBackdrop}
      timeout={200}
      nodeRef={backdropRef}
      classNames={{
        enter: styles["enter"],
        enterActive: styles["enter-active"],
        exitActive: styles["exit-active"],
      }}
      mountOnEnter
      unmountOnExit
    >
      <div
        onClick={() => dispatch(hideBackdrop())}
        ref={backdropRef}
        className={styles.backdrop}
      ></div>
    </CSSTransition>
  );

  return createPortal(toRender, DOMbackdrop);
}

export default Backdrop;
