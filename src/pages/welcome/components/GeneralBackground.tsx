import { Box } from "@mui/material";
import backgroundImage from "../../../assets/img/background.png";

export const GeneralBackground: React.FC = () => {
  const generalStyle = { width: "100%", height: "100%", position: "fixed" };
  return (
    <Box
      sx={{
        ...generalStyle,
        zIndex: 1,
        opacity: 0.2,
      }}
    >
      <img
        src={backgroundImage}
        style={{ width: "100%", height: "100%", position: "fixed" }}
        alt=""
      />
    </Box>
  );
};
