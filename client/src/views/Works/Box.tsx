import Image from "next/image";
import Link from "next/link";
import React from "react";

function Box() {
  return (
   <Link href="/works/2">
    <div className="w-full relative group hover:scale-110 hover:z-50 transition-transform duration-300 ease-in-out">
      <div className="w-full rounded-xl overflow-hidden bg-slate-400">
        <div className="w-full h-52 bg-slate-500">
          <Image
            src="/images/project2.jpeg"
            className="min-h-full min-w-full object-cover"
            width={200}
            height={150}
            alt="Project Image"
          />
        </div>
        <div className="p-2 pl-4">
          <h1 className="font-extrabold mb-2 text-2xl">Project #1</h1>
          <p className="font-bold mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quae. Quisquam, quae. Quisquam, quae.
          </p>
        </div>
      </div>
      <span className="bg-slate-400 shadow-lg rounded-xl py-2 px-6 text-black absolute top-10 -left-6 transition-opacity duration-300 opacity-0 group-hover:opacity-100 z-10">
        Graphic Design
      </span>
      <span className="bg-slate-400 shadow-lg rounded-xl py-2 px-6 text-black absolute top-20 -right-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100 z-10">
        UI & UX Design
      </span>
      <span className="bg-slate-400 shadow-lg rounded-xl py-2 px-6 text-black absolute top-40 -left-6 transition-opacity duration-300 opacity-0 group-hover:opacity-100 z-10">
        +30 days
      </span>
    </div>
   </Link>
  );
}

export default Box;
