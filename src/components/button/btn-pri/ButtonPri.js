import styles from "./button-pri.module.css";

function ButtonPri(props) {
  return (
    <input
      type={props.type || "submit"}
      value={props.value}
      className={[
        styles.button,
        !props.isValid ? styles["btn-invalid"] : styles["btn-valid"],
      ].join(" ")}
    />
  );
}

export default ButtonPri;
