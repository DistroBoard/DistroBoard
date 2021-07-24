import React, {useState, useEffect} from 'react';
import {Grow, Grid, Container, Button} from '@material-ui/core';
import RandomDistros from './RandomDistros/RandomDistros';

import useStyles from './styles';
import {useDispatch} from 'react-redux';
import {getRandom} from '../../actions/distros';

import ShuffleIcon from '@material-ui/icons/Shuffle';

const Random = () => {

  const classes = useStyles();
  const [currentId, setCurrentId] = useState(null);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRandom());
  }, [currentId, dispatch]);

  return (
    <>
      <Button color="secondary" size="large" className={classes.mainContainer} startIcon={<ShuffleIcon />} variant="outlined" onClick={() => dispatch(getRandom())}  >Randomize</Button>
      <Container maxWidth="lg">
        <Grow in>
          <Container>
            <Grid container justify="space-between" alignItems="stretch" spacing={3}>
              <Grid item xs={12} sm={12} md={12}>
                <RandomDistros setCurrentId={setCurrentId} />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </>
  );
};

export default Random;
