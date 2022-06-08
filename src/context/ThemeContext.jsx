import { createContext, useState } from "react"



export const ThemeContext = createContext()
export const ThemeProvider = ({ children }) => {
  const [color, setColor] = useState('#4B8673')

  return (
    <ThemeContext.Provider value={{ color, setColor }}>
      {children}
    </ThemeContext.Provider >
  )
}