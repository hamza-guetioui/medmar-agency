"use client";
import React, { useState } from "react";

import mongoose from "mongoose";

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
      { _id: generateObjectId(), feature: "", description: "" },
    ];
    return arr;
  });

  const handleTextInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData((currentData) =>
      currentData.map((item) => {
        if (item._id.toString() === event.target.id) {
          return { ...item, feature: event.target.value };
        }
        return item;
      })
    );
  };

  const handleTextArea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setData((currentData) =>
      currentData.map((item) => {
        if (item._id.toString() === event.target.id) {
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
      { _id: generateObjectId(), feature: "", description: "" },
    ]);
  };

  const handleDelete = (_id: string) => {
    if (data.length <= 0) return;
    setData((currentData) =>
      currentData.filter((item) => item._id.toString() !== _id)
    );
  };

  return (
    <div className={styles.Container}>
      <input type="hidden" name="details" value={JSON.stringify(data)} />

      <div className={styles.Wrapper}>
        {data.map((item, index) => {
          return (
            <div key={item._id.toString()}>
              <div className="flex justify-between items-center pr-4">
                <h3 className={styles.Label}>{`detail-${index + 1}`}</h3>
                <DelBtn
                  handleDelete={() => handleDelete(item._id.toString())}
                />
              </div>

              <TextInput
                id={item._id.toString()}
                v={item.feature}
                length={20}
                handleC={handleTextInput}
              />
              <TextArea
                id={item._id.toString()}
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

function generateObjectId(): mongoose.Types.ObjectId {
  return new mongoose.Types.ObjectId();
}
