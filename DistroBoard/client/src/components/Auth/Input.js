import React from 'react';
import {InputAdornment, IconButton, TextField, Grid} from '@material-ui/core';

import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';

const Input = ({half, handleChange, handleShowPassword, name, label, placeholder, autoFocus, type}) => {
  return (
    <>
      <Grid item xs={6} md={12} sm={half ? 6 : 12}>
        <TextField
          name={name}
          label={label}
          placeholder={placeholder}
          onChange={handleChange}
          autoFocus={autoFocus}
          variant="outlined"
          type={type}
          fullWidth
          required
          InputProps={name === 'password' ? {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleShowPassword}>
                  {type === 'password' ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            ),
          } : null}


        />
      </Grid>
    </>
  )
};

export default Input;
