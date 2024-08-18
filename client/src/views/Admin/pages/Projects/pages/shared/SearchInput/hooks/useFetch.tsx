import { ICustomer } from "@/Types";
const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";
import React, { useEffect, useState } from "react";

function useFetch(inputValue: string) {
  const [data, setData] = useState<ICustomer[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const fetchData = async () => {
      setLoading(true);
      setData(null); // Clear the data when inputValue changes
      try {
        const response = await fetch(
          `${baseUrl}/api/customers/?customerFullName=${inputValue}`,
          {
            next: { tags: ["Customers"] },
            signal,
          }
        );
        if (!response.ok) {
          setError(true);
          return;
        }
        const { data } = await response.json();

        setData(data);
      } catch (err) {
        if (err instanceof Error && err.name === "AbortError") return;
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    if (inputValue) {
      fetchData();
    } else {
      setData(null); // Ensure data is cleared if inputValue is empty
    }

    return () => {
      controller.abort();
    };
  }, [inputValue]);

  return [loading, error, data];
}

export default useFetch;
