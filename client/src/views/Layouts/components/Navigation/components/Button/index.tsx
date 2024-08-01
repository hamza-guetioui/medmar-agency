import React from "react";
import styles from "./Styles.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneFlip } from "@fortawesome/free-solid-svg-icons";

function Index() {
  return (
    <button className={styles.Button} >
      <Link href="/contact" className="max-md:hidden">
        <span> Connect with Us</span>
      </Link>
      <Link href={"tel:+900300400"} className="md:hidden" >
         <FontAwesomeIcon icon={faPhoneFlip}  />
      </Link>
     
    </button>
  );
}

export default Index;
