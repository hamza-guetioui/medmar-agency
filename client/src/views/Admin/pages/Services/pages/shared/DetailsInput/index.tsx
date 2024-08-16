"use client";
import React, { useState } from "react";
import styles from "./Styles.module.css";

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
      arr = [...arr, { _id: i.toString(), detail: "" }];
    }
    return arr;
  });

  const handleTextInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData((pData) =>
      pData.map((d) => {
        if (d._id === event.target.id) {
          return { ...d, detail: event.target.value };
        }
        return d;
      })
    );
  };

  const handleAdd = () => {
    if (data.length >= max) return;
    setData((pData) => [
      ...pData,
      { _id: (pData.length + 1).toString(), detail: "" },
    ]);
  };
  const handleDelete = (id: string) => {
    if (data.length <= min) return;
    setData((pData) => pData.filter((d) => d._id !== id));
  };

  return (
    <div className={styles.Container}>
      <input type="hidden" name="details" value={JSON.stringify(data)} />
      <label className={styles.Label}>{label || name}</label>

      <div className={styles.Wrapper}>
        {data.map((item) => {
          return (
            <div key={item._id} className="flex gap-2 items-center w-full mb-3">
              <TextInput
                id={item._id}
                v={item.detail}
                length={20}
                initialValue={item.detail}
                handleC={handleTextInput}
              />
              <input
                type="button"
                onClick={() => handleDelete(item._id)}
                className="text-red-500/80 hover:text-red-500 flex justify-center items-center rounded-md self-end"
                disabled={data.length <= min}
              >
                <FontAwesomeIcon icon={faSquareMinus} className="h-10 w-10" />
              </input>
            </div>
          );
        })}
      </div>
      <input
        type="button"
        onClick={handleAdd}
        className="bg-green-500 text-white py-2 px-4 rounded-md mr-4 self-end w-fit"
        disabled={data.length >= max}
      >
        <FontAwesomeIcon icon={faPlus} />
      </input>
    </div>
  );
}

export default Index;
