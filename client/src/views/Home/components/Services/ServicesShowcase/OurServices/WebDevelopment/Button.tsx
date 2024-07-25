import React from "react";
import generaleStyle from "../Styles.module.css";

import Link from "next/link";

function Button() {
  return    <button className={generaleStyle.Button}>
  <Link href="/services/web-development">See Details</Link>
</button>
}

export default Button;
