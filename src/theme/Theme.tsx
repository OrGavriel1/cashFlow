import { ThemeProvider, createTheme } from "@mui/material/styles";
import palette from "./palette";
import breakpoints from "./breakpoints";

interface ThemeProps {
  children?: React.ReactNode;
}

const Theme: React.FC<ThemeProps> = ({ children }) => {
  const themeOptions = {
    palette,
    breakpoints,
  };
  const theme = createTheme(themeOptions);
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
export default Theme;
