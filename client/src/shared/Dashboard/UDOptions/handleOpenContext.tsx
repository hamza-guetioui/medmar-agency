import React, { useState } from "react";

interface OpenContextTypes {
  id: string;
  handleId: (id: string) => void;
}

const OpenContext = React.createContext<OpenContextTypes | null>(null);

type Props = {};

const HandleOpenContext = (props: Props) => {
  const [id, setId] = useState("");
  function handleId(id: string) {
    setId(id);
  }
  return <OpenContext.Provider value={{ id, handleId }}></OpenContext.Provider>;
};

export default HandleOpenContext;

export function useOpen() {
  const context = React.useContext(OpenContext);
  if (!context) {
    throw new Error("useOpen must be used within a HandleOpenContext");
  }
  return context;
}
