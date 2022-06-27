import { Redirect, Route } from "react-router-dom";
import { useAuth, UserAuth } from "../../contexts/auth-context";

import ForgotPassword from "./ForgotPassword";
import Login from "./Login";

export default function Auth() {
  const authCtx: UserAuth = useAuth();
  const isSignedIn: boolean = !!authCtx.currentUser && !authCtx.isLoadingUser;

  return !isSignedIn ? (
    <>
      <Route path="/auth/login" component={Login} />
      <Route path="/auth/forgot-password" component={ForgotPassword} />
    </>
  ) : (
    <>
      <Redirect to="/"/>
    </>
  );
}
