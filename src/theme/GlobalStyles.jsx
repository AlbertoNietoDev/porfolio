import { alpha } from "@mui/system";
import { GlobalStyles as GlobalStylesExtended,useTheme } from "@mui/material";

export const GlobalStyles = () => {
  const theme = useTheme()
  
  return (
    <GlobalStylesExtended
      styles={{
        "*": {
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
        },
        html: {
          width: "100%",
          height: "100%",
          MozTextSizeAdjust: "100%",
          WebkitOverflowScrolling: "touch",
        },
        body: {
          width: "100%",
          height: "100%",
          "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
            width: 8,
            height: 6,
            backgroundColor: theme.palette.divider,
          },
          "&::-webkit-scrollbar-thumb, & ::-webkit-scrollbar-thumb": {
            border: "none",
            borderRadius: 8,
            backgroundColor: alpha(theme.palette.grey[600], 0.48),
          },
        },
        "#root": {
          width: "100%",
          height: "100%",
        },
        img: {
          display: "block",
          maxWidth: "100%",
        },
      }}
    />
  );
};
