import { Stack, Typography } from "@mui/material";

interface IContactProps{
    mainStyle: any,
    texts: any
}

export const ContactSection: React.FC<IContactProps> = ({mainStyle, texts}) => {
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
        <Typography variant="h4">{texts.CONTACT.TITLE}</Typography>
        <Stack gap={1}>
          <Typography variant="h5">{texts.CONTACT.EMAIL_TITLE}</Typography>
          <Typography variant="body1">{texts.CONTACT.EMAIL}</Typography>
        </Stack>
        <Stack gap={1}>
          <Typography variant="h5">{texts.CONTACT.PHONE_TITLE}</Typography>
          <Typography variant="body1">{texts.CONTACT.PHONE}</Typography>
        </Stack>
        <Stack gap={1}>
          <Typography variant="h5">{texts.CONTACT.GIT_TITLE}</Typography>
          <Typography variant="body1">{texts.CONTACT.GIT}</Typography>
        </Stack>
        <Stack gap={1}>
          <Typography variant="h5">{texts.CONTACT.LINKEDIN_TITLE}</Typography>
          <Typography variant="body1">{texts.CONTACT.LINKEDIN}</Typography>
        </Stack>
      </Stack>
    );
  };