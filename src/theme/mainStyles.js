import { makeStyles } from '@mui/styles'

export const mainStyles = {}

mainStyles.gridStyle = makeStyles((theme) => ({
  container: {
    display: 'grid',
    height: 'minmax(100vh, 100vh)',
    gridTemplateColumns: '20% 60% 20%',
    // eslint-disable-next-line
    ['@media only screen and (max-width: 600px)']: {
      gridTemplateColumns: '5% 90% 5%',
    },
    gridAutoRows: '100vh',
    overflowY: 'hidden'
  },
  centerColumn: {
    display: 'flex',
    flexDirection: 'column !important',
    alignItems: 'center !important',
    height: 'minmax(100vh, auto)',
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
      width: '0',  /* Remove scrollbar space */
      background: 'transparent',  /* Optional: just make scrollbar invisible */
    },
    overflowX: 'none',
    width: '100%'
  },

  centerContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '60%',
    ['@media only screen and (max-width: 600px)']: {
      width: '90%',
    },
    height: '75vh',
  },
  centerContentHeight80: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '60%',
    ['@media only screen and (max-width: 600px)']: {
      width: '90%',
    },
    height: '70vh',
  },

  centerContent1: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    ['@media only screen and (max-width: 600px)']: {
      width: '90%',
    },
    height: '100vh',
  },

  leftColumn: {
    //outline: 'solid 1px tomato !important',
    overflowY: 'none',
    backgroundColor: '#ffffff',
    ['@media only screen and (max-width: 600px)']: {
      backgroundColor: '#ffffff',
    },
  },
  rightColumn: {
    //outline: 'solid 1px tomato !important',
    overflowY: 'none',
    backgroundColor: '#ffffff',
    ['@media only screen and (max-width: 600px)']: {
      backgroundColor: '#ffffff',
    },
  },
  card: {
    width: '90%',
    height: '400px',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    marginTop: '5px',
    marginBottom: '5px'
  }
}))

mainStyles.noDataSections = makeStyles((theme) => ({
  h6: {
    color: `${theme.palette.userStyle.textInstruccions} !important`,
    fontWeight: 550,
    marginTop: theme.spacing(4)
  },

  noResult: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '90%'
  },

  noData: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '60vh'
  },

}))

mainStyles.CustomLoadingOverlayStyles = makeStyles((theme) => ({
  dialogGralLoad: {
    zIndex: '90000 !important',
  },
  DialogContent: {
    minWidth: '350px !important',
    maxWidth: '600px !important',

    display: 'flex',
    // flexDirection: 'column',
    justifyContent: 'center',
    // width: '100%',
    position: 'relative',
    alignItems: 'center',
    ['@media only screen and (max-width: 812px)']: {
      minWidth: '250px !important',
      maxWidth: '600px !important',
    },
    zIndex: '90000 !important',
  },
  DialogActions: {
    justifyContent: 'center !important',
    zIndex: '90000 !important',
  },
  imgLoad: {
    padding: '3rem',
    width: '50% !important',
    ['@media only screen and (max-width: 812px)']: {
      width: '75% !important',
    },
    zIndex: '92000 !important',
    animation: "$pulse 1.5s infinite",
  },
  "@keyframes pulse": {
    "0%, 100%": {
      transform: "scale(1)",
      opacity: 1,
    },
    "50%": {
      transform: "scale(1.05)",
      opacity: 0.7,
    },
  },
}))

mainStyles.cards = makeStyles((theme) => ({
  bioModalCard: {
    margin: 0,
    display: 'flex !important',
    flexDirection: 'column !important',
    justifyContent: 'space-between !important',
    alignItems: 'center !important',
    width: '100% !important',
    height: '225px !important',
    border: `solid 1px ${theme.palette.secondary.light} !important`,
    '&:hover': {
      backgroundColor: `${theme.palette.secondary.light} !important`
    }
  },

  modalCard: {
    width: '20%',
  },

  biometricCard: {
    margin: 0,
    display: 'flex !important',
    flexDirection: 'column !important',
    justifyContent: 'space-between !important',
    alignItems: 'center !important',
    width: '20% !important',
    height: '225px !important',
    border: `solid 1px ${theme.palette.secondary.light} !important`,

  },

  card: {
    width: '100%',
    height: '230px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    '&:hover': {
      backgroundColor: theme.palette.secondary.light
    }
  },

  titleCard: {
    fontWeight: 'bold !important',
    fontSize: 13,
    paddingTop: '3px !important',
    textAlign: 'center !important'
  },

  cardMatch: {
    fontSize: 11,
    fontWeight: 'bold',
    paddingBottom: '3px',
    textAlign: 'center  '
  },

  loadDocIcon: {
    width: '20px',
    height: '20px',
    marginLeft: '2px',
    marginRight: '1px'
  },

  docModalbuttonSection: {
    display: 'flex !important',
    flexDirection: 'column !important',
    justifyContent: 'center !important',
    alignItems: 'center !important',
    marginTop: theme.spacing(2),
    "& .MuiDialogActions-spacing > :not(:first-child)": {
      marginLeft: '0px !important',
    },
  },

  noMetaDataButtonSection: {
    display: 'flex !important',
    width: '100% !important',
    flexDirection: 'row !important',
  },

}))

