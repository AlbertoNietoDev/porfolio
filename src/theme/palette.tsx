import { alpha } from "@mui/material";
import { Palette } from "../interfaces/palette";
import { createTheme } from "@mui/material/styles";

const SUCCESS = {
  lighter: "#E9FCD4",
  light: "#AAF27F",
  main: "#54D62C",
  dark: "#28A745",
  darker: "#08660D",
  contrastText: "#212B36",
};


const ERROR = {
  lighter: "#FFE7D9",
  light: "#FFA48D",
  main: "#FF4842",
  dark: "#B72136",
  darker: "#7A0C2E",
  contrastText: "#fff",
};

const INFO = {
  main: "#FFC222",
};


export const palette: Palette = {
  primary: {
    background: "#202128",
    dark: "#dedede",
    main: "#476EA5",
    main100: alpha("#476EA5", 1),
    main80: alpha("#476EA5", 0.8),
    main60: alpha("#476EA5", 0.6),
    main40: alpha("#476EA5", 0.4),
    main20: alpha("#476EA5", 0.2),
    main10: alpha("#476EA5", 0.1),
    mainHoverBackground: "rgba(66, 164, 245, 0.06)",
    lightContrast: "#FCFCFC",
    darkContrast: "#000000",
    contrastText: "#F2F2F2",
    TableHeader: "#476EA5",
    TableHeader2: "#476EA5",
    text: "#FFFFFF",
    selectMenu: "#476EA5",
    borderASummary: "#EEEEEE",
    mainLyrics: "#FFFFFF",
    tableMain: "#476EA5",
    tableHeadLight: "#F6F6F6",
    tableHeadLightText: "#5E5C5C",
    tableSecondary: "#6390C5",
    tableText: "#FFFFFF",
    tableHover: "#F2F2F2",
    infoBox: "#FFB34982",
  },
  secondary: {
    dark: "#000000",
    main: "#476EA5",
    main100: alpha("#476EA5", 1),
    main80: alpha("#476EA5", 0.8),
    main60: alpha("#476EA5", 0.6),
    main40: alpha("#476EA5", 0.4),
    main20: alpha("#476EA5", 0.2),
    main10: alpha("#476EA5", 0.1),
    lightContrast: "#F7F7F3",
    darkContrast: "#000000",
    contrastText: "#FFFFFF",
    light: "#F4F4F4",
  },
/*   contrastThreshold: 3,
  tonalOffset: 0.2,
  success: { ...SUCCESS },
  error: { ...ERROR },
  info: { ...INFO }, */
};

