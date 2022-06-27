import { keyframes } from "@mui/system";
import { styled } from "@mui/material";

const breathe = keyframes`
0% {
    padding: 30px;
  }
 50%{
     padding: 80px
 } 
  100% {
    padding: 30px
  }
`;

export const SplashAnimation = styled("div")`
  border: ${(props) => `16px solid ${props.theme.palette.background.default}`};
  border-radius: 50%;
  border-top: 16px solid #537EC5;
  border-bottom: 16px solid #537EC5;
  width: 120px;
  height: 120px;
  animation: ${breathe} 2s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
`;
