import React from 'react';
import {useSelector} from 'react-redux';
import {Typography, Grid} from '@material-ui/core';
import Distro from './Distro/Distro';
import useStyles from './styles';

const Distros = ({setCurrentId}) => {
  const distros = useSelector((state) => state.distros);
  const classes = useStyles();

  return (
    !distros.length ? <Typography variant="h6" style={{flexGrow: 1}}>Sorry we could not fetch anything. <br /> Please try again later.</Typography> : (
      <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
        {distros.map((distro) => (
          <Grid key={distro._id} item xs={12} sm={6} >
            <Distro distro={distro} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Distros;
