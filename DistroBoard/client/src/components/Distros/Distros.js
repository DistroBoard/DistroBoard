import React from 'react';
import {useSelector} from 'react-redux';

import Distro from './Distro/Distro';
import useStyles from './styles';

const Distros = () => {
  const distros = useSelector((state) => state.distros);
  const classes = useStyles();
  console.log(distros);
  return (
    <>
      <Distro />
    </>
  );
}

export default Distros;
