import { useState, useEffect, useCallback } from "react";
import { DELAY_DEBOUNCE, PASS_MIN_LENGTH } from "../util/config";

function isEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

// ref, { isEmail, isPassword }
function useValidation(reff, config) {
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
          setIsValid(currValue.length > PASS_MIN_LENGTH);
        }
      }, DELAY_DEBOUNCE);
    };
  }, [reff, config]);

  const focusOutListener = useCallback(() => {
    if (!reff.current.value) setIsValid(false);
  }, [reff]);

  useEffect(() => {
    const element = reff.current;

    element.addEventListener("input", textChangeListener());
    element.addEventListener("focusout", focusOutListener);

    return () => {
      element.removeEventListener("input", textChangeListener);
      element.removeEventListener("focusout", focusOutListener);
    };
  }, [reff, textChangeListener, focusOutListener]);

  return [isValid];
}

export default useValidation;
