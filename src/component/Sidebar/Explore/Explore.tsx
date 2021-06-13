import React,{useState,useEffect} from "react";
import "./Explore.css"
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import FolderIcon from '@material-ui/icons/Folder';
import FolderOpenTwoToneIcon from '@material-ui/icons/FolderOpenTwoTone';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Icon from "../../.././asImages/icon.png";
import FileCopyIcon from '@material-ui/icons/FileCopy';
import download from "../../.././asImages/download.png"
import git from "../../.././asImages/Git(1).png"
import Fileicon from "../../.././asImages/Fileicon.png"
import gitimg from "../../.././asImages/Gitimg.jpg"
import version from "../../.././asImages/Version.png"
import gitWhiteIcon from "../../.././asImages/Git-Icon-White.png";
import ExploreIcon from '@material-ui/icons/Explore';
import {makeStyles} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import "./Explore.css"
const Explore = () => {
 const useStyles = makeStyles({
  root: { 
     fontSize:'3rem',
     color:'#262626',


    
    },
    button: {
    position:"relative",
    left:"-1rem",


    }
    });
    const classes = useStyles();
 return (
     <div className="Explore">
       <p> Explore </p>
       <img className="file__explore" src={Fileicon} />
       <img className="git__explore" src={gitWhiteIcon}></img>

      <IconButton className={classes.button}> <ExploreIcon className={classes.root}/></IconButton>
     </div>

 )

}
export default Explore 
