import { Box, Stack } from "@mui/material";
import { HashLink } from "react-router-hash-link";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface ArrowProps {
    referSection: string;
  }

export const ArrowNext: React.FC<ArrowProps> = ({ referSection }) => {
    return (
      <Stack sx={{ mt: 3, width: "5rem" }}>
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