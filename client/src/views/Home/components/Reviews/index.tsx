import React from "react";
import Card from "./Card";

function Index() {
  return (
    <div className="p-4 bg-slate-400/30 ">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-6xl font-extrabold text-center p-6">Client Reviews</h1>
        <div className="flex gap-7 items-center justify-between">
          <Card/>
          <div className="scale-105">

          <Card/>
          </div>
          <Card/>

        </div>
      </div>
    </div>
  );
}

export default Index;
