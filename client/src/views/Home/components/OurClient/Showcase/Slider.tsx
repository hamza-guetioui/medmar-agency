import React from "react";
import styles from "./Styles.module.css";
import Item from "./Item";

interface clientsTypes {
  id: number;
  name: string;
}
interface SliderProps {
  clients: clientsTypes[];
}
const Slider: React.FC<SliderProps> = ({ clients }) => {
  return (
    <div className={styles.Slider}>
      <div className={styles.SliderInner}>
        {clients.map((c) => {
          return <Item key={c.id}>{c.name}</Item>;
        })}
      </div>
      <div className={styles.SliderInner}>
        {clients.map((c) => {
          return <Item key={c.id}>{c.name}</Item>;
        })}
      </div>
    </div>
  );
};

export default Slider;
