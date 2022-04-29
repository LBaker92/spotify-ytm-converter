import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const YoutubeButton = styled(Button)`
  background: red;
  color: white;
  padding: 0.5rem 1rem;

  :hover {
    color: red;
    background: white;
    border-color: red;
    transform: scale(1.04);
  }
`;