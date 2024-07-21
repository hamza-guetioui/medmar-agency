"use client"
import React from "react";
import DigitalMarketing from "./DigitalMarketing";
import GraphicDesign from "./GraphicDesign";
import Photography from "./Photography";
import VideoEditing from "./VideoEditing";
import WebDevelopment from "./WebDevelopment";
import { useHandleClick } from "../context";
import styles from "./Styles.module.css";

const Index: React.FC = () => {
  const { activeValue } = useHandleClick();

  const renderComponent = () => {
    switch (activeValue) {
      case "Digital Marketing":
        return <DigitalMarketing />;
      case "Graphic Design":
        return <GraphicDesign />;
      case "Photography":
        return <Photography />;
      case "Video Editing":
        return <VideoEditing />;
      case "Web Development":
        return <WebDevelopment />;
      default:
        return <DigitalMarketing />; // Default component
    }
  };

  return (
    <div className={styles.ServiceBox}>
      {renderComponent()}
    </div>
  );
};

export default Index;