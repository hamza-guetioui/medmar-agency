import React from "react";
import styles from "./Styles.module.css";
import NavigateTo from "./NavigateTo";

const Services = [
  {
    id:1,
    name: "Digital Marketing",
  },
  {
    id:2,
    name: "Graphic Design",
  },
  {
    id:3,
    name: "Photography",
  },
  {
    id:4,
    name: "Video Editing",
  },
  {
    id:5,
    name: "Web Development",
  },
];

function Index() {


  return (
    <div className={styles.Navigation}>
      {Services.map((service) => {
        // const active = service.name =
        return <NavigateTo key={service.id} service={service.name}  />;
      })}
    </div>
  );
}

export default Index;
