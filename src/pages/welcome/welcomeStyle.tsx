import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: any) => ({
  headerDrawer: {
    width: "100%",
    flexShrink: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem 0rem 2rem",
    height: "10vh",
  },
}));
