"use client";
import React, { useState } from "react";
import styles from "./Styles.module.css";
import { IProjectDetail } from "@/Types";

import TextArea from "./components/TextArea";
import TextInput from "./components/TextInput";

interface Props {
  initialValue?: IProjectDetail[];
}

function Index({
  initialValue = [
    {
      feature: "",
      description: "",
    },
  ],

}: Props) {
  const [data, setData] = useState<IProjectDetail[]>(initialValue);

  const handleTextInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData((pData) =>
      pData.map((d) => {
        if (d.feature === event.target.id) {
          return { ...d, feature: event.target.value };
        }
        return d;
      })
    );
  };
  const handleTextArea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setData((pData) =>
      pData.map((d) => {
        if (d.feature === event.target.id) {
          return { ...d, description: event.target.value };
        }
        return d;
      })
    );
  };
  const handleAdd = () => {
    setData((pData) => [
      ...pData,
      { feature: "", description: "" },
    ]);
  };
  const handleDelete = (feature : string) => {
    setData((pData) => pData.filter((d) => d.feature !== feature));
  };

  return (
    <div className={styles.Container}>
      <input type="hidden" name="details" value={JSON.stringify(data)} />

      <div className={styles.Wrapper}>
        {data.map((item, index) => {
          return (
            <div key={item.feature}>
              <label className={styles.Label}>
                {`detail-${index + 1}`}
                <button
                  onClick={() => handleDelete(item.feature)}
                  className="bg-red-500/80 hover:bg-red-500 text-white w-6 h-6 flex justify-center items-center rounded-md mr-4 self-end"
                >
                  -
                </button>
              </label>

              <TextInput
                id={item.feature}
                v={item.feature}
                length={20}
                handleC={handleTextInput}
              />
              <TextArea
                id={item.feature}
                v={item.description}
                length={255}
                handleC={handleTextArea}
              />
            </div>
          );
        })}
      </div>
      <button
        onClick={handleAdd}
        className="bg-green-500 text-white py-2 px-4 rounded-md mr-4 self-end w-fit"
      >
        Add
      </button>
    </div>
  );
}

export default Index;
