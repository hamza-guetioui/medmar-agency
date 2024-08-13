"use client";
import React, { useState } from "react";

import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";

import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Styles.module.css";

type Props = {
  id: number | string;
};

const OptionsBtn = ({ id }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((ps) => !ps);
  return (
    <div className="relative">
      <button
        onClick={handleToggle}
        className={`${styles.ToggleOptionsButton} ${
          isOpen ? "bg-slate-400/80" : ""
        }`}
      >
        <FontAwesomeIcon icon={faEllipsisVertical} />
      </button>

      <ul
        className={`${!isOpen ? "hidden" : "flex flex-col"} ${
          styles.OptionsList
        }`}
      >
        <li className="group hover:bg-slate-300/30">
          <EditButton id={id} />
        </li>
        <li className="group hover:bg-slate-300/30">
          <DeleteButton id={id} />
        </li>
      </ul>
    </div>
  );
};

export default OptionsBtn;
