import React from "react";

function Card() {
  return (
    <div className="w-96 p-6 h-96 bg-slate-400/40 rounded-xl shadow-lg overflow-hidden relative pt-20">
      <span className="text-8xl absolute top-4 left-4">{"''"}</span>

      <p className="flex flex-col text-xl font-bold">
        <span>  Et hic quasi consectetur odio debitis.</span>
        <span>  Et hic quasi consectetur odio debitis.</span>
        <span>  Et hic quasi consectetur odio debitis.</span>
        <span>  Et hic quasi consectetur odio debitis.</span>
      </p>
    </div>
  );
}

export default Card;
