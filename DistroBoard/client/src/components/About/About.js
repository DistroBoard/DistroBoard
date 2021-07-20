import React from 'react';
import useStyles from './styles';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Container, Grow, Grid, Typography} from '@material-ui/core';

const About = () => {

  function createData(name, nickname, role, commits) {
    return {name, nickname, role, commits};
  }

  const rows = [
    createData('VULKAN', 'Dev', 'Full Stack', 19.0),
    createData('Naruto XY', 'Dev', 'Frontend', 17.0),
    createData('Abdellatif-dev', 'Dev', 'Servers', 16.0),

  ];

  const classes = useStyles();
  return (



    <Container maxWidth="lg">
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={12} md={12}>


              <Typography variant="h4">About Us</Typography>
              <Typography className={classes.about} variant="body1">
                Linux refers to the family of opensource operating systems based on the linux kernel. It is the leading operating system on servers worldwide and is slowly increasing its share in the desktop share too.
                It's flexibility allows several developers to make their own operating systems based on the kernel. Each day the no of linux distributions (distros) increase, this makes
                linux more and more fragmented. Here at DistroBoard we aim to provide information regarding
                all these distros in a centralized consistent & simplified manner for both new and experienced users hoping to reduce the fragementation.

              </Typography>

              <Typography className={classes.about} variant="body1">
                Linux is not just limited to operating systems, it is the core of a vast FOSS loving enthusiasts.
                <br />
                We are a small team of developers in this huge community expressing our love for linux in a manner where we make information about linux more easily accessable.
                Hope what you find in here helps you  :)
              </Typography>

              <Typography className={classes.about} variant="h5">Our Team</Typography>


              <TableContainer component={Paper}>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell align="left">NickName</TableCell>
                      <TableCell align="center">Role</TableCell>
                      <TableCell align="right">Commits</TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="left" >{row.nickname}</TableCell>
                        <TableCell align="center" >{row.role}</TableCell>
                        <TableCell align="right" >{row.commits}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>

                </Table>
              </TableContainer>


            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>

  );
};

export default About;
