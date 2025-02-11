import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: any) => ({
  headerDrawer: {
    zIndex: 100,
    width: "100%",
    flexShrink: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem 0rem 2rem",
    height: "10vh",
    position: "sticky", top:0
  },
  bodyCustom: {
    zIndex: 100,
    width: "100%",
    paddingLeft: '2rem',
    paddingRight: '2rem',
    minHeight: "90vh",
  },
  spanTitleSyle: {
    color: "rgb(50, 73, 245)",
    // textShadow: "0px 0px 10px rgb(255, 255, 255)",
  }
}));
