import { Box, styled } from "@mui/material";
import { Palette } from "../interfaces/palette";

//ts-ignore
export const GenericContainer = styled(Box)`
    background: ${(theme: Palette) => theme?.primary?.background ?? "#FAFAFA"};
    margin: 0px;
    margin-bottom: 0px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: left;
    -webkit-overflow-scrolling: auto !important;
    width: 100%;`
    /* padding: 3px 0.5em;

    @media (min-width: 600px) {
        padding: 3px 0.5em;
    }
    @media (min-width: 960px) {
        padding: 5px 7em;
    }
    @media (min-width: 1280px) {
        padding: 6px 9em;
    }
    @media (min-width: 1920px) {
        padding: 8px 11em;
    } */
;
