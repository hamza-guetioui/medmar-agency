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



import { getReviews } from "@/utils/action";
import ShowCase from "./ShowCase";

async function Index() {
 const reviews : DataTypes[] = await getReviews()
  return (
    <ShowCase>
      {reviews.map((review) => (
        <Review key={review._id} data={review} />
      ))}
    </ShowCase>
  );
}

export default Index;
