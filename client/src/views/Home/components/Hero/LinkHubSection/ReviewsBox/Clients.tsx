import React from "react";
import Image from "next/image";

function Clients() {
  return (
    <div className=" flex items-center -space-x-2 ">
      <Image
        className="inline-block h-12 w-12 rounded-full ring-2 ring-white bg-white"
        src="/images/p1.jpg"
        alt="client 1"
        width={100}
        height={100}
    
      />
      <Image
        className="inline-block h-12 w-12 rounded-full ring-2 ring-white  bg-white"
        src="/images/p2.jpg"
        alt="client 2"
        width={100}
        height={100}
      />
      <Image
        className="inline-block h-12 w-12 rounded-full ring-2 ring-white  bg-white"
        src="/images/p3.jpg"
        alt="client 3"
        width={100}
        height={100} 
      />
      {/* <Image
        className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
        src="/images/p4.jpg"
        alt="client 4"
        width={100}
        height={100}
      /> */}
    </div>
  );
}

export default Clients;
