import React from "react";
import Intro from "./Intro";
import Showcase from "./Showcase";

function Index() {
  return (
    <div className="grid grid-cols-9 m-20 bg-slate-300 h-60%  mx-auto overflow-hidden">
      <Intro />
      <Showcase />
    </div>
  );
}

export default Index;
