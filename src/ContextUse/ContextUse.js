import React, { useState } from 'react'
import { ThemeContextProvider, useTheme } from './Context'

export default function ContextUse() {
    const [mode,changeMode] = useState('dark') 
    
    const toggle=()=>{mode==='dark'?changeMode('light'):changeMode('dark')}

  return (
    <ThemeContextProvider value={{mode,toggle}}>
        <Second></Second>
    </ThemeContextProvider>
  )
}

function Second(){

    let bg="white",tc="black";
    let {mode, toggle} = useTheme();
    if(mode==='dark'){
        tc = 'white';
        bg = 'black';
    }

    return (
        <h1 style={{
            background:bg,
            color:tc
        }} onClick={toggle}>Second</h1>
    );
}