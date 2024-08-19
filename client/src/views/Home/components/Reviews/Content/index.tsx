import React from "react";
import Review from "./Review";
import styles from "./Styles.module.css";


interface DataTypes {
  _id:number;
  name:string;
  job:string;
  comment:string;
  rate:number;
  imageSrc:string;
}


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
