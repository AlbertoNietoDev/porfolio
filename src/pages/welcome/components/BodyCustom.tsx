import { Box, Stack, Typography, Divider } from "@mui/material";
import { HashLink } from "react-router-hash-link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { ArrowNext } from "../../../components/ArrowNext";

interface IBodyProps {
  mainStyle: any;
  texts: any;
}

export const BodyCustom: React.FC<IBodyProps> = ({ mainStyle, texts }) => {
  return (
    <Stack className={mainStyle.bodyCustom} id="home">
      <Box className={mainStyle.boxBody}>
        <Stack className={mainStyle.presentationTextContainer}>
          <Box className={mainStyle.presentationMark}></Box>
          <Typography
            className="markEditor"
            sx={{
              fontWeight: 500,
              fontSize: "2vw !important",
              textWrap: "nowrap",
            }}
          >
            Hi, I'm Albert, a Web Developer.
          </Typography>

          <ArrowNext referSection={"about"} />
        </Stack>

        <Stack className={mainStyle.rightSections}>
          <Stack className={mainStyle.presentationStack}>
            <Typography variant="subtitle2">
              {texts.HOME.ABOUT_ME_TITLE}
            </Typography>
            <Typography variant="subtitle1">
              {texts.HOME.ABOUT_ME_TEXT}
            </Typography>
            <HashLink
              to={`#about`}
              smooth
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Box
                sx={{
                  // width: "8.5em",
                  display: "flex",
                  flexDirection: "row",
                  gap: 1,
                  // borderBottom: "1px solid white",
                  pb: 1,
                  "&:hover": { cursor: "pointer" },
                }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{ borderBottom: "1px solid white", pb: 1 }}
                >
                  {texts.HOME.LEARN_MORE}
                </Typography>
                <ArrowForwardIcon
                  sx={{ color: "white", margin: 0, padding: 0 }}
                />
              </Box>
            </HashLink>
          </Stack>

          <Divider className={mainStyle.sectionsDivider} />

          <Stack className={mainStyle.presentationStack}>
            <Typography variant="subtitle2">
              {texts.HOME.MY_WORK_TITLE}
            </Typography>
            <Typography variant="subtitle1">
              {texts.HOME.MY_WORK_TEXT}
            </Typography>
            <HashLink
              to={`#portfolio`}
              smooth
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Box
                sx={{
                  width: "11em",
                  display: "flex",
                  flexDirection: "row",
                  gap: 1,
                  borderBottom: "1px solid white",
                  pb: 1,
                  "&:hover": { cursor: "pointer" },
                }}
              >
                <Typography variant="subtitle2">
                  {texts.HOME.BROWSE_PORTFOLIO}
                </Typography>
                <ArrowForwardIcon />
              </Box>
            </HashLink>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};
