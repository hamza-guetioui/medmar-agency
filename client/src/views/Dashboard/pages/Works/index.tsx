import React from "react";

import Container from "../shared/Table/Body";
import THead from "./components/THead";
import TBody from "./components/TBody";

type Props = {};

const index = (props: Props) => {
  return (
    <Container>
      <THead />
      <TBody />
    </Container>
  );
};

export default index;
