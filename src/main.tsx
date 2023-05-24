import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./page/Home";
import Listmovies from "./page/Listmovies";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* <Home /> */}
    <Listmovies />
  </React.StrictMode>
);
