"use client";
import React, { useRef, useState, useEffect, useMemo } from "react";
import styles from "./Styles.module.css";

import { ICustomer } from "@/Types";
import TextInput from "./TextInput";
import useFetch from "./hooks/useFetch";
import Results from "./Results";
import Customer from "./Results/Customer";
import Message from "./Results/Message";
import { getCustomer } from "@/utils/actions/Customers";

interface Props {
  name: string;
  label?: string;
  length: number;
  initialValue?: string;
}

function Index({ name, label, length, initialValue }: Props) {
  const [customerId, setCustomerId] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [loading, error, data] = useFetch(inputValue);

  const resultsData = useMemo(() => {
    if (Array.isArray(data)) {
      if (customerId) {
        return data.filter(
          (item: ICustomer) => item._id === customerId
        );
      } else {
        return data;
      }
    }
    return null; // Return an empty array if data is undefined or null
  }, [data, customerId]);

  useEffect(() => {
    if (!initialValue) return;
    const fetchData = async () => {
      try {
        const customer: ICustomer = await getCustomer(initialValue);
        if (inputRef.current) {
          inputRef.current.value = customer.fullName;
          setInputValue(customer.fullName);
          setCustomerId(customer._id);
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [initialValue]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setCustomerId("");
  };

  const handleClick = (_id: string, fullName: string) => {
    if (inputRef.current) {
      inputRef.current.value = fullName;
      setCustomerId(_id);
    }
  };

  return (
    <div className={styles.Container}>
      <label className={styles.Label}>{label || name}</label>
      <input type="hidden" name="customerId" value={customerId} />
      <TextInput
        inputRef={inputRef}
        length={length}
        onChange={handleInputChange}
        v={inputValue}
      />

      <Results>
        {loading ? (
          <Message>{"Loading..."}</Message>
        ) : error ? (
          <Message>{"Error fetching customers"}</Message>
        ) : !Array.isArray(resultsData) ? (
          ""
        ) : resultsData.length === 0 ? (
          <Message>{"No matches"}</Message>
        ) : (
          resultsData.map((customer: ICustomer) => (
            <Customer key={customer._id} {...customer} onClick={handleClick} />
          ))
        )}
      </Results>
    </div>
  );
}

export default Index;
