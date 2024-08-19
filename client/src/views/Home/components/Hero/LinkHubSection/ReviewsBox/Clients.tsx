"use client"
import React, { useMemo } from "react";
import Image from "next/image";
import { ICustomer } from "@/Types";

interface ClientsProps {
  customers: ICustomer[];
}
function Clients({ customers }: ClientsProps) {
  const SomeCustomers = useMemo(() => customers.slice(0, 4), [customers]);

  return (
    <div className=" flex items-center -space-x-2 ">
      {SomeCustomers.map((customer: ICustomer) => (
        <div
          key={customer._id.toString()}
          className="h-12 w-12 rounded-full overflow-hidden bg-slate-200 ring-2 ring-white"
        >
          <Image
            className=" w-full h-full "
            src={`/uploads/${customer.avatar}`}
            alt=""
            width={100}
            height={100}
          />
        </div>
      ))}
    </div>
  );
}

export default Clients;
