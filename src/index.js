import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./routes.js";
import Styles from "../src/styles/stylesglobal";
import Header from "../src/components/header";
import Footer from "../src/components/footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Styles></Styles>
    <Header></Header>
    <AppRoutes />
    <Footer></Footer>
  </>
);
