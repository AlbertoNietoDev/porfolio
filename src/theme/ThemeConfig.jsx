import React from "react";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { GlobalStyles } from "./GlobalStyles";
import { palette } from "./palette";
import { typography } from "./typography";
import { createShadows } from "./shadows";
import { componentsOverride } from "./overrides";
import { mainStyles } from "./mainStyles";

export const ThemeConfig = ({ children }) => {
  const themeOptions = {
    palette,
    typography,
  };

  const theme = createTheme(themeOptions);
  theme.shadows = createShadows(theme);
  theme.components = componentsOverride(theme);

  // console.log("theme", theme);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
