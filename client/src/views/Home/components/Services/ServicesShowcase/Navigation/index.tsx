import React from "react";
import styles from "./Styles.module.css";

import NavigateTo from "./NavigateTo";

import { services } from "../data";



interface ServiceTypes {
  id: number;
  title: string;
  description: string;
  image1: string;
  image2: string;
  video: string;
}

function Index() {



  return (
    <div className={styles.Navigation}>
      {services.map((service: ServiceTypes) => {
        return (
          <NavigateTo key={service.id} id={service.id} >
            {service.title}
          </NavigateTo>
        );
      })}
    </div>
  );
}

export default Index;
