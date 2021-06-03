import React from 'react';
import useStyles from './styles';


import {Card, CardActions, CardContent, CardMedia, IconButton, Typography, Avatar, Tooltip} from '@material-ui/core/';

import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete';
import LanguageIcon from '@material-ui/icons/Language';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import InfoIcon from '@material-ui/icons/Info';
import ExtensionIcon from '@material-ui/icons/Extension';

const Distro = ({distro}) => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.card}>

        <CardMedia className={classes.media} image={distro.distroScreenshot} title={distro.distroName} />

        <div className={classes.overlay}>
          <Typography variant="body2">{distro.distroName}</Typography>
        </div>

        <div className={classes.overlay2}>
          <Tooltip title="Edit info" aria-label="edit"><IconButton size="small"><MoreHorizIcon fontSize="default" /></IconButton></Tooltip>
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
          <Tooltip title="Like this distro" aria-label="like"><IconButton size="small" style={{color: "#f73378"}} > <FavoriteIcon fontSize="small" /> </IconButton></Tooltip>
          <Tooltip title="Visit site" aria-label="visit"><IconButton size="small" style={{color: "#f73378"}} href={`${distro.distroUrl} `} target="_blank" > <LanguageIcon fontSize="small" /> </IconButton></Tooltip>
          <Tooltip title="Delete this distro" aria-label="delete"><IconButton size="small" style={{color: "#f73378"}} > <DeleteIcon fontSize="small" /> </IconButton></Tooltip>
        </CardActions>

      </Card>
    </>
  );
}

export default Distro;
