import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  BrowserRouter,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Skill from "./components/Skills/Skill.jsx";
import Home from "./components/Home/Home.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Services from "./components/Services/Services.jsx";
import About, { githubCall } from "./components/About/About.jsx";
import Review from "./components/Review/Review.jsx";
import Layout from "./Layout.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="contact" element={<Contact />} />
      <Route path="skills" element={<Skill />} />
      <Route loader={githubCall} path="about" element={<About />} />
      <Route path="reviews" element={<Review />} />
      <Route path="services" element={<Services />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
