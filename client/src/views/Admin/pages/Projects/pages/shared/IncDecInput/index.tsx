"use client";
import React, { useEffect, useState } from "react";
import styles from "./Styles.module.css";
import { IProjectDetail } from "@/Types";

import TextArea from "./components/TextArea";
import TextInput from "./components/TextInput";
import DelBtn from "./components/DelBtn";
import AddBtn from "./components/AddBtn";

interface Props {
  initialValue?: IProjectDetail[];
}

function Index({ initialValue }: Props) {
  const [data, setData] = useState<IProjectDetail[]>(() => {
    if (initialValue) {
      return initialValue;
    }

    let arr: IProjectDetail[] = [
      { _id: generateRandomId(), feature: "", description: "" },
    ];
    return arr;
  });


  const handleTextInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData((currentData) =>
      currentData.map((item) => {
        if (item._id === event.target.id) {
          return { ...item, feature: event.target.value };
        }
        return item;
      })
    );
  };

  const handleTextArea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setData((currentData) =>
      currentData.map((item) => {
        if (item._id === event.target.id) {
          return { ...item, description: event.target.value };
        }
        return item;
      })
    );
  };

  const handleAdd = () => {
    if (data.length >= 5) return;
    setData((currentData) => [
      ...currentData,
      { _id: generateRandomId(), feature: "", description: "" },
    ]);
  };

  const handleDelete = (_id: string) => {
    if (data.length <= 0) return;
    setData((currentData) => currentData.filter((item) => item._id !== _id));
  };

  return (
    <div className={styles.Container}>
      <input type="hidden" name="details" value={JSON.stringify(data)} />

      <div className={styles.Wrapper}>
        {data.map((item, index) => {
          return (
            <div key={item._id}>
              <div className="flex justify-between items-center pr-4">
                <h3 className={styles.Label}>{`detail-${index + 1}`}</h3>
                <DelBtn handleDelete={() => handleDelete(item._id)} />
              </div>

              <TextInput
                id={item._id}
                v={item.feature}
                length={20}
                handleC={handleTextInput}
              />
              <TextArea
                id={item._id}
                v={item.description}
                length={255}
                handleC={handleTextArea}
              />
            </div>
          );
        })}
      </div>

      <AddBtn handleAdd={handleAdd} />
    </div>
  );
}

export default Index;

function generateRandomId() {
  return Math.floor(Math.random() * 1000000000).toString(); // Generates a random number between 0 and 999,999,999
}
