import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: any) => ({
  headerDrawer: {
    scrollSnapAlign: "start",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    width: "100%",
    flexShrink: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem 1rem 2rem",
    height: "10vh",
    transition: "background-color 0.3s ease",
    // backdropFilter: "blur(1.0333px)",
  },
  bodyCustom: {
    scrollSnapAlign: "start",
    zIndex: 100,
    width: "100%",
    paddingLeft: "2rem",
    paddingRight: "2rem",
    minHeight: "90vh",
  },
  spanTitleSyle: {
    color: "rgb(50, 73, 245)",
  },
  presentationMark: {
    borderBottom: "5px solid white",
    width: "8rem",
  },
  presentationTextContainer: {
    width: "50%",
    padding: "0 16px 0 16px",
    gap: "16px",
  },
  rightSections: {
    width: "50%",
    padding: "0 16px 0 16px",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  boxBody: {
    height: "100vh",
    gap: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  sectionsDivider: {
    backgroundColor: "rgba(182, 182, 182, 0.3)",
    height: "2px",
    width: "50%",
  },
  presentationStack: {
    width: "50%",
    padding: '40px 0 40px 0',
    gap: '16px'
  },
}));
