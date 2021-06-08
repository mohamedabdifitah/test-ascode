import {TextField,Avatar} from "@material-ui/core"
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const styles = {
  root: {
  }
};

const useStyles = makeStyles(styles);

export const MyButton = () => {
  const classes = useStyles();
  return <Avatar className={classes.root}>Styled Button</Avatar>;
};

