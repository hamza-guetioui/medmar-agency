import React from "react";
import Image from "next/image";

interface ClientProps {
  fullName: string;
  jobTitle: string;
  avatar: string;
}

const Client: React.FC<ClientProps> = ({ fullName, jobTitle, avatar }) => {
  return (
    <div className="flex gap-2 ">
      <Image
        src={`/uploads/${avatar}`}
        width={100}
        height={100}
        alt=""
        className="w-12 h-12 bg-slate-500 rounded-full"
      ></Image>
      <div>
        <h4 className="font-bold">{fullName}</h4>
        <p
          className={`font-bold ${
            jobTitle.length > 17 ? "text-xs font-extrabold" : "text-base"
          }`}
        >
          {jobTitle}
        </p>
      </div>
    </div>
  );
};

export default Client;
