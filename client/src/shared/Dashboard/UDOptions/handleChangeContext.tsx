import React, { useContext, useState } from "react";

interface IdContextTypes {
  id: string;
  handelId: (id: string) => void;
}
const IdContext = React.createContext<IdContextTypes | null>(null);

const HandleChangeContext = ({ children }: { children: React.ReactNode }) => {
  const [id, setId] = useState<string>("");
  function handelId(id: string) {
    setId(id);
  }
  return (
    <IdContext.Provider value={{ id, handelId }}>{children}</IdContext.Provider>
  );
};

export default HandleChangeContext;

export const useHandelid = () => {
  const context = useContext(IdContext);
  return context;
};
