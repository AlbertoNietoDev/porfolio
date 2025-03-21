import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { ICarousel, IProjectCard } from "../interfaces/portfolio";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { useState } from "react";

const fadeIn = {
  "@keyframes fadeIn": {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  },
  animation: "fadeIn 1s ease-in-out",
};

const projectsLinks: { [key: number]: string } = {
  1: "https://app.sicarx.com/",
  2: "https://ob-hbmx-dev-pwa.dscloud.com.mx/auth/login",
  3: "https://ob-hbmx-dev-mc.dscloud.com.mx/auth/login",
  4: "https://albertonietodev.github.io/registerUsers/#/auth/login",
};

export const Carousel: React.FC<ICarousel> = ({ items, autoPlay = false }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1,
    );
  };
  return (
    <Stack
      sx={{
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        gap: "16px",
        // backgroundColor: "#F3F4F9",
        borderRadius: 1,
      }}
    >
      <Stack
        sx={{
          flexDirection: "row",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          margin: 2,
        }}
      >
        <IconButton
          size="small"
          onClick={handlePrev}
          sx={{
            display: { xs: "none", md: "flex" },
            boxShadow: "0px 0px 24px -8px rgba(145,145,145,1)!important",
            color: (theme) => theme.palette.primary.main,
            backgroundColor: (theme) => theme.palette.background.paper,
            mx: 1,
          }}
        >
          <KeyboardArrowLeft />
        </IconButton>
        <CardCarousel
          company={items[currentIndex].company}
          id={items[currentIndex].id}
          img={items[currentIndex].img}
          technologies={items[currentIndex].technologies}
          title={items[currentIndex].title}
        />

        <IconButton
          size="small"
          onClick={handleNext}
          sx={{
            display: { xs: "none", md: "flex" },
            boxShadow: "0px 0px 24px -8px rgba(145,145,145,1)!important",
            color: (theme) => theme.palette.primary.main,
            backgroundColor: (theme) => theme.palette.background.paper,
            mx: 1,
          }}
        >
          <KeyboardArrowRight />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export const CardCarousel: React.FC<IProjectCard> = ({
  id,
  title,
  company,
  technologies,
  img,
}) => {
  const handleClick = (link: string) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <Card
      key={id}
      onClick={() => handleClick(projectsLinks[id])}
      sx={{
        minWidth: "80%",
        height: "50vh",
        backgroundColor: "#f3f3f3",
        "&:hover": { cursor: "pointer" },
      }}
    >
      <CardMedia
        sx={{
          height: "200px",
          position: "relative",
          "&::after": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)",
          },
          ...fadeIn
        }}
        image={img}
        title="green iguana"
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          p: 4,
          ...fadeIn,
        }}
      >
        <Stack gap={2}>
          <Typography variant="h4">Proyect: {title}</Typography>
          <Typography variant="h6">Company: {company}</Typography>
        </Stack>
        <Box sx={{ width: "30%" }}>
          <Typography variant="body2">Technologies:</Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "column",
              height: "calc(35vh - 150px)",
              overflowY: "auto",
            }}
          >
            {technologies.map((tec) => (
              <Stack
                key={tec.name}
                sx={{ display: "flex", flexDirection: "row", gap: 2 }}
              >
                <img
                  src={tec.icon}
                  alt=""
                  style={{ width: "1rem", height: "1rem", marginTop: "8px" }}
                />
                <Typography
                  key={tec.name}
                  variant="body2"
                  sx={{ color: "text.secondary", mt: 1 }}
                >
                  {tec.name}
                </Typography>
              </Stack>
            ))}
          </Box>
        </Box>
      </CardContent>
      {/*       <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions> */}
    </Card>
  );
};
