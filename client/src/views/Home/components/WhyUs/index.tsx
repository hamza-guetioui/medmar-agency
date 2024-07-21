import React from "react";
import { ScrollProvider } from "./scrollContext";

import Wrapper from "./Wrapper";
function Index() {
  return (
 
      <ScrollProvider>
        <Wrapper />
      </ScrollProvider>
  );
}

export default Index;
