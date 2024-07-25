import React from 'react';
import styles from './Styles.module.css';

interface ItemProps {
  color: string;
}

const Item: React.FC<ItemProps> = ({ color }) => {
  return (
    <div
      className={styles.Item}
      style={{ backgroundColor: color }}
    ></div>
  );
};

export default Item;