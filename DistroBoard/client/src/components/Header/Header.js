import React, {useState} from 'react';
import {AppBar, Toolbar, Typography, Button, IconButton, Tooltip, Avatar} from '@material-ui/core';
import {Link} from 'react-router-dom';


import Search from "../Search/Search";
import MenuDrawer from "../MenuDrawer/MenuDrawer";
import logo from "../../assets/images/logo.png";
import useStyles from './styles';

import Form from "../Form/Form";

import GitHubIcon from '@material-ui/icons/GitHub';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import InfoIcon from '@material-ui/icons/Info';
import MenuIcon from '@material-ui/icons/Menu';



const Header = () => {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  return (
    <>
      <AppBar style={{marginBottom: 30}} color="default" position="sticky" className={classes.appBar}>
        <Toolbar>

          <IconButton
            color="inherit"
            edge="start"
            onClick={() => setOpenDrawer(!openDrawer)}
          >
            <MenuIcon />
          </IconButton>

          <Avatar alt="Logo" component={Link} to="/" className={classes.logo} variant="square" src={logo} />
          <Typography variant="h6" component={Link} to="/" className={classes.responsive} style={{flexGrow: 1, textDecoration: 'none', color: 'inherit'}}>DistroBoard</Typography>

          <Search />

          <div className={classes.responsive}>
            <Tooltip title="Add Distro" aria-label="add distro"><IconButton color="inherit" onClick={() => setOpenPopup(true)}><AddCircleIcon /></IconButton></Tooltip>
            <Tooltip title="About Us" aria-label="about"><IconButton color="inherit" component={Link} to="/about"><InfoIcon /></IconButton></Tooltip>
            <Tooltip title="View Source" aria-label="source"><IconButton color="inherit" href="https://github.com/DistroBoard/DistroBoard" target="_blank"><GitHubIcon /></IconButton></Tooltip>
            <Tooltip title="Login/Signup" aria-label="login/signup"><Button component={Link} to="/auth" color="secondary" variant="outlined" style={{margin: '5px', borderRadius: '3px'}} > Login</Button></Tooltip>
          </div>


        </Toolbar >
      </AppBar >

      <Form openPopup={openPopup} setOpenPopup={setOpenPopup} ></Form>
      <MenuDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer}></MenuDrawer>
    </>
  );
}

export default Header;
