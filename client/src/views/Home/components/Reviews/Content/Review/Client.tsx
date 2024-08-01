import React from "react";
import Image from "next/image";



interface ClientProps {
    name:string;
    work:string;
    picture:string;
}

const Client:React.FC<ClientProps> = ({name,work,picture}) =>{
  return (
    <div className="flex gap-2 ">
      <Image
        src={`/images/${picture}`}
        width={100}
        height={100}
        alt=""
        className="w-12 h-12 bg-slate-500 rounded-full"
      ></Image>
      <div>
        <h4 className="font-bold">{name}</h4>
        <p>{work}</p>
      </div>
    </div>
  );
}

export default Client;
