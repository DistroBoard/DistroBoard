import React from 'react';
import {useSelector} from 'react-redux';
import {CircularProgress, Grid} from '@material-ui/core';
import Distro from './RandomDistro/RandomDistro';
import useStyles from './styles';

const Distros = ({setCurrentId}) => {
  const distros = useSelector((state) => state.distros);
  const classes = useStyles();

  return (
    !distros.length ? <CircularProgress className={classes.mainContainer} /> : (
      <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
        {distros.map((distro) => (
          <Grid key={distro._id} item xs={12} sm={6} md={3} >
            <Distro distro={distro} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Distros;
