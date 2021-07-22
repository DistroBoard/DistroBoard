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
  menuIcons: {
    paddingRight: '5px',
  },
  responsive: {
    display: 'none',
    [theme.breakpoints.up("sm")]: {
      display: 'flex',
    },
  },
  responsiveMenu: {
    position: 'absolute',
    right: '1px',
    display: 'flex',
    [theme.breakpoints.up("sm")]: {
      display: 'none',
    },
  },
  title: {
    marginRight: "auto",
  },
  drawer: {
    width: '250px',
  },
  content: {
    padding: theme.spacing(3),
  },
}));
