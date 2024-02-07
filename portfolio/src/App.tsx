import React, { useRef } from "react";
import { ThemeProvider } from "styled-components";

import "./App.css";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Credits from "./sections/Credits";
import Experiences from "./sections/Experiences";
import { GlobalStyles } from "./styles/GlobalStyles";
import HomeAppBar from "./components/HomeAppBar";
import Home from "./sections/Home";
import { darkTheme } from "./styles/Theme";

function App() {
  let homeSectionRef = useRef<HTMLDivElement | null>(null);
  let aboutSectionRef = useRef<HTMLDivElement | null>(null);
  let experiencesSectionRef = useRef<HTMLDivElement | null>(null);
  let contactSectionRef = useRef<HTMLDivElement | null>(null);

  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyles />
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
      </ThemeProvider>
    </div>
  );
}

export default App;
