import React from "react";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import '@elastic/eui/dist/eui_theme_light.css';

export default function LoggedOut() {
  const { login, register } = useKindeAuth();
  return (
    <>
      <header>
      <nav className="nav container">
        <h1 className="text-display-3">Internal Skill Search</h1>
        <div className="profile-blob">
          <div>
            <button style={{paddingLeft: "10px"}} className="text-subtle" onClick={() => {login()}}>
              Sign in
            </button>
            <button style={{paddingLeft: "10px"}} className="text-subtle" onClick={() => {register()}}>
              Register
            </button>
            
          </div>
        </div>
      </nav>
    </header>

      <main>

        <div className="container hero">
                <p className="text-body-1 hero-tagline">Looking for people with skills?</p>
                <p className="text-body-1 hero-tagline">Want to work and have skills and time?</p>
        </div>
      </main>

      <footer className="footer">
      </footer>
    </>
  );
}
