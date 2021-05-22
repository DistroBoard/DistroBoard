import React from 'react';
import {Grow, Grid, Container} from '@material-ui/core';

import Header from './components/Header/Header';
import Distros from './components/Distros/Distros';
import Form from './components/Form/Form';

const App = () => {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Grow in>
          <Container>
            <Grid container justify="space-between" alignItems="stretch" spacing={3}>
              <Grid item xs={12} sm={7}>
                <Distros />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </>
  );
};

export default App;
