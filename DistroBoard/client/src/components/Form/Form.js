import React, {useState} from 'react';

import {TextField, Button, Typography, Paper} from '@material-ui/core';
import FileBase from 'react-file-base64';
import useStyles from './styles';

const Form = () => {
  const [distroData, setDistroData] = useState({
    creator: '', title: '', description: '', tags: '', selectedFile: ''
  });
  const classes = useStyles();

  const handleSubmit = () => {}

  const clear = () => {}
  return (

    <Paper className={classes.paper} >
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">Add a Distro</Typography>

        <TextField name="creator" label="Creator" fullWidth variant="outlined"
          value={distroData.creator}
          onChange={(e) => setDistroData({...distroData, creator: e.target.value})}
        />

        <TextField name="distroName" label="Distro Name" fullWidth variant="outlined"
          value={distroData.distroName}
          onChange={(e) => setDistroData({...distroData, distroName: e.target.value})}
        />

        <TextField name="distroDescription" label="Description" multiline fullWidth variant="outlined"
          value={distroData.distroDescription}
          onChange={(e) => setDistroData({...distroData, distroDescription: e.target.value})}
        />

        <TextField name="tags" label="Tags" fullWidth variant="outlined"
          value={distroData.tags}
          onChange={(e) => setDistroData({...distroData, tags: e.target.value})}
        />

        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={(base64) => setDistroData({...distroData, selectedFile: base64})}
          />
        </div>

        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit">Submit</Button>
        <Button className={classes.buttonClear} variant="contained" color="secondary" size="small" onClick={clear} >Clear</Button>

      </form>
    </Paper>

  );
}


export default Form;


