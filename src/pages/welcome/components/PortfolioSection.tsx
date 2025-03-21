import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import { ArrowNext } from "../../../components/ArrowNext";
import { IPortfolioProps, IProjectCard } from "../../../interfaces/portfolio";
import { Carousel } from "../../../components/Carousel";

import JSIcon from "../../../assets/icons/javascript.png";
import ReactIcon from "../../../assets/icons/react.png";
import TSIcon from "../../../assets/icons/typescript.png";
import FirebaseIcon from "../../../assets/icons/firebase.png";
import ReduxIcon from "../../../assets/icons/redux.jpg";
import ZustandIcon from "../../../assets/icons/zustand.png";
import NextJSIcon from "../../../assets/icons/nextjs.jpg";
import NodeIcon from "../../../assets/icons/nodejs.png";
import MUIIcon from "../../../assets/icons/mui.png";
import AxiosIcon from "../../../assets/icons/axios.jpg";

import sicarIMG from "../../../assets/img/projects/sicarx.png";
import pwaIMG from "../../../assets/img/projects/pwa.png";
import mcIMG from "../../../assets/img/projects/mc.png";
import loginIMG from "../../../assets/img/projects/login.png";

const projects: Array<IProjectCard> = [
  {
    id: 1,
    title: "Sicar X - Hardware module",
    company: "Sicar",
    technologies: [
      { name: "JavaScript", icon: JSIcon },
      { name: "ReactJS", icon: ReactIcon },
      { name: "Zustand", icon: ZustandIcon },
      { name: "NextJS", icon: NextJSIcon },
      { name: "NodeJS", icon: NodeIcon },
      { name: "TypeScript", icon: TSIcon },
      { name: "Material UI", icon: MUIIcon },
      { name: "Axios", icon: AxiosIcon },
    ],
    img: sicarIMG,
  },
  {
    id: 2,
    title: "Onboarding - PWA",
    company: "DocSolutions",
    technologies: [
      { name: "ReactJS", icon: ReactIcon },
      { name: "Redux", icon: ReduxIcon },
      { name: "Material UI", icon: MUIIcon },
      { name: "Axios", icon: AxiosIcon },
    ],
    img: pwaIMG,
  },
  {
    id: 3,
    title: "Onboarding - Mesa de Control",
    company: "DocSolutions",
    technologies: [
      { name: "ReactJS", icon: ReactIcon },
      { name: "Redux", icon: ReduxIcon },
      { name: "Material UI", icon: MUIIcon },
      { name: "Axios", icon: AxiosIcon },
    ],
    img: mcIMG,
  },
  {
    id: 4,
    title: "Login and consult data",
    company: "Freelancer",
    technologies: [
      { name: "ReactJS", icon: ReactIcon },
      { name: "Redux", icon: ReduxIcon },
      { name: "TypeScript", icon: TSIcon },
      { name: "Firebase", icon: FirebaseIcon },
      { name: "Material UI", icon: MUIIcon },
    ],
    img: loginIMG,
  },
];

export const PortfolioSection: React.FC<IPortfolioProps> = ({
  mainStyle,
  texts,
}) => {
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
        alignItems: "center",
        gap: 4,
        paddingTop: "5rem",
      }}
    >
      <Typography variant="h4" sx={{ width: "100%" }}>
        {texts.PORTFOLIO.TITLE}
      </Typography>

      <Stack sx={{ width: "80%" }}>
        <Carousel items={projects} />
      </Stack>

      <Box>
        <ArrowNext referSection={"contact"} />
      </Box>
    </Stack>
  );
};
