import React from 'react';
import useStyles from './styles';


import {Card, CardActions, CardContent, CardMedia, IconButton, Typography, Avatar, Tooltip} from '@material-ui/core/';

import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete';
import LanguageIcon from '@material-ui/icons/Language';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import LocationOnIcon from '@material-ui/icons/LocationOn';

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
          <Typography variant="body2" color="textSecondary" component="h2"><LocationOnIcon fontSize="small" />{distro.distroOrigin}</Typography>
          <Typography variant="body2" color="textSecondary" component="p">{distro.distroDescription}</Typography>
        </CardContent>

        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary" component="h2">{distro.tags.map((tag) => `#${tag} `)}</Typography>
        </div>

        <CardActions className={classes.cardActions}>
          <Tooltip title="Like this distro" aria-label="like"><IconButton size="small" color="secondary"> <FavoriteIcon fontSize="small" /> </IconButton></Tooltip>
          <Tooltip title="Visit site" aria-label="visit"><IconButton size="small" color="secondary" href={`${distro.distroUrl} `} target="_blank" > <LanguageIcon fontSize="small" /> </IconButton></Tooltip>
          <Tooltip title="Delete this distro" aria-label="delete"><IconButton size="small" color="secondary"><DeleteIcon fontSize="small" /> </IconButton></Tooltip>
        </CardActions>

      </Card>
    </>
  );
}

export default Distro;
