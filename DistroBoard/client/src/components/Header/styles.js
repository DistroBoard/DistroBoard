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
  appBar: {
    /*tooltip has highest z index of 1500 so to make sure that everytime z index for app bar is the highest make it higher than tooltip*/
    zIndex: 1600,
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
  profile: {
    display: 'flex',
    justifyContent: 'space-around',
  },
}));
