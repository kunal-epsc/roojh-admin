import { Box, Button, Typography } from "@mui/material";

import { Link as RouterLink } from "react-router-dom";

import { BoxCenterAll } from "../../components/styles/BoxCenterAll.styled";

import {
  AuthFormBox,
  AuthPageContainer,
} from "../../components/auth/styles/AuthContainers.styled";

import AuthImage from "./../../components/auth/styles/AuthImage.styled";
import AuthButton from "../../components/auth/styles/AuthButton.styled";
import AuthInput from "../../components/auth/styles/AuthInput.styled";

import { authentication } from "../../config/lib/init-firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import useAuthInput from "../../components/auth/hooks/use-auth-input";
import { useState } from "react";
import PositionedSnackbar from "../../components/shared/Snackbar.styled";

export default function ForgotPassword() {
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [alertMessage, setAlertMessage] = useState<string>("");

  const {
    value: enteredEmail,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    valueTouchedHandler: emailTouchedHandler,
  } = useAuthInput((val: string) => (val.includes("@") ? true : false));

  const formSubmitHandler = (event: any) => {
    event.preventDefault();
    sendPasswordResetEmail(authentication, enteredEmail.trim())
      .then(() => {
        setAlertMessage("Reset Link Send To Email");
        setShowAlert(true);
      })
      .catch((error) => {
        setAlertMessage("Invalid Email Address");
        setShowAlert(true);
      });
  };

  return (
    <AuthPageContainer>
      <BoxCenterAll flex="1">
        <AuthImage
          src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=2000"
          alt=""
        />
      </BoxCenterAll>
      <BoxCenterAll flex="1" flexDirection="column">
        <AuthFormBox>
          <Typography variant="h5">Reset Password</Typography>
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

              <AuthButton variant="contained" fullWidth type="submit">
                Send Password Reset
              </AuthButton>
            </form>

            <Box textAlign="center">
              <Button component={RouterLink} to="/auth/login">
                Login
              </Button>
            </Box>
          </Box>
        </AuthFormBox>

        <PositionedSnackbar
          horizontal="center"
          vertical="bottom"
          open={showAlert}
          message={alertMessage}
          onClose={()=>setShowAlert(false)}
        />
      </BoxCenterAll>
    </AuthPageContainer>
  );
}
