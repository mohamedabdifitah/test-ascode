import React,{useState} from "react";
import "./setting.css"
import SettingsIcon from "@material-ui/icons/Settings"
import IconButtons from "@material-ui/core/IconButton"
import { makeStyles } from '@material-ui/core/styles';
import Themelogo from "../../asImages/themepng.png";
import theme from "/asImages/themepng.png";
import stories from "../../asImages/Stories.gif";
import Story from "../../asImages/Story.jpg";
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import Avatar from '@material-ui/core/Avatar';
import Themes from './themes/Themes';
const Setting = () => {
  /* style part */
  const useStyles = makeStyles({
  root: {
    position:"relative",
    color:"white",
    left:"-2px"
    },
   Setting:{
    fontSize:"3rem",
   },
   Avatar:{
   fontSize:"10px",

   },
    },);
  const classes = useStyles();
  var path = process.env.PUBLIC_URL;
  const [themeClicked,setThemeClicke] = useState(false)
  const colorPicker = () => {
   return (
     <>
     <Themes />
     </>
   )
  }
  return (
     <div className="setting">
      <div className="setting__icon">
       <IconButtons className={classes.root}>
        <SettingsIcon className={classes.Setting} />
	</IconButtons>
       </div>
       <div className="theme__icon">
       <IconButtons onClick={() => {
        setThemeClicke(!themeClicked)
       }}>
        <img className="theme__image" src={Themelogo} />
	</IconButtons>
       </div>
       <div className="stories__icon">
        <IconButtons>
	{/*
	 <img className="stories__image" src={Story} />
	 */}
	 <AvatarGroup className={classes.Avatar} max={2}>
	 <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
	 <Avatar  alt="Travis Howard" src="/static/images/avatar/2.jpg" />
	 <Avatar   alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
	 <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
	 <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
	 </AvatarGroup>
	</IconButtons>
       </div>
       { themeClicked?<Themes /> :null }
     </div>
  )

}

export default Setting 
