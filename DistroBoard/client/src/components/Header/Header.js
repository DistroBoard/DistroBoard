import React, {useState} from 'react';
import {AppBar, Toolbar, Typography, Button, IconButton, Tooltip, Avatar, Drawer, List, ListItem, ListItemText, ListItemIcon, ListSubheader, Divider} from '@material-ui/core';
import {Link} from 'react-router-dom';


import Search from "../Search/Search";
import logo from "../../assets/images/logo.png";
import useStyles from './styles';

import Form from "../Form/Form";

import GitHubIcon from '@material-ui/icons/GitHub';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import InfoIcon from '@material-ui/icons/Info';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import SearchIcon from '@material-ui/icons/Search';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MessageIcon from '@material-ui/icons/Message';
import EmailIcon from '@material-ui/icons/Email';


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
            <Tooltip title="Login/Signup" aria-label="login/signup"><Button component={Link} to="/auth" color="primary" variant="outlined" style={{margin: '5px', borderRadius: '3px'}} > Login</Button></Tooltip>
          </div>


        </Toolbar >
      </AppBar >

      <Form openPopup={openPopup} setOpenPopup={setOpenPopup} ></Form>

      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List disablePadding className={classes.drawer}>
          <Toolbar />
          <ListSubheader component="div" id="explore" disableSticky={true} >
            Explore
          </ListSubheader>

          <ListItem button onClick={() => setOpenDrawer(false)} >
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button onClick={() => setOpenDrawer(false)} >
            <ListItemIcon><WhatshotIcon /></ListItemIcon>
            <ListItemText primary="Trending" />
          </ListItem>
          <ListItem button onClick={() => setOpenDrawer(false)} >
            <ListItemIcon><ShuffleIcon /></ListItemIcon>
            <ListItemText primary="Random" />
          </ListItem>
          <ListItem button onClick={() => setOpenDrawer(false)} >
            <ListItemIcon><LocalOfferIcon /></ListItemIcon>
            <ListItemText primary="Browse" />
          </ListItem>
          <ListItem button onClick={() => setOpenDrawer(false)} >
            <ListItemIcon><SearchIcon /></ListItemIcon>
            <ListItemText primary="Search" />
          </ListItem>
          <Divider />

          <ListSubheader component="div" id="account" disableSticky={true}>
            Account
          </ListSubheader>

          <ListItem button onClick={() => setOpenDrawer(false)} >
            <ListItemIcon><ExitToAppIcon /></ListItemIcon>
            <ListItemText primary="Login" />
          </ListItem>
          <ListItem button onClick={() => setOpenDrawer(false)} >
            <ListItemIcon><VpnKeyIcon /></ListItemIcon>
            <ListItemText primary="Super User" />
          </ListItem>


          <Divider />
          <ListSubheader component="div" id="social" disableSticky={true}>
            Socials
          </ListSubheader>

          <ListItem button onClick={() => setOpenDrawer(false)} >
            <ListItemIcon><GitHubIcon /></ListItemIcon>
            <ListItemText primary="GitHub" />
          </ListItem>
          <ListItem button onClick={() => setOpenDrawer(false)} >
            <ListItemIcon>< MessageIcon /></ListItemIcon>
            <ListItemText primary="Matrix Chat" />
          </ListItem>
          <ListItem button onClick={() => setOpenDrawer(false)} >
            <ListItemIcon>< EmailIcon /></ListItemIcon>
            <ListItemText primary="Contact Us" />
          </ListItem>

          <Divider />
          <ListSubheader component="div" id="more" disableSticky={true}>
            More
          </ListSubheader>

          <ListItem button onClick={() => setOpenDrawer(false)} >
            <ListItemIcon>< AddCircleIcon /></ListItemIcon>
            <ListItemText primary="Submit your distro" />
          </ListItem>
          <ListItem button onClick={() => setOpenDrawer(false)} >
            <ListItemIcon>< InfoIcon /></ListItemIcon>
            <ListItemText primary="About Us" />
          </ListItem>
          <ListItem button onClick={() => setOpenDrawer(false)} >
            <ListItemIcon>< AddCircleIcon /></ListItemIcon>
            <ListItemText primary="Add Distro" />
          </ListItem>



        </List>
      </Drawer>
    </>
  );
}

export default Header;
