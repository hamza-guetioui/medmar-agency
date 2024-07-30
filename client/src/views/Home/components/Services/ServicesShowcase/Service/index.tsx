"use client";
import React from "react";

import Title from "./Title";
import Button from "./Button";
import Paragraph from "./Paragraph";
import Media from "./Media";

import styles from "./Styles.module.css";

import { useHandleClick } from "../context/handleClickContext";

import { services } from "../data";
import Options from "./Options";

interface ServiceTypes {
  id: number;
  title: string;
  description: string;
  path: string;
  image1: string;
  image2: string;
  video: string;
}

function Index() {
  const { activeValue } = useHandleClick();

  const service = services.filter(
    (service: ServiceTypes) => service.id === activeValue
  );

  return (
    <>
      {service[0] &&
        service.map((s) => {
          return (
            <div key={s.id} className={styles.ServiceBox}>
              <div className={styles.Info}>
                <Title>{s.title}</Title>
                <Paragraph>{s.description}</Paragraph>
                <Options list={s.options} />
                <Button path={s.path} />
              </div>
              <div className={styles.Media}>
                <Media />
              </div>
            </div>
          );
        })}
    </>
  );
}

export default Index;
