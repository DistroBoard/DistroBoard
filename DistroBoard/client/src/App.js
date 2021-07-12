import React, {useEffect, useState} from 'react';
import {Grow, Grid, Container} from '@material-ui/core';

import {useDispatch} from 'react-redux';
import {getDistros} from './actions/distros';

import Header from './components/Header/Header';
import Distros from './components/Distros/Distros';

const App = () => {

  const [currentId, setCurrentId] = useState(null);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDistros());
  }, [currentId, dispatch]);

  return (
    <>
      <Header />
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
    </>
  );
};

export default App;
