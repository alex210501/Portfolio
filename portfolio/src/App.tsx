import React, { useRef } from "react";
import { createTheme } from "@mui/material";

import "./App.css";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Credits from "./sections/Credits";
import Experiences from "./sections/Experiences";
import HomeAppBar from "./components/HomeAppBar";
import Home from "./sections/Home";

const theme = createTheme({
  palette: {
    mode: "light",
  },
});

function App() {
  let homeSectionRef = useRef<HTMLDivElement | null>(null);
  let aboutSectionRef = useRef<HTMLDivElement | null>(null);
  let experiencesSectionRef = useRef<HTMLDivElement | null>(null);
  let contactSectionRef = useRef<HTMLDivElement | null>(null);

  return (
    <div>
      <div className="App">
        <HomeAppBar
          homeSectionRef={homeSectionRef}
          aboutSectionRef={aboutSectionRef}
          experiencesSectionRef={experiencesSectionRef}
          contactSectionRef={contactSectionRef}
        />
        <Home innerRef={homeSectionRef} />
        <About innerRef={aboutSectionRef} />
        <Experiences innerRef={experiencesSectionRef} />
        <Contact innerRef={contactSectionRef} />
        <Credits />
      </div>
    </div>   
  );
}

export default App;
