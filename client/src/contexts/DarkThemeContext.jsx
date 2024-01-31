import React, {createContext, useState} from "react";

export const DarkThemeContext = createContext()

export const DarkThemeProvider = ({children})=>{
    const [darkTheme, setDarkTheme] = useState(false)

    const toggleDarkTheme = ()=>{
        setDarkTheme((prevThem)=> !prevThem)
    }

    return(
        <DarkThemeContext.Provider value={[darkTheme, toggleDarkTheme]}>
            {children}
        </DarkThemeContext.Provider>
    )

    
}