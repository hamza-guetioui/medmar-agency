import React from "react";
import styles from "./Styles.module.css";
import NavigateTo from "./NavigateTo";

const reasons = [
  {
    id: 1,
    title: "Experienced Professionals",
  },
  {
    id: 2,
    title: "Customized Solutions",
  },
  {
    id: 3,
    title: "Proven Track Record",
  },
  {
    id: 4,
    title: "Affordable Pricing",
  },
  {
    id: 5,
    title: "Excellent Customer Support",
  },
];



function Index() {
  return (
    <ul className={styles.Navigation}>
      {reasons.map((reason) => {
        return <NavigateTo key={reason.id} id={reason.id} reason={reason.title} />;
      })}
    </ul>
  );
}

export default Index;
