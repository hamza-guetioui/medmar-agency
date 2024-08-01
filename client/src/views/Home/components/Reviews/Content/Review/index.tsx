import React from "react";
import Icon from "./Icon";
import Stars from "./Stars";
import Text from "./Text";
import Client from "./Client";
import styles from "./Styles.module.css";

interface DataTypes {
  id: number;
  name: string;
  work: string;
  text: string;
  stars: number;
  picture: string;
}

interface ReviewProps {
  data: DataTypes;
}

const Review: React.FC<ReviewProps> = ({ data }) => {
  const { name, work, text, stars, picture } = data;

  return (
    <div className={styles.Review}>
      <Icon />
      <Stars number={stars} />
      <Text>{text}</Text>
      <Client name={name} picture={picture} work={work} />
    </div>
  );
};

export default Review;
