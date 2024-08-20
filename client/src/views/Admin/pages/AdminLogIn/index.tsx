import React from "react";
import styles from "./Styles.module.css";
import FormInputs from "./components/FormInputs";
import { logIn } from "@/utils/actions/LogIn";

const Index = () => {
  return (
    <div className={styles.Container}>
      <form className={styles.Form} action={logIn} method="POST">
         <FormInputs />
      </form>
     
    </div>
  );
};

export default Index;
