import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  Unsubscribe,
  User,
  UserCredential,
} from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { authentication } from "../config/lib/init-firebase";

export interface UserAuth {
  currentUser: User | null;
  isLoadingUser: boolean;
  loginHandler: (email: string, password: string) => Promise<UserCredential | null>;
  logoutHandler: () => void;
}

const AuthContext = React.createContext<UserAuth>({
  currentUser: null,
  isLoadingUser: true,
  loginHandler: (email: string, password: string) =>
    new Promise((resolve, reject) => resolve(null)),
  logoutHandler: (): void => {},
});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = (props: any) => {
  const history = useHistory();

  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isLoadingUser, setIsLoadingUser] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe: Unsubscribe = onAuthStateChanged(
      authentication,
      (user: User | null) => {
        setCurrentUser(user);
        setIsLoadingUser(false);
      }
    );

    return unsubscribe;
  }, []);

  const loginHandler = (email: string, password: string) => {
    return signInWithEmailAndPassword(authentication, email, password);
  };

  const logoutHandler = () => {
    authentication
      .signOut()
      .then(() => {
        setCurrentUser(null);
        history.replace("/auth/login");
      })
      .catch((error) => {});
  };

  const value: UserAuth = {
    currentUser,
    isLoadingUser,
    loginHandler,
    logoutHandler,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};
