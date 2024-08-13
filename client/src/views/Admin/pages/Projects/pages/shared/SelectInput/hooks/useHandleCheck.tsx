import React, { useState } from "react";

type InitialValueTypes = {
  id: string;
  title: string;
};

function useHandleCheck(initialValue: InitialValueTypes[]) {
  const [value, setValue] = useState(initialValue);

  function handleCheckbox(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.checked) {
      const obj = { id: event.target.id, title: event.target.value };
      setValue((value) => [...value, obj]);
    } else {
      setValue((value) => value.filter((obj) => obj.id !== event.target.id));
    }
  }

  function handleRadio(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.checked) {
      const obj = { id: event.target.id, title: event.target.value };
      setValue([obj]);
    } else {
      setValue((value) => value.filter((obj) => obj.id === event.target.id));
    }
  }
  return [value, handleCheckbox, handleRadio] as const;
}

export default useHandleCheck;
