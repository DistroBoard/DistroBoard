import React, {useState} from 'react';
import Input from './Input';

import {Avatar, Paper, Container, Grow, Grid, Button, Typography} from '@material-ui/core';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import useStyles from './styles';

const Auth = () => {
  const classes = useStyles();
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = () => {console.log("Submitted")};
  const handleChange = () => {console.log("Changed")};
  const handleShowPassword = () => setShowPassword(!showPassword);

  const switchMode = () => setIsSignup(!isSignup);


  return (
    <Container component="main" maxWidth="xs">
      <Grow in>
        <Paper className={classes.paper} elevation={3}>
          <Avatar className={classes.avatar}><VpnKeyIcon /></Avatar>

          <Typography variant="h5">{isSignup ? 'Sign up' : 'Sign in'}</Typography>

          <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2} >
              {isSignup && (
                <>
                  <Input name="userName" label="User Name" placeholder="Your User Name" handleChange={handleChange} autoFocus half />
                </>
              )}
              <Input name="email" label="Email ID" fullWidth variant="outlined" type="email" onChange={handleChange} placeholder="Your Email ID" autoFocus />
              <Input name="password" label="Password" fullWidth variant="outlined" type={showPassword ? 'text' : 'password'} onChange={handleChange} handleShowPassword={handleShowPassword} placeholder="Your Password" />
              {isSignup && <Input name="confirmPassword" label="Repeat Password" placeholder="Repeat Password" handleChange={handleChange} type="password" />}
            </Grid>
            <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} size="large" disableElevation>
              {isSignup ? 'Sign Up' : 'Sign In'}
            </Button>


          </form>

          <Grid  >
            <Grid item>
              <Button onClick={switchMode} fullWidth  >
                {isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>

        </Paper>
      </Grow>
    </Container >

  );
};

export default Auth;
