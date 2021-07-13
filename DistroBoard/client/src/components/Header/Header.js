import React, {useState} from 'react';
import {AppBar, Toolbar, Typography, IconButton, Tooltip, Avatar} from '@material-ui/core';

import Search from "../Search/Search";
import logo from "../../assets/images/logo.png";
import useStyles from './styles';

import Form from "../Form/Form";

import GitHubIcon from '@material-ui/icons/GitHub';
import CasinoIcon from '@material-ui/icons/Casino';
import AddCircleIcon from '@material-ui/icons/AddCircle';
const Header = () => {
  const classes = useStyles();
  const [openPopup, setOpenPopup] = useState(false);
  return (
    <>
      <AppBar style={{marginBottom: 30}} color="default" position="sticky" >
        <Toolbar>
          <Avatar alt="Logo" className={classes.logo} variant="square" src={logo} />
          <Typography variant="h6" style={{flexGrow: 1}}>DistroBoard</Typography>


          <Search />

          <Tooltip title="Distro Picker" aria-label="distro-picker"><IconButton color="inherit"><CasinoIcon /></IconButton></Tooltip>
          <Tooltip title="Add Distro" aria-label="add distro"><IconButton color="inherit" onClick={() => setOpenPopup(true)}><AddCircleIcon /></IconButton></Tooltip>
          <Tooltip title="View Source" aria-label="source"><IconButton color="inherit" href="https://github.com/DistroBoard/DistroBoard"><GitHubIcon /></IconButton></Tooltip>

        </Toolbar >
      </AppBar >
      <Form openPopup={openPopup} setOpenPopup={setOpenPopup} ></Form>
    </>
  );
}

export default Header;
