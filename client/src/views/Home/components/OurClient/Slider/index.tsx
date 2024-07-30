import React from "react";
import styles from "./Styles.module.css";
import Item from "./Item";

const clients = [
  {
    id: 1,
    name: "Dengo",
  },
  {
    id: 2,
    name: "TechWave Solutions",
  },
  {
    id: 3,
    name: "Innovatech Labs",
  },
  {
    id: 4,
    name: "BrightSpark Enterprises",
  },
  {
    id: 5,
    name: "FutureEdge Corp",
  },
  {
    id: 6,
    name: "Synergy Networks",
  },
  {
    id: 7,
    name: "NextGen Innovations",
  },
  {
    id: 8,
    name: "Pioneer Systems",
  },
  {
    id: 9,
    name: "Visionary Holdings",
  },
  {
    id: 10,
    name: "Quantum Dynamics",
  },
  {
    id: 11,
    name: "GlobalTech Services",
  },
];

function Index() {
  return (
    <div className={styles.Slider}>
      {clients.map((c) => {
        return <Item key={c.id}>{c.name}</Item>
      })}
      <div className={styles.SliderInner}>
        <Item>FaceBook</Item>
        <Item>Instagram</Item>
        <Item>Twitter</Item>
        <Item>Whatsapp</Item>
        <Item>Figma</Item>
      </div>
      <div className={styles.SliderInner}>
        <Item>FaceBook</Item>
        <Item>Instagram</Item>
        <Item>Twitter</Item>
        <Item>Whatsapp</Item>
        <Item>Figma</Item>
      </div>
    </div>
  );
}

export default Index;
