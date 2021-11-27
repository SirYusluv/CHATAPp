import { CSSTransition } from "react-transition-group";
import { useSelector } from "react-redux";

import styles from "./modal.module.css";
import { useRef } from "react";

function Modal(props) {
  const showModal = useSelector((state) => state.modal.showModal);
  const modalRef = useRef();

  return (
    <CSSTransition
      in={showModal}
      timeout={200}
      nodeRef={modalRef}
      classNames={{
        enter: styles["enter"],
        enterActive: styles["enter-active"],
        exitActive: styles["exit-active"],
        enterDone: styles["enter-done"],
      }}
      mountOnEnter
      unmountOnExit
    >
      <div ref={modalRef} className={styles["modal-container"]}>
        {props.children}
      </div>
    </CSSTransition>
  );
}

export default Modal;
