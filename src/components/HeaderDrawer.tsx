import { Box, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";

interface HeaderProps {
  mainStyle: any;
  texts: any;
}

const navItems = ["Home", "About", "Portfolio", "Contact"];

export const HeaderDrawer: React.FC<HeaderProps> = ({ mainStyle, texts }) => {
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
        backgroundColor: hasBackground ? "rgba(0,0,0,0.5)" : "transparent",
      }}
    >
      <Typography variant="h3">
        <span className={mainStyle.spanTitleSyle}>{`{ : }`}</span> {texts.TITLE}
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
              <Typography
                variant="h6"
                sx={{ fontWeight: 600 }}
                className="textTemp"
              >
                {item}
              </Typography>
            </Box>
          </HashLink>
        ))}
      </Stack>
    </Box>
  );
};
