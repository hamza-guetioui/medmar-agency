import React from "react";

function StatesBox() {
  return (
    <div  className="absolute bottom-0 left-1/3 -translate-x-1/3 flex gap-8 items-center justify-around w-5/6 h-1/6 bg-white/40 
    backdrop-filter backdrop-blur-md rounded-xl py-4 px-2 text-center shadow-lg">
      <div className="flex flex-col items-center">
        <span className="text-2xl font-semibold">40+</span>
        <span className="text-xs font-bold">Happy Clients</span>{" "}
      </div>
      <div className="flex flex-col items-center">
        <span className="text-2xl font-semibold">20+ </span>
        <span className="text-xs font-bold">Expert Team Members</span>{" "}
      </div>
      <div className="flex flex-col items-center">
        <span className="text-2xl font-semibold">100+</span>
        <span className="text-xs font-bold">Completed Projects</span>{" "}
      </div>
      <div className="flex flex-col items-center">
        <span className="text-2xl font-semibold">10+</span>
        <span className="text-xs font-bold"> Years of Experience</span>{" "}
      </div>
    </div>
  );
}

export default StatesBox;
