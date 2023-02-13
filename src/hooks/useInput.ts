import { useState } from "react";

import { useValidation } from "./useValidation";

export const useInput = (initialValue: string, validations:any) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setDirty] = useState(false);
  const valid = useValidation(value, validations);
  const onChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setValue(e.target.value);
  };
  const onBlur = () => {
    setDirty(true);
  };
  return {
    onChange,
    onBlur,
    isDirty,
    ...valid,
  };
};
