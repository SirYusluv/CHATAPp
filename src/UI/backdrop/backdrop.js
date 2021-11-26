import { createPortal } from "react-dom";

import { CSSTransition } from "react-transition-group";

import styles from "./backdrop.module.css";

const DOMbackdrop = document.getElementById("backdrop");

function Backdrop() {
  const toRender = (
    <CSSTransition in={} timeout={200}
        classNames={{
            enter: styles.enter,
            enterActive: styles["enter-active"],
            exit: styles["exit"],
            exitActive: styles["exit-active"],
        }} 
        mountOnEnter
        unmountOnExit>
      <div className={styles.backdrop}></div>
    </CSSTransition>
  );

  return createPortal(toRender, DOMbackdrop);
}

export default Backdrop;
