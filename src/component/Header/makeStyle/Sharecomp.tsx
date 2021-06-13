import ScreenShareIcon from '@material-ui/icons/ScreenShare';
import {makeStyles} from '@material-ui/styles'
import IconButton from '@material-ui/core/IconButton';
const useStyles = makeStyles({
  root:{
   position:'relative',
   left:'40rem',
   color:'#9e9e9e',
   //color:'#242424',
   top:'-48px',
   fontSize:'2.9rem',
   marginLeft:'-1rem',
  }                                                        })


export const ShareIcon = () => {
  const classes = useStyles();
  return <IconButton><ScreenShareIcon className={classes.root}></ScreenShareIcon></IconButton>;
};
