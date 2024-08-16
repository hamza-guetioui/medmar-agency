"use client";
import React, { useState } from "react";
import styles from "./Styles.module.css";
import { IProjectDetail } from "@/Types";

import TextArea from "./components/TextArea";
import TextInput from "./components/TextInput";
import { faPlus, faSquareMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  initialValue?: IProjectDetail[];
}

function Index({ initialValue }: Props) {
  const [data, setData] = useState<IProjectDetail[]>(() => {
    if (initialValue) {
      return initialValue;
    }
    let arr: IProjectDetail[] = [{ _id: "1", feature: "", description: "" }];
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
            <div key={item.feature}>
              <div>
                <h3 className={styles.Label}>{`detail-${index + 1}`}</h3>
                <label
                  htmlFor="delDetail"
                  className="relative bg-red-500/80 hover:bg-red-500 text-white w-6 h-6 flex justify-center items-center rounded-md mr-4 self-end"
                >
                  <input
                    id="delDetail"
                    type="button"
                    className="absolute opacity-0"
                    onClick={() => handleDelete(item._id)}
                  />

                  <FontAwesomeIcon icon={faSquareMinus} className="h-6 w-6" />
                </label>
              </div>

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

      <label
        htmlFor="addDetail"
        className="bg-green-500 text-white py-2 px-4 flex gap-2 items-center rounded-md mr-4 self-end w-fit"
      >
        <input
          id="addDetail"
          type="button"
          onClick={handleAdd}
          className="absolute opacity-0"
        />
        add <FontAwesomeIcon icon={faPlus} />
      </label>
    </div>
  );
}

export default Index;

function generateRandomId() {
  return Math.floor(Math.random() * 1000000000).toString(); // Generates a random number between 0 and 999,999,999
}
