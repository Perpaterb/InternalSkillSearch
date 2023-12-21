import "./App.css";
import * as React from "react";
import useConfig from "./components/useConfig";
import Main from "./Main";


export default function App() {
  const config = useConfig();
  return (
    <Main/>
  );
}
