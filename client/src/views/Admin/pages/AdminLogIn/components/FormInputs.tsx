"use client";
import React, { useState } from "react";
import InputText from "./InputText";
import InputPassword from "./InputPassword";
import Title from "./Title";
import SubmitButton from "./SubmitButton";

const FormInputs = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Title />
      <InputText
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <InputPassword
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <SubmitButton />
    </>
  );
};

export default FormInputs;
