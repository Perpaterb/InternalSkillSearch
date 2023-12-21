import React from "react";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";
import "./App.css";
import Home from "./Home";

export default function Main() {

  return(
    <KindeProvider
      clientId={process.env.VITE_KINDE_CLIENT_ID}
      domain={process.env.VITE_KINDE_DOMAIN}
      logoutUri={process.env.ITE_KINDE_LOGOUT_URL}
      redirectUri={process.env.VITE_KINDE_REDIRECT_URL}
      isDangerouslyUseLocalStorage={process.env.DEV}
    >
      <Home/>
    </KindeProvider>
  );
}
