import { useState, useEffect, useCallback } from "react";
import { DELAY_DEBOUNCE, MIN_LEN_PASS, MIN_LEN_NAME } from "../util/config";

function isEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

// ref, { isEmail, isPassword, isName, isCompare }, isCompare && refToCompareWith, some view might not be active due to CSSTransistion
function useValidation(reff, config, compareWithRef = null, validate = false) {
  const [isValid, setIsValid] = useState(true);

  const textChangeListener = useCallback(() => {
    let timer;
    return function () {
      clearTimeout(timer);
      timer = setTimeout(() => {
        const currValue = reff.current.value;

        if (config.isEmail) {
          setIsValid(isEmail(currValue));
        } else if (config.isPass) {
          setIsValid(currValue.length >= MIN_LEN_PASS);
        } else if (config.isName) {
          setIsValid(currValue.length >= MIN_LEN_NAME);
        } else if (config.isCompare) {
          setIsValid(currValue === compareWithRef.current.value);
        }
      }, DELAY_DEBOUNCE);
    };
  }, [reff, config, compareWithRef]);

  const focusOutListener = useCallback(() => {
    if (!reff.current.value) setIsValid(false);
  }, [reff]);

  useEffect(() => {
    if (!validate) return;

    const element = reff.current;

    element.addEventListener("input", textChangeListener());
    element.addEventListener("focusout", focusOutListener);

    return () => {
      element.removeEventListener("input", textChangeListener);
      element.removeEventListener("focusout", focusOutListener);
    };
  }, [reff, textChangeListener, focusOutListener, validate]);

  return [isValid];
}

export default useValidation;
