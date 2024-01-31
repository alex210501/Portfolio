import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material';

import './App.css';
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
    </div>
  );
}

export default App;
