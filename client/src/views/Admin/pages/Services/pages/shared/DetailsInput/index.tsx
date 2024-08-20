"use client";
import React, { useState } from "react";
import styles from "./Styles.module.css";

import mongoose from "mongoose";
import TextInput from "./TextInput";
import { IServiceDetail } from "@/Types";
import { faPlus, faSquareMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  name: string;
  label?: string;
  min: number;
  max: number;
  initialValue?: IServiceDetail[];
}

function Index({ label, name, min, max, initialValue }: Props) {
  const [data, setData] = useState<IServiceDetail[]>(() => {
    if (initialValue) {
      return initialValue;
    }
    let arr: IServiceDetail[] = [];
    for (let i = 1; i <= min; i++) {
      arr = [...arr, { _id: generateObjectId().toString(), detail: "" }];
    }
    return arr;
  });

  const handleTextInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData((pData) =>
      pData.map((d) => {
        if (d._id.toString() === event.target.id) {
          return { ...d, detail: event.target.value };
        }
        return d;
      })
    );
  };

  const handleAdd = () => {
    if (data.length >= max) return;
    setData((pData) => [...pData, { _id: generateObjectId().toString(), detail: "" }]);
  };
  const handleDelete = (id: string) => {
    if (data.length <= min) return;
    setData((pData) => pData.filter((d) => d._id.toString() !== id));
  };

  return (
    <div className={styles.Container}>
      <input type="hidden" name="details" value={JSON.stringify(data)} />
      <label className={styles.Label}>{label || name}</label>

      <div className={styles.Wrapper}>
        {data.map((item) => {
          return (
            <div
              key={item._id.toString()}
              className="flex gap-2 items-center w-full mb-3"
            >
              <TextInput
                id={item._id.toString()}
                v={item.detail}
                length={20}
                initialValue={item.detail}
                handleC={handleTextInput}
              />
              <label
                htmlFor="del"
                className="text-red-500/80 hover:text-red-500 flex justify-center items-center rounded-md self-end"
              >
                <input
                  id="del"
                  type="button"
                  onClick={() => handleDelete(item._id.toString())}
                  disabled={data.length <= min}
                />
                <FontAwesomeIcon icon={faSquareMinus} className="h-10 w-10" />
              </label>
            </div>
          );
        })}
      </div>
      <label
        htmlFor="add"
        className="bg-green-500 text-white py-2 px-4 rounded-md mr-4 self-end w-fit"
      >
        <input
          id="add"
          type="button"
          onClick={handleAdd}
          disabled={data.length >= max}
        />
        <FontAwesomeIcon icon={faPlus} />
      </label>
    </div>
  );
}

export default Index;

function generateObjectId(): mongoose.Types.ObjectId {
  return new mongoose.Types.ObjectId();
}
