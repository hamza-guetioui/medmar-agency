"use client";
import React, { useContext, useState } from "react";

interface ContextTypes {
  activeValue: number;
  setActiveValue: (value: number) => void;
}

interface HandleClickProviderProps {
  children: React.ReactNode;
}

const HandleClickContext = React.createContext<ContextTypes | undefined>(
  undefined
);

const HandleClickProvider: React.FC<HandleClickProviderProps> = ({
  children,
}) => {
  const [activeValue, setActiveValue] = useState(1);

  const contextValue = { activeValue, setActiveValue };

  return (
    <HandleClickContext.Provider value={contextValue}>
      {children}
    </HandleClickContext.Provider>
  );
};

export default HandleClickProvider;

export function useHandleClick() {
  const context = useContext(HandleClickContext);
  if (!context) {
    throw new Error("useScroll must be used within a ScrollProvider");
  }
  return context;
}
