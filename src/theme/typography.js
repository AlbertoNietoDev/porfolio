const pxToRem = (value) => {
  return `${(value / 16)}rem`;
};

const responsiveFontSizes = ({ sm, md, lg }) => {
  return {
    "@media (max-width:814px)": {
      fontSize: pxToRem(sm),
    },
    "@media (min-width:900px)": {
      fontSize: pxToRem(md),
    },
    "@media (min-width:1200px)": {
      fontSize: pxToRem(lg),
    },

  };
};

const FONT_PRIMARY = 'Montserrat';

export const typography = {
  fontFamily: FONT_PRIMARY,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h1: {
    fontWeight: 700,
    lineHeight: 80 / 64,
    fontSize: pxToRem(40),
    ...responsiveFontSizes({ sm: 52, md: 58, lg: 64 }),
  },
  h2: {
    fontWeight: 700,
    lineHeight: 64 / 48,
    fontSize: pxToRem(32),
    ...responsiveFontSizes({ sm: 40, md: 44, lg: 48 }),
  },
  h3: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(24),
    ...responsiveFontSizes({ sm: 26, md: 30, lg: 32 }),
  },
  h4: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(20),
    ...responsiveFontSizes({ sm: 20, md: 24, lg: 24 }),
  },
  h5: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(18),
    ...responsiveFontSizes({ sm: 19, md: 20, lg: 20 }),
  },
  h6: {
    fontWeight: 700,
    fontStyle: 'normal',
    lineHeight: '140%',
    fontSize: pxToRem(18),
    ...responsiveFontSizes({ sm: 15, md: 18, lg: 20 }),
    "@media (max-width:814px)": {
      fontWeight: 600,
      fontSize: '15px',
      lineHeight: '144%',
    },
  },
  body1: {
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    ...responsiveFontSizes({ sm: 13, md: 14, lg: 15 }),
  },
  body2: {
    lineHeight: 22 / 14,
    fontSize: pxToRem(12),
    ...responsiveFontSizes({ sm: 12, md: 12, lg: 13 }),
  },
  caption: {
    fontStyle: 'normal',
    fontWeight: 450,
    fontSize: '12px',
    lineHeight: '140%',
    // lineHeight: 1.5,
    // fontSize: pxToRem(12),
    ...responsiveFontSizes({ sm: 12, md: 13, lg: 15 }),
  },
  overline: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(10),
    letterSpacing: 1.1,
    textTransform: "uppercase",
  },
  button: {
    fontWeight: 700,
    lineHeight: 24 / 14,
    fontSize: pxToRem(14),
    textTransform: "capitalize",
  },
  titulo: {
    lineHeight: '130%',
    // fontSize: '28px',
    // fontSize: pxToRem(28),
    fontStyle: 'normal',
    fontWeight: 600,
    ...responsiveFontSizes({ sm: 17, md: 20, lg: 28 }),

  },
  subtitle: {
    fontStyle: 'normal',
    fontWeight: 350,
    lineHeight: '130%',
    // fontSize:  pxToRem(20),
    // fontSize: pxToRem(20),
    ...responsiveFontSizes({ sm: 12, md: 15, lg: 17 }),
  },
  subtitle1: {
    fontWeight: 400,
    lineHeight: '19.5px',
    // fontSize: pxToRem(16),
    ...responsiveFontSizes({ sm: 10, md: 15, lg: 15 }),
  },
  subtitle2: {
    fontWeight: 600,
    lineHeight: 22 / 14,
    // fontSize: pxToRem(14),
    ...responsiveFontSizes({ sm: 12, md: 15, lg: 17 }),
  },
  labelDinamic: {
    fontWeight: 400,
    lineHeight: 22 / 14,
    // fontSize: pxToRem(14),
    ...responsiveFontSizes({ sm: 9, md: 14, lg: 16 }),
  },
  enunciados: {
    fontWeight: 500,
    lineHeight: 22 / 14,
    fontSize: pxToRem(12),
    ...responsiveFontSizes({ sm: 12, md: 12, lg: 12 }),
  },
  complete: {
    color: 'rgba(175, 203, 58, 1)'
  },
  process: {
    color: 'rgba(251, 183, 103, 1)'
  },
  pending: {
    color: 'rgba(150, 150, 150, 1)'
  },
};
