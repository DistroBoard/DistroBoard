import React, {useState} from 'react';
import {AppBar, Toolbar, Typography, IconButton, Tooltip, Avatar, Menu, MenuItem} from '@material-ui/core';
import PopupState, {bindTrigger, bindMenu} from 'material-ui-popup-state';

import Search from "../Search/Search";
import logo from "../../assets/images/logo.png";
import useStyles from './styles';

import Form from "../Form/Form";

import GitHubIcon from '@material-ui/icons/GitHub';
import CasinoIcon from '@material-ui/icons/Casino';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Header = () => {
  const classes = useStyles();
  const [openPopup, setOpenPopup] = useState(false);
  return (
    <>
      <AppBar style={{marginBottom: 30}} color="default" position="sticky" >
        <Toolbar>
          <Avatar alt="Logo" className={classes.logo} variant="square" src={logo} />
          <Typography variant="h6" className={classes.responsive} style={{flexGrow: 1}}>DistroBoard</Typography>

          <Search />

          <div className={classes.responsive}  >
            <Tooltip title="Distro Picker" aria-label="distro-picker"><IconButton color="inherit"><CasinoIcon /></IconButton></Tooltip>
            <Tooltip title="Add Distro" aria-label="add distro"><IconButton color="inherit" onClick={() => setOpenPopup(true)}><AddCircleIcon /></IconButton></Tooltip>
            <Tooltip title="Login/Signup" aria-label="login/signup"><IconButton color="inherit"><AccountCircleIcon /></IconButton></Tooltip>
            <Tooltip title="View Source" aria-label="source"><IconButton color="inherit" href="https://github.com/DistroBoard/DistroBoard" target="_blank"><GitHubIcon /></IconButton></Tooltip>
          </div>

          <PopupState variant="popover" popupId="responsive-menu" >
            {(popupState) => (
              < div className={classes.responsiveMenu} >
                <IconButton size="small" {...bindTrigger(popupState)}>
                  <MoreVertIcon fontSize="default" />
                </IconButton>
                <Menu {...bindMenu(popupState)}>

                  <MenuItem onClick={() => popupState.close()}><CasinoIcon className={classes.menuIcons} fontSize="small" /> Distro Picker</MenuItem>
                  <MenuItem onClick={() => {popupState.close(); window.open("https://github.com/DistroBoard/DistroBoard", "_blank");}}><GitHubIcon className={classes.menuIcons} fontSize="small" /> Visit Source</MenuItem>
                  <MenuItem onClick={() => {popupState.close(); setOpenPopup(true);}}><AddCircleIcon className={classes.menuIcons} fontSize="small" />Add Distro</MenuItem>
                  <MenuItem onClick={() => popupState.close()}><AccountCircleIcon className={classes.menuIcons} fontSize="small" />Login/Signup</MenuItem>
                </Menu>
              </div>
            )}
          </PopupState>

        </Toolbar >
      </AppBar >

      <Form openPopup={openPopup} setOpenPopup={setOpenPopup} ></Form>
    </>
  );
}

export default Header;
