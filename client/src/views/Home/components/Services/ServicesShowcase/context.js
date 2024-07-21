"use client"
import React, { useContext, useState } from "react";

const HandleClickContext = React.createContext()

export default function HandleClickProvider({ children }) {
    const [activeValue, setActiveValue] = useState("Digital Marketing")

    const contextValue = { activeValue, setActiveValue }

    return <HandleClickContext.Provider value={contextValue}>
        {children}
    </HandleClickContext.Provider>

}

export function useHandleClick() {
    const context = useContext(HandleClickContext)
    if (!context) {
        throw new Error('useScroll must be used within a ScrollProvider');
    }
    return context;


}