import React from "react";
import TRow from "./TRow";

// fetch Customers
import { getCustomers } from "@/utils/actions/Customers";
import { ICustomer } from "@/Types";
import NoResults from "@/shared/Dashboard/NoResults";

const Index = async () => {
  const customers: ICustomer[] = await getCustomers() || [];

  if (customers.length <= 0) {
    return <NoResults />;
  }

  return (
    <tbody>
      {customers.map((customer, index) => {
        return (
          <TRow
            key={customer._id.toString()}
            index={index}
            {...customer}
          ></TRow>
        );
      })}
    </tbody>
  );
};

export default Index;
