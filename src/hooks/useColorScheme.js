import ColorSchemeContext from "context/colorScheme";
import { useContext } from "react";

const useColorScheme = () => {
  return useContext(ColorSchemeContext);
};

export default useColorScheme;