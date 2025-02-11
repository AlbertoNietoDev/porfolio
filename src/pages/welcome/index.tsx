import { Box, Divider, Stack, Typography } from "@mui/material";
import { GenericContainer } from "../../components/GeneralContainer";
import { palette } from "../../theme/palette";
import { useStyles } from "./welcomeStyle";
import { useNavigate } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

//Interfaces
interface HeaderProps {
  mainStyle: any;
  OnRedirect: (item: string) => void;
}
interface BodyProps {
  mainStyle: any;
}

//Constants
const navItems = ["Home", "About", "Potfolio", "Contact"];

export const Welcome: React.FC = () => {
  //Styles
  const welcomeStyles = useStyles();

  //Hooks
  const navigate = useNavigate();

  //Functions
  const handleRedirect = (page: string) => {
    navigate("/" + page.toLowerCase());
  };

  //Render
  return (
    <GenericContainer primary={palette?.primary}>
      <GeneralBackground />
      <HeaderDrawer mainStyle={welcomeStyles} OnRedirect={handleRedirect} />
      <BodyCustom mainStyle={welcomeStyles} />
      <Box sx={{zIndex: 100, height: '90vh', width: "100%", border: '2px solid red'}}>adads</Box>
    </GenericContainer>
  );
};

const HeaderDrawer: React.FC<HeaderProps> = ({ mainStyle, OnRedirect }) => {
  return (
    <Box className={mainStyle.headerDrawer}>
      <Typography variant="h3">
        <span className={mainStyle.spanTitleSyle}>{`{ : }`}</span> Developer X
      </Typography>
      <Stack
        sx={{
          flexDirection: "row",
          gap: 2,
        }}
      >
        {navItems.map((item) => (
          <Box
            key={item}
            className="boxOptionsDrawer"
            onClick={() => OnRedirect(item)}
          >
            <Typography variant="body2">{item}</Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

const BodyCustom: React.FC<BodyProps> = ({ mainStyle }) => {
  return (
    <Stack className={mainStyle.bodyCustom}>
      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ height: "100vh", gap: 5 }}
      >
        <Stack gap={2} sx={{ width: "50%", px: 2 }}>
          <Box sx={{ borderBottom: "5px solid white", width: "3rem" }}></Box>
          <Typography variant="h4" className="markEditor">
            Hi, I'm Albert, a Web Developer.
          </Typography>
        </Stack>

        <Stack
          sx={{
            width: "50%",
            px: 2,
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <Stack gap={2} sx={{ width: "50%", py: 5 }}>
            <Typography variant="subtitle2">ABOUT ME</Typography>
            <Typography variant="subtitle1">
              Soy un desarrollador web con ingenieria en teleinformatica y con
              gusto por el desarrollo web y siempre dispuesto a aprender mas y
              poner retos personales y profesionales
            </Typography>
            <Box
              sx={{
                width: "8.5em",
                display: "flex",
                flexDirection: "row",
                gap: 1,
                borderBottom: "1px solid white",
                pb: 1,
                "&:hover": { cursor: "pointer" },
              }}
            >
              <Typography variant="subtitle2">Learn more</Typography>
              <ArrowForwardIcon
                sx={{ color: "white", margin: 0, padding: 0 }}
              />
            </Box>
          </Stack>

          <Divider
            sx={{ backgroundColor: "#40424f", height: "2px", width: "50%" }}
          />

          <Stack gap={2} sx={{ width: "50%", py: 5 }}>
            <Typography variant="subtitle2">MY WORK</Typography>
            <Typography variant="subtitle1">
              Eh trabajado para empresas de desarrollo de software a nivel
              nacional e internacional trabajando para distintas empresas de
              renombre mundial como HSBC, Metlife, Santander, etc
            </Typography>
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
              <Typography variant="subtitle2">Browse portfolio</Typography>
              <ArrowForwardIcon />
            </Box>
          </Stack>

          <Divider
            sx={{ backgroundColor: "#40424f", height: "2px", width: "50%" }}
          />
        </Stack>
      </Box>
    </Stack>
  );
};

const GeneralBackground: React.FC = () => {
  const generalStyle = { width: "100%", height: "100vh", position: "fixed" };
  return (
    <>
      <Box
        sx={{
          ...generalStyle,
          zIndex: 1,
          backgroundImage:
            "url(https://eldalab.in/wp-content/uploads/2023/08/web-development.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Box
        sx={{
          ...generalStyle,
          zIndex: 2,
          backdropFilter: "blur(18.0333px)",
        }}
      />
    </>
  );
};

