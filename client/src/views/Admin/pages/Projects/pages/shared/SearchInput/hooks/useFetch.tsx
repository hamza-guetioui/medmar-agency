import { ICustomer } from "@/Types";
import { getCustomers } from "@/utils/actions/Customers";
const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";
import React, { useEffect, useState } from "react";

function useFetch(inputValue: string) {
  const [data, setData] = useState<ICustomer[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setData(null); // Clear the data when inputValue changes
      try {
        const customers = await getCustomers(inputValue);
        if (!customers) {
          setError(true);
          return;
        }

        setData(customers);
      } catch (err) {
        if (err instanceof Error) return;
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
  }, [inputValue]);

  return [loading, error, data];
}

export default useFetch;
