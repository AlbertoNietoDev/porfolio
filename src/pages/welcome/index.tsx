import { GenericContainer } from "../../components/Container/GeneralContainer";
import { palette } from "../../theme/palette";
import { useStyles } from "./welcomeStyle";
import { texts } from "./constants";
import { BodyCustom } from "./components/BodyCustom";
import { GeneralBackground } from "./components/GeneralBackground";
import { HeaderDrawer } from "../../components/HeaderDrawer";
import { AboutSection } from "./components/AboutSection";
import { PortfolioSection } from "./components/PortfolioSection";
import { ContactSection } from "./components/ContactSection";

export const Welcome: React.FC = () => {
  //Styles
  const welcomeStyles = useStyles();

  //Render
  return (
    <GenericContainer primary={palette?.primary}>
      <GeneralBackground />
      <HeaderDrawer mainStyle={welcomeStyles} texts={texts} />
      <BodyCustom mainStyle={welcomeStyles} texts={texts} />
      <AboutSection mainStyle={welcomeStyles} texts={texts} />
      <PortfolioSection mainStyle={welcomeStyles} texts={texts} />
      <ContactSection mainStyle={welcomeStyles} texts={texts}/>
    </GenericContainer>
  );
};




