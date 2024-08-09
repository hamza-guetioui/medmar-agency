"use client";
import React, { useState } from "react";
import InputText from "./InputText";
import InputPassword from "./InputPassword";
import Title from "./Title";
import styles from "./Styles.module.css";
import SubmitButton from "./SubmitButton";
import { logIn } from "@/utils/action";

type Props = {};

const Form = (props: Props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = { username, password };
    await logIn(formData);
  };
  return (
    <form className={styles.Form} onSubmit={handleSubmit}>
      
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
    </form>
  );
};

export default Form;
