import React from "react";

function Box() {
  return (
    <div className="w-full relative hover:scale-110 hover:z-50 group">
      <div className="w-fill rounded-xl bottom-9 overflow-hidden bg-slate-400 ">
        <div className="w-full h-52 bg-slate-500"></div>
        <div className="p-2 pl-4">
          <h1 className="font-extrabold mb-2 text-2xl">Project #1</h1>
          <p className="font-bold mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quae. Quisquam, quae. Quisquam, qu
          </p>
        </div>
      </div>
      <span className="bg-slate-400  shadow-lg rounded-xl py-2 px-6 text-black  absolute top-10 -left-6 hidden z-10 group-hover:block">
        Graphic Design

      </span>
      <span className="bg-slate-400 shadow-lg rounded-xl py-2 px-6 text-black  absolute top-20 -right-10 hidden z-10 group-hover:block">
        UI & UX Design

      </span>
      <span className="bg-slate-400 shadow-lg rounded-xl py-2 px-6 text-black  absolute top-40 -left-6 hidden z-10 group-hover:block">
        +30 day
      </span>
    </div>
  );
}

export default Box;
