import React from "react";
import Icon from "./Icon";
import Image from "next/image";
import Stars from "./Stars";

function Index() {
  return (
    <div className=" p-6 p-t bg-white border-2 shadow-md rounded-xl  overflow-hidden relative pt-20">
      <Icon/>
      <Stars/>
      <p className=" w-64 h-40 font-semibold">
       The ear cushions are soft and plush, and the adjustable headband ensures a perfect fit without any discomfort. I often wear them for several hours at a time without any issues.
      </p>
      <div className="flex gap-2 ">
        <Image src="/images/p1.jpg" width={100} height={100} alt=""  className="w-12 h-12 bg-slate-500 rounded-full"></Image>
        <div>
          <h4 className="font-bold">Mr. Jhone</h4>
          <p>CEO In X</p>
        </div>
      </div>
    </div>
  );
}

export default Index;
