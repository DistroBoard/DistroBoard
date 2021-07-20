import React, {useState, useEffect} from 'react';
import {Grow, Grid, Container} from '@material-ui/core';
import Distros from '../Distros/Distros';

import {useDispatch} from 'react-redux';
import {getDistros} from '../../actions/distros';

const AllDistros = () => {

  const [currentId, setCurrentId] = useState(null);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDistros());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={12} md={12}>
              <Distros setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default AllDistros;
