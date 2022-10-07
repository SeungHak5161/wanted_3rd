import React from "react";
import ReactDOM from "react-dom/client";
// Styles
import "./styles/index.css";
// Components
import Router from "./components/Router";
import Route from "./components/Route";
// Pages
import About from "./pages/About.jsx";
import Root from "./pages/Root.jsx";

const container = document.getElementById("root");

ReactDOM.createRoot(container).render(
  <Router>
    <Route path="/" component={<Root />} />
    <Route path="/about" component={<About />} />
  </Router>
);
