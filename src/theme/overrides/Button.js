export const Button = (theme) => {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '100px !important',
          '&:hover': {
            boxShadow: 'none',
            backgroundColor: theme.palette.secondary.main40,
          },
        },
        sizeLarge: {
          height: 48,
        },
        containedPrimary: {
          borderRadius: '5px',
          '&.Mui-disabled': {
            backgroundColor: theme.palette.secondary.main40,
            color: '#FFF',
          },
        },
        containedSecondary: {
          borderRadius: '5px',
          '&.Mui-disabled': {
            backgroundColor: theme.palette.secondary.main40,
            color: '#FFF',
          },
        },
        outlinedPrimary: {
          borderRadius: '5px',
          '&.Mui-disabled': {
            borderColor: theme.palette.secondary.main40,
            color: theme.palette.secondary.main40,
          },
        },
        outlinedSecondary: {
          borderRadius: '5px',
          '&.Mui-disabled': {
            borderColor: theme.palette.secondary.main40,
            color: theme.palette.secondary.main40,
          },
        },
      },
    },
  };
};
