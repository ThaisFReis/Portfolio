import { BrowserRouter, Routes, Route } from "react-router-dom"
import React from "react"

import ChooseLanguage from "./ChooseLanguage.js";

import Inicio from "./Portuguese/Home/Home.js";
import Sobremim from "./Portuguese/AboutMe/AboutMe.js";
import Projetos from "./Portuguese/Projects/Projects.js";
import Contatos from "./Portuguese/Contact/Contact.js";

import Home from "./English/Home/Home.js";
import AboutMe from "./English/AboutMe/AboutMe.js";
import Projects from "./English/Projects/Projects.js";
import Contact from "./English/Contact/Contact.js";

import "./App.css";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ChooseLanguage />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/sobremim" element={<Sobremim />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/contatos" element={<Contatos />} />
          <Route path="/home" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
    )
}