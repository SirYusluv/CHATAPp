import styles from "./button-pri.module.css";

function ButtonPri(props) {
  return (
    <input
      type={props.btnType || "submit"}
      value={props.value}
      onClick={props.click || null}
      className={[
        styles.button,
        !props.isValid ? styles["btn-invalid"] : styles["btn-valid"],
      ].join(" ")}
    />
  );
}

export default ButtonPri;
