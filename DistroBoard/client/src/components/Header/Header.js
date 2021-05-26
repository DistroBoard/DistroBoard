import React from 'react';
import {AppBar, Toolbar, Typography, IconButton, Tooltip, Avatar} from '@material-ui/core';

import logo from "../../assets/images/logo.svg";
import useStyles from './styles';

import GitHubIcon from '@material-ui/icons/GitHub';
import CasinoIcon from '@material-ui/icons/Casino';
import FavoriteIcon from '@material-ui/icons/Favorite';
const Header = () => {
  const classes = useStyles();
  return (
    <AppBar style={{marginBottom: 30}} color="default" position="static" >
      <Toolbar>
        <Avatar alt="Logo" className={classes.logo} variant="square" src={logo} />
        <Typography variant="h6" style={{flexGrow: 1}}>DistroBoard</Typography>

        <Tooltip title="Distro Picker" aria-label="distro-picker"><IconButton color="inherit"><CasinoIcon /></IconButton></Tooltip>
        <Tooltip title="Donate" aria-label="donate"><IconButton color="inherit"><FavoriteIcon /></IconButton></Tooltip>
        <Tooltip title="View Source" aria-label="source"><IconButton color="inherit" href="https://github.com/DistroBoard/DistroBoard"><GitHubIcon /></IconButton></Tooltip>

      </Toolbar >
    </AppBar >
  );
}

export default Header;
