import { Box, Button, Stack, Typography } from "@mui/material";
import { ArrowNext } from "../../../components/ArrowNext";

interface PortfolioProps{
    mainStyle: any,
    texts: any
}

export const PortfolioSection: React.FC<PortfolioProps> = ({mainStyle, texts}) => {
    return (
      <Stack
        id="portfolio"
        sx={{
          zIndex: 100,
          height: "100vh",
          width: "100%",
          paddingLeft: "2rem",
          paddingRight: "2rem",
          transition: "ease-in 0.5sec",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: 4,
          paddingTop: "5rem",
        }}
      >
        <Typography variant="h4">{texts.PORTFOLIO.TITLE}</Typography>
        <Stack gap={1}>
          <Typography variant="body1">{texts.ABOUT.DESC_1}</Typography>
          <Typography variant="body1">{texts.ABOUT.DESC_2}</Typography>
        </Stack>
        <Box>
          <Typography>{texts.ABOUT.DESC_3}</Typography>
        </Box>
  
        <Box>
          <Button
            variant="outlined"
            sx={{ color: "#fafafa", borderColor: "#fafafa" }}
          >
            {texts.ABOUT.DOWNLOAD_CV}
          </Button>
          <ArrowNext referSection={"contact"} />
        </Box>
      </Stack>
    );
  };