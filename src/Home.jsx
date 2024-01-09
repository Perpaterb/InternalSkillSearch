import React from "react";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import LoggedIn from "./components/LoggedIn";
import LoggedOut from "./components/LoggedOut";

export default function Home() {
  const { isLoading, isAuthenticated } = useKindeAuth();

  // return isAuthenticated ? <LoggedIn /> : <LoggedOut />;
  return (<LoggedIn />)
}
