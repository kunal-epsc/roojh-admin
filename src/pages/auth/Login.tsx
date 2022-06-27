import { useState } from "react";
import { Box, Button, Typography, Snackbar, Alert } from "@mui/material";
import { Link as RouterLink, useHistory } from "react-router-dom";

import { BoxCenterAll } from "../../components/styles/BoxCenterAll.styled";

import AuthInput from "../../components/auth/styles/AuthInput.styled";
import AuthButton from "../../components/auth/styles/AuthButton.styled";
import AuthImage from "../../components/auth/styles/AuthImage.styled";
import {
  AuthPageContainer,
  AuthFormBox,
} from "../../components/auth/styles/AuthContainers.styled";

import useAuthInput from "./../../components/auth/hooks/use-auth-input";
import { useAuth, UserAuth } from "../../contexts/auth-context";
import SplashScreen from "../shell/SplashScreen";

import PositionedSnackbar from "../../components/shared/Snackbar.styled";

export default function Login() {
  const authCtx: UserAuth = useAuth();
  const history = useHistory();

  const [showAlert, setShowAlert] = useState(false);

  const {
    value: enteredEmail,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    valueTouchedHandler: emailTouchedHandler,
  } = useAuthInput((val: string) => (val.includes("@") ? true : false));

  const {
    value: enteredPassword,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    valueTouchedHandler: passwordTouchedHandler,
  } = useAuthInput((val: string) => val.trim().length > 6);

  const formSubmitHandler = (event: any) => {
    event.preventDefault();
    authCtx
      .loginHandler(enteredEmail, enteredPassword)
      .then((res) => {
        history.replace("/");
      })
      .catch((error: any) => {
        setShowAlert(true);
      });
  };

  return authCtx.isLoadingUser ? (
    <SplashScreen></SplashScreen>
  ) : (
    <AuthPageContainer>
      <BoxCenterAll flex="1">
        <AuthImage src="/assets/Roojh-login.png" alt="" />
      </BoxCenterAll>

      <BoxCenterAll flex="1" flexDirection="column">
        <AuthFormBox>
          <Typography variant="h5">Sign In</Typography>
          <Box>
            <form onSubmit={formSubmitHandler}>
              <AuthInput
                content="Email"
                placeholder="Enter your email"
                marginBottom="30px"
                type="text"
                value={enteredEmail}
                onChange={emailChangeHandler}
                onBlur={emailTouchedHandler}
                errorMessage={emailHasError ? "*Invalid Email Address" : ""}
              ></AuthInput>

              <AuthInput
                content="Password"
                placeholder="Enter yout password"
                marginBottom="10px"
                type="password"
                value={enteredPassword}
                onChange={passwordChangeHandler}
                onBlur={passwordTouchedHandler}
                errorMessage={passwordHasError ? "*Invalid Password" : ""}
              ></AuthInput>

              <Box textAlign="right" marginBottom="20px">
                <Button
                  component={RouterLink}
                  to="/auth/forgot-password"
                  variant="text"
                  size="small"
                >
                  Forgot Password?
                </Button>
              </Box>

              <AuthButton variant="contained" fullWidth type="submit">
                Sign In
              </AuthButton>
            </form>
          </Box>
        </AuthFormBox>
        <PositionedSnackbar
          horizontal="center"
          vertical="bottom"
          open={showAlert}
          message="Invalid Email/Password"
          onClose={() => setShowAlert(false)}
        />
      </BoxCenterAll>
    </AuthPageContainer>
  );
}
