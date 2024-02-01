import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material';

import './App.css';
import Contact from './sections/Contact';
import Experiences from './sections/Experiences';
import HomeAppBar from './components/HomeAppBar';
import Home from './sections/Home';

const theme = createTheme({
  palette: {
    mode: 'light',
  },
});


function App() {
  return (
    <div className="App"> 
      <HomeAppBar />
      <Home />
      <Experiences />
      <Contact />
    </div>
  );
}

export default App;
