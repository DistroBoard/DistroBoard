import React, {useState} from 'react';
import {AppBar, Toolbar, Typography, IconButton, Tooltip, CssBaseline} from '@material-ui/core';
import {ThemeProvider, createMuiTheme} from '@material-ui/core/styles';

import GitHubIcon from '@material-ui/icons/GitHub';
import Brightness6Icon from '@material-ui/icons/Brightness6';
import InfoIcon from '@material-ui/icons/Info';
import MenuIcon from '@material-ui/icons/Menu';

const Header = () => {

  const [darkMode, setDarkMode] = useState(false);
  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar style={{backgroundColor: '#212121'}} position="static" >
        <Toolbar>

          <Tooltip title="Menu" aria-label="menu"><IconButton color="inherit"><MenuIcon /></IconButton></Tooltip>
          <Typography variant="h6" style={{flexGrow: 1}}>DistroBoard</Typography>

          <Tooltip title="Toggle Light/Dark" aria-label="toggle"><IconButton color="inherit" onClick={() => {setDarkMode(!darkMode)}} ><Brightness6Icon /></IconButton></Tooltip>
          <Tooltip title="About" aria-label="about"><IconButton color="inherit"><InfoIcon /></IconButton></Tooltip>
          <Tooltip title="View Source" aria-label="source"><IconButton color="inherit" href="https://github.com/DistroBoard/DistroBoard"><GitHubIcon /></IconButton></Tooltip>

        </Toolbar >
      </AppBar >

    </ThemeProvider>
  );
}

export default Header;
