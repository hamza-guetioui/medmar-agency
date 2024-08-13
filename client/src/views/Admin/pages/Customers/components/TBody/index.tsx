import React from "react";
import TRow from "./TRow";

// fetch Customers
import { getCustomers } from "@/utils/actions/Customers";
import { ICustomer } from "@/Types";
import NoResults from "@/shared/Dashboard/NoResults";

const Index = async () => {
  const customers: ICustomer[] = await getCustomers();

  if (customers.length <= 0) {
    return <NoResults />;
  }

  return (
    <tbody>
      {customers.map((customer, index) => {
        return (
          <TRow
            key={customer._id}
            index={index}
            _id={customer._id}
            fullName={customer.fullName}
            jobTitle={customer.jobTitle}
            avatarUrl={customer.avatarUrl}
            testimonial={customer.testimonial}
            rating={customer.rating}
            published={customer.published}
          ></TRow>
        );
      })}
    </tbody>
  );
};

export default Index;
