import {AppBar, Toolbar, Typography, IconButton, Tooltip} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import InfoIcon from '@material-ui/icons/Info';
import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import useStyles from './styles';

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
    anchorEl={anchorEl}
    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    id={menuId}
    keepMounted
    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    open={isMenuOpen}
    onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
    anchorEl={mobileMoreAnchorEl}
    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    id={mobileMenuId}
    keepMounted
    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    open={isMobileMenuOpen}
    onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
    aria-label="account of current user"
    aria-controls="primary-search-account-menu"
    aria-haspopup="true"
    color="inherit"
    >
      <AccountCircle />
    </IconButton>
    <p>Profile</p>
  </MenuItem>
</Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
    edge="start"
    className={classes.menuButton}
    color="inherit"
    aria-label="open drawer"
    >
      <MenuIcon />
    </IconButton>
    <Typography className={classes.title} variant="h6" noWrap>
    DistroBoard
  </Typography>
  <div className={classes.search}>
    <div className={classes.searchIcon}>
      <SearchIcon />
    </div>
    <InputBase
    placeholder="Search…"
    classes={{
      root: classes.inputRoot,
        input: classes.inputInput,
    }}
    inputProps={{ 'aria-label': 'search' }}
    />
  </div>

  <Tooltip title="About" aria-label="about" edge="end"><IconButton color="inherit" edge="end"><InfoIcon /></IconButton></Tooltip>
  <Tooltip title="View Source" aria-label="source" edge="end"><IconButton color="inherit" edge="end" href="https://github.com/DistroBoard/DistroBoard"><GitHubIcon /></IconButton></Tooltip>
  <div className={classes.grow} />
  <div className={classes.sectionDesktop}>
    <IconButton
    edge="end"
    aria-label="account of current user"
    aria-controls={menuId}
    aria-haspopup="true"
    onClick={handleProfileMenuOpen}
    color="inherit"
    >
      <AccountCircle />
    </IconButton>
  </div>
  <div className={classes.sectionMobile}>
    <IconButton
    aria-label="show more"
    aria-controls={mobileMenuId}
    aria-haspopup="true"
    onClick={handleMobileMenuOpen}
    color="inherit"
    >
      <MoreIcon />
    </IconButton>
  </div>
</Toolbar>
      </AppBar>
    {renderMobileMenu}
    {renderMenu}
  </div>
  );
}
