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
            Distro of the Day
        </Typography>
          <Typography variant="h5" component="h2">
            Arch Linux
        </Typography>
          <Typography  >
            The best distro in the world
          </Typography>
          <Typography variant="body2" component="p">
            Use Arch
          <br />
            {'"Cuz WIndows suX"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>


    </>
  );
}

export default Distro;
