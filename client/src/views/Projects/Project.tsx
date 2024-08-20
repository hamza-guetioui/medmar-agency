import { IProjectData } from "@/Types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Project({
  _id,
  previewImage,
  title,
  description,
  details,
}: IProjectData) {
  return (
    <Link href={`/works/${_id}`}>
      <div className="w-full h-full relative group hover:scale-110 hover:z-50 transition-transform duration-300 ease-in-out">
        <div className="w-full h-full rounded-xl overflow-hidden bg-slate-300">
          <div className="w-full h-52 overflow-hidden">
            <Image
              src={`/uploads/${previewImage}`}
              className="min-h-full min-w-full object-cover"
              width={200}
              height={150}
              alt="Project Image"
            />
          </div>
          <div className="p-2 pl-4">
            <h1 className="font-extrabold mb-2 text-2xl">{title}</h1>
            <p className="font-bold mb-2">{description}</p>
          </div>
        </div>
        {details?.map((details) => (
          <span
            key={details._id.toString()}
            className="bg-slate-400 shadow-lg rounded-xl py-2 px-6 text-black absolute top-10 -left-6 transition-opacity duration-300 opacity-0 group-hover:opacity-100 z-10"
          >
            {details?.feature}
          </span>
        ))}
      </div>
    </Link>
  );
}

export default Project;
