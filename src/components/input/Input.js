import styles from "./input.module.css";

const Input = (props) => {
  return (
    <input
      placeholder={props.inputPlaceholder}
      ref={props.inputRef}
      type={props.inputType || "text"}
      className={[
        styles.input,
        props.addedClass || "",
        !props.isValid && styles["input-invalid"],
      ].join(" ")}
    />
  );
};

export default Input;
