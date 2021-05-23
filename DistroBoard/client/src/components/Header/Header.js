import React from 'react';
import {AppBar, Toolbar, Typography, IconButton, Tooltip} from '@material-ui/core';

import GitHubIcon from '@material-ui/icons/GitHub';
import InfoIcon from '@material-ui/icons/Info';
import MenuIcon from '@material-ui/icons/Menu';

const Header = () => {
  return (
    <AppBar style={{marginBottom: 30}} color="default" position="static" >
      <Toolbar>

        <Tooltip title="Menu" aria-label="menu"><IconButton color="inherit"><MenuIcon /></IconButton></Tooltip>
        <Typography variant="h6" style={{flexGrow: 1}}>DistroBoard</Typography>

        <Tooltip title="About" aria-label="about"><IconButton color="inherit"><InfoIcon /></IconButton></Tooltip>
        <Tooltip title="View Source" aria-label="source"><IconButton color="inherit" href="https://github.com/DistroBoard/DistroBoard"><GitHubIcon /></IconButton></Tooltip>

      </Toolbar >
    </AppBar >
  );
}

export default Header;
