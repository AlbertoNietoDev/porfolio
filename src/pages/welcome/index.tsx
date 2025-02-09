import { Box, Button, Stack, Typography } from "@mui/material";
import { GenericContainer } from "../../components/GeneralContainer";
import { palette } from "../../theme/palette";

export const Welcome: React.FC = () => {
  return (
    <GenericContainer primary={palette?.primary}>
      <Box
        sx={{
          height: "8rem",
          border: "1px solid red",
          width: "100%",
        }}
      >
        <Typography sx={{color: '#fafafa'}}>Header</Typography>
        <Button
        >Send</Button>
      </Box>
      <Stack
        sx={{
          width: "100%",
          backgroundColor: "blue",
        }}
      >
        Body
      </Stack>
    </GenericContainer>
  );
};
