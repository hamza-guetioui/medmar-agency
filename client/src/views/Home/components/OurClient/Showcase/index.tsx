import React from "react";
import styles from "../Styles.module.css";
import Slider from "./Slider";

const clients = [
  { id: 1, name: "Dengo" },
  { id: 2, name: "TechWave" },
  { id: 3, name: "Innovatech" },
  { id: 4, name: "BrightSpark" },
  { id: 5, name: "FutureEdge" },
  { id: 6, name: "Synergy" },
  { id: 7, name: "NextGen" },
  { id: 8, name: "Pioneer" },
  { id: 9, name: "Visionary" },
  { id: 10, name: "Quantum" },
  { id: 11, name: "GlobalTech" },
];
function Index() {
  const chunkSize = Math.ceil(clients.length / 3);

  // Create the three sub-arrays
  const clientsPart1 = clients.slice(0, chunkSize);
  const clientsPart2 = clients.slice(chunkSize, chunkSize * 2);
  const clientsPart3 = clients.slice(chunkSize * 2);

  return (
    <div className={styles.ShowcaseWrapper}>
      <div className={styles.Showcase}>
        <Slider clients={clientsPart1} />
        <Slider clients={clientsPart2} />
        <Slider clients={clientsPart3} />
      </div>
    </div>
  );
}

export default Index;
