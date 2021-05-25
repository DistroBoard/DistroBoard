import React, {useState} from 'react';

import {TextField, Button, Typography, Paper} from '@material-ui/core';
import FileBase from 'react-file-base64';
import useStyles from './styles';
import {useDispatch} from 'react-redux';
import {createDistro} from '../../actions/distros';
const Form = () => {
  const [distroData, setDistroData] = useState({
    creator: '', title: '', description: '', tags: '', distroLogo: '', distroScreenshot: ''
  });
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createDistro(distroData));
  }

  const clear = () => {}
  return (

    <Paper className={classes.paper} >
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">Add a Distro</Typography>

        <TextField name="creator" label="Creator" fullWidth variant="outlined"
          placeholder="Your name "
          value={distroData.creator}
          onChange={(e) => setDistroData({...distroData, creator: e.target.value})}
        />

        <TextField name="distroName" label="Distro Name" fullWidth variant="outlined"
          placeholder="Add distribution name "
          value={distroData.distroName}
          onChange={(e) => setDistroData({...distroData, distroName: e.target.value})}
        />

        <TextField name="distroDescription" label="Description" multiline fullWidth variant="outlined"
          placeholder="Add distribution description "
          value={distroData.distroDescription}
          onChange={(e) => setDistroData({...distroData, distroDescription: e.target.value})}
        />

        <TextField name="tags" label="Tags" fullWidth variant="outlined"
          placeholder="Relevant keywords seperated with ',' "
          value={distroData.tags}
          onChange={(e) => setDistroData({...distroData, tags: e.target.value})}
        />

        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={(base64) => setDistroData({...distroData, distroLogo: base64})}
          />
        </div>

        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={(base64) => setDistroData({...distroData, distroScreenshot: base64})}
          />
        </div>

        <Button className={classes.buttonSubmit} fullWidth variant="contained" color="primary" size="large" type="submit">Submit</Button>
        <Button className={classes.buttonClear} fullWidth variant="contained" color="secondary" size="large" onClick={clear} >Clear</Button>

      </form>
    </Paper>

  );
}


export default Form;


