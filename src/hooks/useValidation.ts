import { useEffect, useState } from "react";

export const useValidation = (value: string, validations: []) => {
  const [isEmpty, setEmpty] = useState(true);
  const [minLengthError, setMinLengthError] = useState(false);
  const [maxLengthError, setMaxLengthError] = useState(false);
  const [inputValid, setInputValid] = useState(true);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case "minLength":
          value.length < validations[validation]
            ? setMinLengthError(true)
            : setMinLengthError(false);
          break;
        case "isEmpty":
          value ? setEmpty(false) : setEmpty(true);
          break;
        case "maxLength":
          value.length > validations[validation]
            ? setMaxLengthError(true)
            : setMaxLengthError(false);
          break;
      }
    }
  }, [value]);

  useEffect(() => {
    const Error = isEmpty || maxLengthError || minLengthError;
    Error ? setInputValid(false) : setInputValid(true);
  }, [isEmpty, maxLengthError, minLengthError]);

  return {
    value,
    isEmpty,
    minLengthError,
    maxLengthError,
    inputValid,
  };
};
