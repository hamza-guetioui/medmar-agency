import React from "react";
import styles from "./Styles.module.css";
import State from "./State";

const states = [
  {
    count: 40,
    label: "Happy Customers",  
  },
  {
    count: 20,
    label: "Expert Members  ", 
  },
  {
    count: 100,
    label: "Finished Projects", 
  },
  {
    count: 10,
    label: "Years of Service", 
  },
];


function Index() {
  return (
    <div className={styles.StateBox}>
      {states.map((state, index) => (
        <State key={index} count={state.count} label={state.label} />
      ))}
    </div>
  );
}

export default Index;
