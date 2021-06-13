import {Avatar} from "@material-ui/core"
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
   position:'relative',
   left:'44rem',
   top:'8px',
   fontSize:'20px',

  }
})


export const MyAvatar = () => {
  const classes = useStyles();
  return <Avatar src="./profile.jpg" className={classes.root}></Avatar>;
};

