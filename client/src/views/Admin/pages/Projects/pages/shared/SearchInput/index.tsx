"use client";
import React, { useEffect, useState } from "react";
import styles from "./Styles.module.css";

import { ICustomer } from "@/Types";
import TextInput from "./TextInput";
import { getCustomer, getCustomers } from "@/utils/actions/Customers";
import Image from "next/image";

interface Props {
  name: string;
  label?: string;
  length: number;
  initialValue?: string;
}

function Index({ name, label, length, initialValue }: Props) {
  const [customerId, setCustomerId] = useState<string>(initialValue || "");
  const [inputValue, setInputValue] = useState<string>("");
  const [data, setData] = useState<ICustomer[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const [customerResutlsIsDisplay, setCustomerResutlsIsDisplay] =
    useState(false);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const customer: ICustomer = await getCustomer(customerId || "");
        return customer.fullName;
      } catch {
        return "";
      }
    };
    fetchCustomers();
  }, [customerId]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(false);

      try {
        const result = await getCustomers(`?customerFullName=${inputValue}`);
        setData(result);

        setCustomerResutlsIsDisplay(true);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
        if (inputValue === "") {
          setCustomerResutlsIsDisplay(true);
        }
      }
    };
    if (inputValue) {
      fetchData();
    } else {
      setData(null);
    }
  }, [inputValue]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleClick = (customer: ICustomer) => {
    setCustomerId(customer._id);
  };
  return (
    <div className={styles.Container}>
      <label className={styles.Label}>{label || name}</label>
      <input type="hidden" name="customerId" value={customerId} />

      <TextInput length={length} handleC={handleInputChange} v={inputValue} />

      <div
        className={`${styles.ResultsWrapper} ${
          customerResutlsIsDisplay ? "" : ""
        }`}
      >
        <div className={styles.ResultsWrapper}>
          {data === null ? (
            ""
          ) : loading ? (
            <p className="w-full text-center py-3 text-slate-600 font-bold">
              Loading...
            </p>
          ) : error ? (
            <p className="w-full text-center py-3 text-red-600 font-bold">
              Error loading data
            </p>
          ) : !data.length ? (
            <p className="w-full text-center py-3 text-slate-600 font-bold">
              No Match!
            </p>
          ) : (
            <ul className="w-full">
              {data.map((customer) => (
                <li key={customer._id}>
                  <label
                    htmlFor={`result-${customer._id}`}
                    className="relative w-full px-2 py-1 text-sm flex items-center justify-start gap-4 cursor-pointer"
                  >
                    <input
                      id={`result-${customer._id}`}
                      type="button"
                      className="absolute inset-0 opacity-0"
                      onClick={() => handleClick(customer)}
                    />
                    <div className="rounded-full w-8 h-8 overflow-hidden">
                      <Image
                        src={`/uploads/${customer.avatar}`}
                        width={50}
                        height={50}
                        alt={customer.fullName}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span>{customer.fullName}</span>
                  </label>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Index;
