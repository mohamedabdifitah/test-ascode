import "./Header.css"
import IconButton from '@material-ui/core/IconButton';
import gif from "../.././asImages/Stories.gif"
import {Avatar} from "@material-ui/core"
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ScreenShareIcon from '@material-ui/icons/ScreenShare';
import Menu from "./menu/menu"
function Header(){
   const useStyles = makeStyles({
   Avatar: {
    position:'relative',
    left:'44rem',
    top:'5px',
    fontSize:'20px',
   },
   ShareIcon: {
    position:'absolute',
    left:'40rem',
    color:'#9e9e9e',
    fontSize:'2.9rem',
    marginLeft:'-3rem',

   }
   })
   const classes = useStyles();
   const handleClick = () => {
    console.log("button was clicked")
    

   }
   return (
       <div className="Header">
        {/* this will deleted
        <div className="header__icons">
	 <IconButton onClick={handleClick}> <Avatar className={classes.Avatar} src="./profile.jpg"/></IconButton>
	  <IconButton onClick={handleClick}><ScreenShareIcon className={classes.ShareIcon}></ScreenShareIcon></IconButton>
	 </div>
	 */}
	<Menu />
       </div>

   )
}

export default Header
