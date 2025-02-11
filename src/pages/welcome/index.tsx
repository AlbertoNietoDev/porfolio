import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { GenericContainer } from "../../components/GeneralContainer";
import { palette } from "../../theme/palette";
import { useStyles } from "./welcomeStyle";
import { useNavigate } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { HashLink } from "react-router-hash-link";
import { useEffect, useState } from "react";

//Interfaces
interface HeaderProps {
  mainStyle: any;
  OnRedirect: (item: string) => void;
}
interface BodyProps {
  mainStyle: any;
}
interface ArrowProps {
  referSection: string;
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
      <AboutSection />
      <ContactSection />
    </GenericContainer>
  );
};

const HeaderDrawer: React.FC<HeaderProps> = ({ mainStyle, OnRedirect }) => {
  const [hasBackground, setHasBackground] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setHasBackground(true);
      } else {
        setHasBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      className={mainStyle.headerDrawer}
      sx={{
        backgroundColor: hasBackground ? "rgba(0,0,0,0.2)" : "transparent",
      }}
    >
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
          <HashLink
            key={item}
            to={`#${item.toLowerCase()}`}
            smooth
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Box className="boxOptionsDrawer">
              <Typography variant="body1" sx={{ fontWeight: 600 }}>
                {item}
              </Typography>
            </Box>
          </HashLink>
        ))}
      </Stack>
    </Box>
  );
};

const BodyCustom: React.FC<BodyProps> = ({ mainStyle }) => {
  return (
    <Stack className={mainStyle.bodyCustom} id="home">
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

          <ArrowNext referSection={"about"} />
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
            sx={{
              backgroundColor: "rgb(53, 57, 78)",
              height: "2px",
              width: "50%",
            }}
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
          opacity: 0.5,
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

const AboutSection: React.FC = () => {
  return (
    <Stack
      id="about"
      sx={{
        zIndex: 100,
        height: "90vh",
        width: "100%",
        paddingLeft: "2rem",
        paddingRight: "2rem",
        transition: "ease-in 0.5sec",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: 4,
        paddingTop: '5rem',
      }}
    >
      <Typography variant="h5">About me</Typography>
      <Stack gap={1}>
        <Typography variant="body1">
          Hi, my name is Alberto Nieto and I'm a web developer with a degree in
          teleinformatics, I have a passion for web development and always
          willing to learn more and set personal or professional challenges. I
          Studied at the University of Guadalajara and I have worked for
          software development companies at a national and international level
          working for different world-renowned companies. In my last job I
          worked for DocSolutions, a consulting company that provides services
          to companies such as HSBC, Metlife, Santander, Banco Azteca, Fonacot,
          AT&T, Autozone, DHL, etc.
        </Typography>
        <Typography variant="body1">
          Also I worked for a company called Sicar, a company specialized in POS
          (Point of Sale), I was in charge of the development of the hardware
          module (printing, configuration, detectection of devices, etc.) and
          some help to anothers modules. I also worked on the development of the
          company's internal applications like Language manager, PDF Converter,
          etc.
        </Typography>
      </Stack>
      <Box>
        <Typography>
          I have experience in the development of web applications, mobile
          applications (PWA), and desktop applications (Electron), I have worked
          with different languages and technologies such as React JS, Next JS,
          TypeScript, MySQL, Redux, Java, Python, Electron, Node JS, etc.
        </Typography>
      </Box>

      <Box>
        <Button
          variant="outlined"
          sx={{ color: "#fafafa", borderColor: "#fafafa" }}
        >
          Donwload CV
        </Button>
        <ArrowNext referSection={"contact"} />
      </Box>
      
    </Stack>
  );
};

const ContactSection: React.FC = () => {
  return (
    <Stack
      id="contact"
      sx={{
        zIndex: 100,
        height: "90vh",
        width: "100%",
        paddingLeft: "2rem",
        paddingRight: "2rem",
        transition: "ease-in 0.5sec",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: 4,
      }}
    >
      <Typography variant="h5">Contact</Typography>
      <Stack gap={1}>
        <Typography variant="h5">Email</Typography>
        <Typography variant="body1">
          albertonietocovarrubias@gmail.com
        </Typography>
      </Stack>
    </Stack>
  );
};

const ArrowNext: React.FC<ArrowProps> = ({ referSection }) => {
  return (
    <Stack sx={{ pt: 3 }}>
      <HashLink
        to={`#${referSection}`}
        smooth
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <Box
          sx={{
            backgroundColor: "rgb(50, 73, 245)",
            borderRadius: "1000px",
            width: "5rem",
            height: "5rem",
            alignContent: "center",
            alignItems: "center",
            textAlign: "center",
            pt: 1,
            "&:hover": { cursor: "pointer" },
          }}
          // onClick={OnNextSection}
        >
          <KeyboardArrowDownIcon fontSize="large" />
        </Box>
      </HashLink>
    </Stack>
  );
};
