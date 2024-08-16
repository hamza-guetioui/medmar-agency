import { IService } from "@/Types";
import React, { useState } from "react";

function useHandleCheck(initialValue: IService[] = []) {
  const [serviceIds, setServiceIds] = useState(() => {
    if (Array.isArray(initialValue)) {
      return initialValue.map((service) => service._id);
    }
    return [];
  });

  function handleCheckbox(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.checked) {
      const serviceId = event.target.id;
      setServiceIds((currentserviceIds) => [...currentserviceIds, serviceId]);
    } else {
      setServiceIds((currentserviceIds) =>
        currentserviceIds.filter((serviceId) => serviceId !== event.target.id)
      );
    }
  }

  function handleRadio(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.checked) {
      const serviceId = event.target.id;
      setServiceIds([serviceId]);
    } else {
      setServiceIds((currentserviceIds) =>
        currentserviceIds.filter((serviceId) => serviceId === event.target.id)
      );
    }
  }
  return [serviceIds, handleCheckbox, handleRadio] as const;
}

export default useHandleCheck;
