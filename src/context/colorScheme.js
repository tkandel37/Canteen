import { createContext, useState } from "react";

const ColorSchemeContext = createContext({});

export const ColorSchemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ColorSchemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ColorSchemeContext.Provider>
  );
};

export default ColorSchemeContext;