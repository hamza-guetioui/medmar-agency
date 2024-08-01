"use client";
import React from "react";
import Review from "./Review";
import styles from "./Styles.module.css";

import { useScroll } from "../scrollContext";

interface DataTypes {
  id:number;
  name:string;
  work:string;
  text:string;
  stars:number;
  picture:string;
}

const reviews: DataTypes[]  = [
  {
    id: 1,
    name: "Mr. Alice Johnson",
    work: "Software Engineer",
    text: "Great experience with this company. Highly recommend their services!",
    stars: 4.5,
    picture: "p1.jpg",
  },
  {
    id: 2,

    name: "Mme. Bob Smith",
    work: "Product Manager",
    text: "The team was very professional and delivered on time.",
    stars: 4.0,
    picture: "p2.jpg",
  },
  {
    id: 3,
    name: "Mr. Catherine Lee",
    work: "UX Designer",
    text: "Loved working with them. The end result was exactly what I was looking for.",
    stars: 4.8,
    picture: "p3.jpg",
  },
  {
    id: 4,
    name: "Mme. David Wilson",
    work: "Data Scientist",
    text: "Good service but communication could be improved.",
    stars: 3.7,
    picture: "p1.jpg",
  },
  {
    id: 5,
    name: "Mr. Eva Davis",
    work: "Marketing Specialist",
    text: "Amazing work! Would definitely collaborate again.",
    stars: 5.0,
    picture: "p3.jpg",
  },
  {
    id: 6,
    name: "Mme. Laura Green",
    work: "Graphic Designer",
    text: "The design work exceeded my expectations. Very creative team!",
    stars: 4.6,
    picture: "p1.jpg",
  },
  {
    id: 7,
    name: "Mr. John Doe",
    work: "Web Developer",
    text: "Efficient and effective. Delivered a top-notch product in record time.",
    stars: 4.2,
    picture: "p2.jpg",
  },
  {
    id: 8,
    name: "Mme. Jessica Brown",
    work: "Content Writer",
    text: "Fantastic content that perfectly captured our brand's voice. Highly recommend.",
    stars: 4.9,
    picture: "p3.jpg",
  },
  {
    id: 9,
    name: "Mr. Michael Smith",
    work: "SEO Specialist",
    text: "Great SEO strategies that significantly boosted our search rankings.",
    stars: 4.3,
    picture: "p2.jpg",
  },
  {
    id: 10,
    name: "Mme. Sophia Wilson",
    work: "Social Media Manager",
    text: "Exceptional social media management and engagement. Very pleased with the results.",
    stars: 4.7,
    picture: "p1.jpg",
  },
];

function Index() {
  const { scrollRef } = useScroll();
  return (
    <div className={styles.Container} ref={scrollRef}>
      {reviews.map((review) => (
        <Review key={review.id} data={review} />
      ))}
    </div>
  );
}

export default Index;
