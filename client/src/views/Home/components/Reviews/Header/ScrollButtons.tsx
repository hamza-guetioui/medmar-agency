"use client"
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";
import { useScroll } from "../scrollContext";

function ScrollButtons() {
  const { handleScroll } = useScroll();

  return (
    <div className="flex justify-center items-center gap-2 mr-4 max-sm:hidden">
      <button
        onClick={() => handleScroll("left")}
        className=" relative w-12 h-12 rounded-full border-2 border-gray-800 text-2xl font-bold"
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>
      <button
        onClick={() => handleScroll("right")}
        className="relative w-12 h-12 rounded-full border-2 border-gray-800 text-2xl font-bold"
      >
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
    </div>
  );
}

export default ScrollButtons;
