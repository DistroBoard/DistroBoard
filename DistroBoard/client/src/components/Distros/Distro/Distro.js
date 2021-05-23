import React from 'react';
import useStyles from './styles';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const Distro = () => {
  const classes = useStyles();
  return (
    <>
      <Card >
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Editors Pick
        </Typography>
          <Typography variant="h5" component="h2">
            Arch Linux
        </Typography>
          <Typography  >
            This is a DIY distro. You install everything <code>from</code> scratch.<code> It's</code> the experience that you want to <code>try</code>. You learn a lot after installing Arch Linux.
          </Typography>
          <Typography variant="body2" component="p">
            
          <br />
            You should try it if you want to learn Linux.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small"><a href="https://archlinux.org">Learn More</a></Button>
        </CardActions>
      </Card>

    </>
  );
}

export default Distro;