mainStyles.customDialogStyles = makeStyles((theme) => ({

  dialogCenter: {
    display: 'flex !important',
    flexDirection: 'column !important',
    backgroundColor: '#ffffff',
    width: '45vh !important',
    borderRadius: '7px !important',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },

  title: {
    fontSize: '20px !important',
    padding: '10px !important',
    textAlign: 'center !important',
    fontWeight: 'bold !important',
  },
  dialogBody: {
    display: 'flex !important',
    flexDirection: 'column !important',
    alignItems: 'center !important',
    justifyContent: 'center !important',
    fontSize: '16px',
    height: '70% !important',
    padding: '5px !important',
    textAlign: 'center !important',
  },
  btnContainer: {
    display: 'flex !important',
    flexDirection: 'row !important',
    alignItems: 'center !important',
    justifyContent: 'space-evenly !important',
    width: '100% !important',
  },
  leftButton: {
    borderRadius: 0,
    borderTop: `solid 1px ${theme.palette.secondary.contrastText} !important`,
    borderRight: `solid 1px ${theme.palette.secondary.contrastText} !important`,
    width: '50%',
    marginBottom: '1px !important',
    // marginTop: 'auto',
    alignSelf: 'flex-start !important',
    padding: '0.5em !important',
    '&:focus': {
      outline: 'none !important',
    },
  },
  rightButton: {
    borderRadius: 0,
    width: '50%',
    borderTop: `solid 1px ${theme.palette.secondary.contrastText} !important`,
    borderLeft: `solid 1px ${theme.palette.secondary.contrastText} !important`,
    marginBottom: '1px !important',
    // marginTop: 'auto',
    alignSelf: 'flex-end !important',
    padding: '0.5em !important',
    '&:focus': {
      outline: 'none !important',
    },
  },
  customButtonClose:
  {
    marginTop: '0px !important',
    marginRight: '0px !important',
    marginBottom: '0px !important',
    padding: '0px !important',
    marginLeft: '1em !important',
  }
}))

mainStyles.customHelpDialogStyles11 = makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column !important',
    // alignItems: 'center !important',
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
      width: '0',
      background: 'transparent',
    },
    overflowX: 'hidden',
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '100%',
    // position: 'absolute',
    // top: 0,
    // bottom: 0,
    // width: '100%',
    // height: '98vh'
  },
  container: {
    display: 'grid !important',
    height: '100vh !important',
    gridTemplateColumns: '20% 60% 20%',
    ['@media only screen and (max-width: 812px)']: {
      gridTemplateColumns: '100%',
    },
    gridAutoRows: '100vh !important',
    overflowY: 'hidden !important',
    backgroundColor: '#FFFFFF !important'
  },
  centerColumn: {
    display: 'flex',
    flexDirection: 'column !important',
    alignItems: 'center !important',
    // height: 'minmax(100vh, auto)',
    overflowY: 'hidden',
    position: 'relative !important',
    '&::-webkit-scrollbar': {
      width: '0',  /* Remove scrollbar space */
      background: 'transparent',  /* Optional: just make scrollbar invisible */
    },
    overflowX: 'hidden',
    ['@media only screen and (max-width: 812px)']: {
      position: 'inherit !important',
      overflowY: 'scrol',
    },
  },
  leftColumn: {
    overflowY: 'none',
    backgroundColor: '#f2f2f2',
    ['@media only screen and (max-width: 812px)']: {
      backgroundColor: '#ffffff',
      display: 'none',
    },
  },
  rightColumn: {
    overflowY: 'none',
    backgroundColor: '#f2f2f2',
    ['@media only screen and (max-width: 812px)']: {
      backgroundColor: '#ffffff',
      display: 'none',
    },
  },
  centerColumnGral: {
    display: 'flex',
    flexDirection: 'column !important',
    alignItems: 'center !important',
    // overflowY: 'none',
    '&::-webkit-scrollbar': {
      width: '0',  /* Remove scrollbar space */
      background: 'transparent',  /* Optional: just make scrollbar invisible */
    },
    // overflowX: 'none',
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '100%',
  },
  centerContentGral: {
    display: 'flex',
    flexDirection: 'column',
    overflowX: 'hidden',
    minHeight: '85vh',
    overflow: 'auto',
    width: '60%',
    ['@media only screen and (max-width: 812px)']: {
      width: '100%',
      margin: '16px 24px',
      padding: '16px 24px',
    },
  },
  contentBodyGralOne: {
    // position: 'absolute',
    // top: 0,
    width: '100%',
    overflowY: 'auto',
    height: '84vh',
    ['@media only screen and (max-width: 812px)']: {
      height: '80vh !important',
      ['@media all and (orientation:landscape)']: {
        height: '65vh !important',
      },
    },
  },
  contentButtonsGralOne: {
    bottom: 0,
    width: '100%',
    // zIndex: '100',
    // height: '9vh',
    top: '84vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    ['@media only screen and (max-width: 812px)']: {
      height: '9vh',
      top: '80vh',
      ['@media all and (orientation:landscape)']: {
        top: '65vh !important',
      },
    },
  },
  title: {
    fontWeight: 600,
    width: '100%',
    // paddingLeft: theme.spacing(1),
    // fontSize: 24,
  },
  close: {
    alignSelf: 'flex-end !important',
    marginTop: '3px !important',
    marginRight: '3px !important',
    width: 13,
    height: 13
  },
  //ToolTip
  closeText: {
    alignSelf: 'flex-end',
    marginRight: theme.spacing(3),
    marginTop: theme.spacing(3),
    '&&:focus': {
      outline: 'none'
    }
  },
  textContent: {
    fontWeight: 'bold !important',
    width: '100%',
    ['@media only screen and (max-width: 812px)']: {
      width: '90%',
    }
  },
  carouselSection1: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    ['@media only screen and (max-width: 812px)']: {
      height: '50vh',
    }
  },
  imgHelp: { //Help
    height: '38vh',
    ['@media only screen and (max-width: 812px)']: {
      height: '33vh',
    }
  },
  cargarDocsBtn: {
    width: '100%',
    alignSelf: 'center !important',
    marginBottom: '3px'
  },
}))