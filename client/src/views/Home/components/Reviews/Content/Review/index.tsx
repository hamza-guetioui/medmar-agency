import React from "react";
import Icon from "./Icon";
import Stars from "./Stars";
import Text from "./Text";
import Client from "./Client";
import styles from "./Styles.module.css";

interface DataTypes {
  _id:number;
  name:string;
  job:string;
  comment:string;
  rate:number;
  imageSrc:string;
}


interface ReviewProps {
  data: DataTypes;
}

const Review: React.FC<ReviewProps> = ({ data }) => {
  const { name, job, comment, rate,imageSrc

   } = data;

  return (
    <div className={styles.Review}>
      <Icon />
      <Stars number={rate} />
      <Text>{comment}</Text>
      <Client name={name} picture={imageSrc} work={job} />
    </div>
  );
};

export default Review;
