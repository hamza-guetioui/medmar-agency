import React from "react";
import styles from './Styles.module.css'

function Intro() {
  return (
    <div className={styles.Intro}>
      <h1 className="text-4xl lg:text-6xl font-bold mb-4">
        <span>Our Regular</span> <br />
        <span className="text-6xl lg:text-7xl text-primary-color">Clients</span> 
      </h1>
      <p className=" lg:text-lg font-semibold">
        Our extensive experience with high-profile projects ensures we deliver
        exceptional results every time.
      </p>
    </div>
  );
}

export default Intro;
