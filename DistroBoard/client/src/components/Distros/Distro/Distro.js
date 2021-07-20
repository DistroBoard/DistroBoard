import React, {useState} from 'react';
import useStyles from './styles';
import {useDispatch} from 'react-redux';

import {deleteDistro, likeDistro} from '../../../actions/distros'

import {Card, CardActions, CardContent, CardMedia, IconButton, Typography, Avatar, Tooltip} from '@material-ui/core/';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, {bindTrigger, bindMenu} from 'material-ui-popup-state';

import Form from "../../Form/Form";


import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete';
import FeedbackIcon from '@material-ui/icons/Feedback';
import EditIcon from '@material-ui/icons/Edit';
import LanguageIcon from '@material-ui/icons/Language';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import InfoIcon from '@material-ui/icons/Info';
import ExtensionIcon from '@material-ui/icons/Extension';

const Distro = ({distro, setCurrentId}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [openPopup, setOpenPopup] = useState(false);

  return (
    <>
      <Card className={classes.card}>

        <CardMedia className={classes.media} image={distro.distroScreenshot} title={distro.distroName} />

        <div className={classes.overlay}>
          <Typography variant="body2">{distro.distroName}</Typography>
        </div>

        <div className={classes.overlay2}>

          <PopupState variant="popover" popupId="distro-admins-menu">
            {(popupState) => (
              <>
                <IconButton size="small" {...bindTrigger(popupState)}>
                  <MoreHorizIcon fontSize="default" />
                </IconButton>
                <Menu {...bindMenu(popupState)}>
                  <MenuItem onClick={() => {popupState.close(); setOpenPopup(true); setCurrentId(distro._id)}}><EditIcon className={classes.menuicons} fontSize="small" /> Edit</MenuItem>
                  <MenuItem onClick={() => {popupState.close(); dispatch(deleteDistro(distro._id))}}> <DeleteIcon className={classes.menuicons} fontSize="small" /> Remove</MenuItem>
                </Menu>
              </>
            )}
          </PopupState>

        </div>

        <div className={classes.details}>
          <Avatar aria-label="logo" variant="square" className={classes.logo} src={distro.distroLogo} />
        </div>

        <CardContent>
          <Typography variant="body2" color="textPrimary" component="h2"><Tooltip title="Development" aria-label="status"><InfoIcon className={classes.icons} fontSize="small" style={{color: "#f48fb1"}} /></Tooltip> {distro.distroStatus}</Typography>
          <Typography variant="body2" color="textPrimary" component="h2"><Tooltip title="Based on" aria-label="base"><ExtensionIcon className={classes.icons} fontSize="small" style={{color: "#f48fb1"}} /></Tooltip> {distro.distroBase}</Typography>
          <Typography variant="body2" color="textPrimary" component="h2"><Tooltip title="Release type" aria-label="release"><NewReleasesIcon className={classes.icons} fontSize="small" style={{color: "#f48fb1"}} /></Tooltip> {distro.distroRelease}</Typography>
          <Typography variant="body2" color="textPrimary" component="h2"><Tooltip title="Origin" aria-label="origin"><LocationOnIcon className={classes.icons} fontSize="small" style={{color: "#f48fb1"}} /></Tooltip>  {distro.distroOrigin}</Typography>
        </CardContent>

        {/*        
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary" component="h2">{distro.tags.map((tag) => `#${tag} `)}</Typography>
        </div>
        */}

        <CardActions className={classes.cardActions}>
          <Tooltip title="Like this distro" aria-label="like"><IconButton size="small" style={{color: "#f73378"}} onClick={() => dispatch(likeDistro(distro._id))}  > <FavoriteIcon fontSize="small" /> &nbsp; {distro.likeCount} </IconButton></Tooltip>
          <Tooltip title="Visit site" aria-label="visit"><IconButton size="small" style={{color: "#f73378"}} href={`${distro.distroUrl} `} target="_blank" > <LanguageIcon fontSize="small" /> </IconButton></Tooltip>
          <Tooltip title="Suggest change" aria-label="change"><IconButton size="small" style={{color: "#f73378"}}> <FeedbackIcon fontSize="small" /> </IconButton></Tooltip>
        </CardActions>

      </Card>

      <Form openPopup={openPopup} setOpenPopup={setOpenPopup} setCurrentId={distro._id} currentId={distro._id} ></Form>

    </>
  );
};

export default Distro;
