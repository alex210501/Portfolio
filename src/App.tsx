import React, { useRef, useState } from "react";
import { ThemeProvider } from "styled-components";

import "./App.css";
import { AppContext } from "./utils/Context";
import cfg from "./utils/ConfigLoader";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Experiences from "./sections/Experiences";
import { GlobalStyles } from "./styles/GlobalStyles";
import HomeAppBar from "./components/HomeAppBar";
import Home from "./sections/Home";
import { darkTheme } from "./styles/Theme";
import InfoBanner from "./components/InfoBanner";

const inDevelopment = false;
const inDevelopmentMessage = "This website is currently under development.";

function App() {
  const homeSectionRef = useRef<HTMLDivElement | null>(null);
  const aboutSectionRef = useRef<HTMLDivElement | null>(null);
  const experiencesSectionRef = useRef<HTMLDivElement | null>(null);
  const contactSectionRef = useRef<HTMLDivElement | null>(null);
  const [displayInfoBanner, setInfoBanner] = useState(inDevelopment);

  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <AppContext.Provider value={cfg}>
            <GlobalStyles />
            <HomeAppBar
            homeSectionRef={homeSectionRef}
            aboutSectionRef={aboutSectionRef}
            experiencesSectionRef={experiencesSectionRef}
            contactSectionRef={contactSectionRef}
            />
            {displayInfoBanner && <InfoBanner onClick={() => setInfoBanner(false)} message={inDevelopmentMessage} />}
            <Home innerRef={homeSectionRef} />
            <About innerRef={aboutSectionRef} />
            <Experiences innerRef={experiencesSectionRef} />
            <Contact innerRef={contactSectionRef} />
        </AppContext.Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
