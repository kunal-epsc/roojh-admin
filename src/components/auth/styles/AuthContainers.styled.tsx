import { Stack, styled } from "@mui/material";

export const AuthPageContainer = styled(Stack)(({ theme }) => ({
    flexDirection: "column",
    height: "100%",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  }));

export const AuthFormBox = styled(Stack)({
    margin: "auto",
    width: "60%",
    height: "50%",
    justifyContent: "space-evenly",
    alignItems: "center",
  });
