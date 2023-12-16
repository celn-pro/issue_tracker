import {DarkThemeContext} from '../contexts/DarkThemeContext'
import { useContext } from "react";

export const useDarkTheme = ()=> {
    return useContext(DarkThemeContext)
}

