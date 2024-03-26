import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    mode:'light',
    toggle:()=>{}
});

export const ThemeContextProvider = ThemeContext.Provider

export const useTheme = ()=>{
    return useContext(ThemeContext)
}