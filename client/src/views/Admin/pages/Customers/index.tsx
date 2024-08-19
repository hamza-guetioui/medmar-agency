import React from "react";
import Container from "@/shared/Dashboard/Container";
import Header from "@/shared/Dashboard/Container/Header";
import Table from "@/shared/Dashboard/Container/Table";
import THead from "./components/THead";
import TBody from "./components/TBody";

const Index = () => {
  return (
    <Container>
      <Header title="Customers Data :" />
      <Table>
        <THead />
        <TBody />
      </Table>
    </Container>
  );
};

export default Index;
