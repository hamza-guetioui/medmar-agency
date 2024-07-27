import React from "react";
import styles from "./Styles.module.css";
import Link from "next/link";

interface ItemProps {
  color: string;
}

const Item: React.FC<ItemProps> = ({ color }) => {
  return (
    <div className={`${styles.Item} group`} style={{ backgroundColor: color }}>
      <Link href="/works" className=" select-none">
        <div className="text-black opacity-0 group-hover:opacity-90 cursor-pointer">
          <h1 className="font-bold hover:brightness-110 hover:text-secondary-color ">
            Project {color}
          </h1>
          <span className="text-xs ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Item;
