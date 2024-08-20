"use client";
import React, { useEffect, useRef } from "react";
import styles from "./Styles.module.css";
import CheckBoxOption from "./CheckBoxOption";

import useHandleCheck from "./hooks/useHandleCheck";
import { IService } from "@/Types";

interface Props {
  id: string;
  type: "checkbox" | "radio";
  name: string;
  label?: string;
  data: IService[];
  initialValue?: IService[];
}

function Index({ type, name, label, data: services, initialValue }: Props) {
  const [serviceIds, handleCheckbox, handleRadio] =
    useHandleCheck(initialValue);

  return (
    <div className={styles.Container}>
      <label className={styles.Label}>{label || name}</label>
      <input type="hidden" name={name} value={JSON.stringify(serviceIds)} />

      <div className={styles.checkboxWrapper}>
        {services.map((service) => {
          let checked = false;
          if (serviceIds) {
            checked = serviceIds.some((serviceId) => serviceId === service._id.toString());
          }

          return (
            <CheckBoxOption
              type={type} // checkbox | radio
              key={service._id}
              id={service._id}
              title={service.title}
              handleChange={type === "checkbox" ? handleCheckbox : handleRadio}
              checked={checked}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Index;
