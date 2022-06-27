import { Redirect, Route } from "react-router-dom";
import { useAuth, UserAuth } from "../../contexts/auth-context";
import Home from "./Home";

export default function Shell() {
  const authCtx: UserAuth = useAuth();
  const isSignedIn: boolean = !!authCtx.currentUser && !authCtx.isLoadingUser;

  return isSignedIn ? (
    <>
      <Route path="/" component={Home} />
    </>
  ) : (
    <>
      <Redirect to="/auth/login" />
    </>
  );
}
