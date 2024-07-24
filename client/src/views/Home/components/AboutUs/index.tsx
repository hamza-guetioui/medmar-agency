import React from "react";
import styles from "./Styles.module.css";
import Button from "../Hero/InfoSection/Button";
import VisiteLink from "./VisitLink";

function Index() {
  return (
    <div className={styles.Container}>
      <h1 className="font-extrabold mb-6 text-center" >
        <span className="text-6xl">Contact Us</span> <br />
        <span className="text-2xl">for Unmatched Excellence</span>
      </h1>
      <p className="font-bold mb-10 text-center">
        <span>
          We are here to deliver outstanding results tailored to your needs.
        </span>
        <br />
        <span>
          Reach out to us today and experience our exceptional service
          firsthand.
        </span>
        <br />
        <span>
          If you want to know more about us, visit our{" "}
          <VisiteLink href={"/about"}>About Us</VisiteLink> documentation.
        </span>
      </p>

      <Button />
    </div>
  );
}

export default Index;
