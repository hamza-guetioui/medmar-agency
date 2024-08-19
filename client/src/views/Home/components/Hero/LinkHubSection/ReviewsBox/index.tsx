import React from "react";

import styles from "./Styles.module.css";
import Clients from "./Clients";
import LinkButton from "./LinkButton";
import { getCustomers } from "@/utils/actions/Customers";
import { ICustomer } from "@/Types";
async function ReviwesBox() {
  const customers: ICustomer[] = await getCustomers();
  return (
    <div className={styles.ReviewsBox}>
      <div className={styles.Head}>
        <Clients customers={customers} />
        <LinkButton />
      </div>
      <div className={styles.Base}>
        <div className={styles.BaseNumber}>
          {"+"}
          {
            customers.filter((customer) => customer.published === true).length
          }{" "}
        </div>
        <p className={styles.BaseText}>
          <span>see what people</span>
          <span>says about Us ?</span>
        </p>
      </div>
    </div>
  );
}

export default ReviwesBox;
