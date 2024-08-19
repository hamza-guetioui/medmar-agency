import React from "react";
import TRow from "./TRow";

// fetch Reviews
import { getServices } from "@/utils/actions/Services";
import { IService } from "@/Types";
import NoResults from "@/shared/Dashboard/NoResults";

const Index = async () => {
  const services: IService[] = await getServices() || [];

  if (!services || services.length <= 0) {
    return <NoResults />;
  }

  return (
    <tbody>
      {services.map((service, index) => {
        return <TRow key={service._id.toString()} index={index} {...service}></TRow>;
      })}
    </tbody>
  );
};

export default Index;
