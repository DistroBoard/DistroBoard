import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  logo: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    marginRight: 13,
  },

}));
