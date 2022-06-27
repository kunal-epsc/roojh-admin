import React, { useState } from "react";

const useAuthInput = (validateValue: any) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError: boolean = !valueIsValid && isTouched;

  const valueChangeHandler = (e: React.SyntheticEvent | string) => {
    if (typeof e === "string") {
      setEnteredValue(e);
      setIsTouched(false);
      return;
    }

    const input = e.target as HTMLInputElement;
    setEnteredValue(input.value);
  };

  const valueTouchedHandler = (e: React.SyntheticEvent) => {
    setIsTouched(true);
  };

  return {
    value: enteredValue,
    hasError,
    valueChangeHandler,
    valueTouchedHandler,
  };
};

export default useAuthInput;
