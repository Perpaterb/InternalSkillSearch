import React from "react";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import '@elastic/eui/dist/eui_theme_light.css';
import { EuiCard, EuiIcon, EuiFlexGroup, EuiFlexItem,EuiPanel } from '@elastic/eui';

export default function LoggedOut() {
  const { login, register } = useKindeAuth();
  return (
    <>
      <header>
        <nav className="nav container">
          <h1 className="text-display-2">Internal Skill Search</h1>
          <div>
            {/* <button className="btn btn-ghost sign-in-btn" onClick={login}>
              Sign in
            </button>
            <button className="btn btn-dark" onClick={register}>
              Sign up
            </button> */}
          </div>
        </nav>
      </header>

      <main>

        <div className="container hero">
          <EuiFlexGroup gutterSize="l">
            <EuiFlexItem >
              <EuiPanel
                style={{padding: "30px", background: "#ffffff", borderRadius: "10px", boxShadow: "0px 0px 0px"}}
              >
                <p className="text-body-1 hero-tagline">Looking for people with skills?</p>
                <p className="text-body-1 hero-tagline">Have skills and time and would to work on stuff?</p>
                <div
                  
                >
                  <EuiFlexGroup gutterSize="1"
                    style={{ margin: "auto"}}
                  >
                    <EuiFlexItem 
                      style={{ margin: "auto"}}
                    >
                      <EuiCard
                        style={{height: "100px", width: "200px", margin: "30px auto", paddingTop: "35px", borderRadius: "30px",background: "linear-gradient(145deg, #fbffff, #d4dbe0)"}}
                        title={`Sign in`}
                        isDisabled={false}
                        onClick={() => {login()}}
                      />
                      <EuiCard
                        style={{height: "100px", width: "200px", margin: "30px auto", paddingTop: "35px", borderRadius: "30px",background: "linear-gradient(145deg, #e4f2fb, #c0cbd4)"}}
                        title={`Sign up`}
                        isDisabled={false}
                        onClick={() => {register()}}
                      />
                    </EuiFlexItem>
                  </EuiFlexGroup>
                </div>
              </EuiPanel>
            </EuiFlexItem>
          </EuiFlexGroup>
        </div>
      </main>

      <footer className="footer">
      </footer>
    </>
  );
}
