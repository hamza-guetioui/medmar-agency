import React from "react";
import Review from "./Review";



import ShowCase from "./ShowCase";
import { ICustomer } from "@/Types";
import { getCustomers } from "@/utils/actions/Customers";

async function Index() {
 const customers : ICustomer[] = await getCustomers()

  return (
    <ShowCase>
      {customers.filter((customer => customer.published === true)).map((customer) => (
        <Review key={customer._id.toString()} {...customer} />
      ))}
    </ShowCase>
  );
}

export default Index;
