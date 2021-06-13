import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 500,
    backgroundColor:"#424242",
    color:"white",
  },
});

function IconTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Paper square className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
	variant="scrollable"
        indicatorColor="primary"
        aria-label="icon tabs example"
      >
        <Tab icon="py" aria-label="phone" />
        <Tab icon="ts" aria-label="favorite" />

        <Tab icon="js" aria-label="person" />
	<Tab icon ="M" araial-label="person" />
     </Tabs>
    </Paper>
  );
}
export default IconTabs
