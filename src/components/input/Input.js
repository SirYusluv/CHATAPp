import styles from "./input.module.css";

const Input = (props) => {
  return (
    <input
      placeholder={props.inputPlaceholder}
      ref={props.inputRef}
      className={[
        styles.input,
        props.addedClass || "",
        !props.isValid && styles["input-invalid"],
      ].join(" ")}
    />
  );
};

export default Input;
