import React from "react";
import Icon from "./Icon";
import Stars from "./Stars";
import Text from "./Text";
import Client from "./Client";
import styles from "./Styles.module.css";
import { ICustomer } from "@/Types";



const Review= ({ rating , testimonial , jobTitle ,fullName ,avatar } : ICustomer) => {

  return (
    <div className={styles.Review}>
      <Icon />
      <Stars number={rating} />
      <Text>{testimonial}</Text>
      <Client fullName={fullName} avatar={avatar} jobTitle={jobTitle} />
    </div>
  );
};

export default Review;
