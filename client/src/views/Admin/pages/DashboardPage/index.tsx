import React from "react";
import styles from "./Styles.module.css";

type Props = {};

function index({}: Props) {
  return (
    <div className="">
      <div className="flex gap-3 ">
        <div className="h-16 w-1/3 bg-slate-400 rounded-md"></div>
        <div className="h-16 w-1/3 bg-slate-400 rounded-md"></div>
        <div className="h-16 w-1/3 bg-slate-400 rounded-md"></div>
      </div>
      <div className="grid grid-cols-8 grid-rows-2 gap-3 py-3 h-[80vh]">
        <div className=" col-span-5 row-span-1 rounded-md bg-slate-400"></div>
        <div className=" col-span-3 row-span-1 rounded-md bg-slate-400"></div>
        <div className=" col-span-4 row-span-1 rounded-md bg-slate-400"></div>
        <div className=" col-span-4 row-span-1 rounded-md bg-slate-400"></div>
      </div>
    </div>
  );
}

export default index;
