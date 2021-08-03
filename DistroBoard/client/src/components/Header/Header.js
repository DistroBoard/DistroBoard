import React, {useState} from 'react';
import {AppBar, Toolbar, Typography, Button, IconButton, Tooltip, Avatar, Divider,Popover,Box} from '@material-ui/core';
import {withRouter, matchPath, Link} from 'react-router-dom';

import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';

import Form from "../Form/Form";
import Search from "../Search/Search";
import MenuDrawer from "../MenuDrawer/MenuDrawer";

import logo from "../../assets/images/logo.png";
import userAvatar from "../../assets/images/user.png";

import useStyles from './styles';


import GitHubIcon from '@material-ui/icons/GitHub';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import InfoIcon from '@material-ui/icons/Info';
import MenuIcon from '@material-ui/icons/Menu';
import FaceIcon from '@material-ui/icons/Face';

const Header = () => {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const user = 1; //null

  const routes = [
    {key: 'Home', exact: true, path: '/'},
    {key: 'About', exact: true, path: '/about'},
    {key: 'Login', exact: true, path: '/auth'},
    {key: 'Random', exact: true, path: '/random'},
  ];

  const currentRoute = routes.find(
    route => matchPath(window.location.pathname, route)
  );

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
          <Typography variant="h6" component={Link} to="/" className={classes.responsive} style={{textDecoration: 'none', color: 'inherit'}}>DistroBoard</Typography>
          <Divider orientation="vertical" variant="middle" flexItem style={{color: 'inherit', marginTop: '10px', marginBottom: '10px'}} className={classes.responsive} />
          <Typography variant="body1" className={classes.responsive} style={{flexGrow: 1, textDecoration: 'none', color: 'inherit', marginTop: '2px'}}>
            {currentRoute.key}
          </Typography>
          <Search />

          <div className={classes.responsive}>
            <Tooltip title="Add Distro" aria-label="add distro"><IconButton color="inherit" onClick={() => setOpenPopup(true)}><AddCircleIcon /></IconButton></Tooltip>
            <Tooltip title="About Us" aria-label="about"><IconButton color="inherit" component={Link} to="/about"><InfoIcon /></IconButton></Tooltip>
            <Tooltip title="View Source" aria-label="source"><IconButton color="inherit" href="https://github.com/DistroBoard/DistroBoard" target="_blank"><GitHubIcon /></IconButton></Tooltip>
          </div>

          <div>
            {user? (
              <div > 
                <PopupState variant="popover" popupId="user-account">

                  {(popupState) => (
                    <div>
                      <Tooltip title="Account" aria-label="account"><IconButton {...bindTrigger(popupState)}><FaceIcon /></IconButton></Tooltip>

                      <Popover
                        {...bindPopover(popupState)}
                        anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                      }}
                        transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                      }}
                      >
                        <Box p={2} style={{marginTop:10, width:250,textAlign:'center'}}>
                          <Avatar alt="user"  src={userAvatar} style={{margin:'auto'}} />
                          <Typography variant ="h6" style={{marginTop:5}}>UserName</Typography>
                          <Typography variant ="body2" style={{marginBottom:5}}>user@usermail.com</Typography>
                          <Tooltip title="Logout" aria-label="Logout"><Button color="secondary" variant="outlined" style={{ margin: '5px', borderRadius: '3px'}} >Logout</Button></Tooltip>
                        </Box>
                      </Popover>
                    </div>
                  )}
                  </PopupState>
                </div>

            ): (
            <Tooltip title="Login/Signup" aria-label="login/signup"><Button className={classes.responsive} component={Link} to="/auth" color="secondary" variant="outlined" style={{margin: '5px', borderRadius: '3px'}} > Login</Button></Tooltip>
            )}
          </div>

        </Toolbar >
      </AppBar >

      <Form openPopup={openPopup} setOpenPopup={setOpenPopup} ></Form>
      <MenuDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer}></MenuDrawer>
    </>
  );
}

export default withRouter(Header);
