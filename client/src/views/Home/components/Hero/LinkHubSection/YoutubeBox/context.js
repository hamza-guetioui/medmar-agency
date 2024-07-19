"use client"
import React, { useContext, useState } from "react";

const HandleClickContext = React.createContext()

export default function HandleClickProvider({ children }) {
    const [showVideo, setShowVideo] = useState(false)

    const contextValue = { showVideo, setShowVideo }

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