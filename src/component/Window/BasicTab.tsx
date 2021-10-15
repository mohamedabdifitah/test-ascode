import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {IoClose} from "react-icons/io5"
import BasicTabsOpener from "./BasicTabsOpener";
import addEventListeners from "./DragAndDrop";
interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    /*
    flexGrow: 1,
    */
    overflow:"scroll",
    width:'70%',
  },
  AppBar : {
   backgroundColor:"#2e2e2e",
   overflow:"scroll",
  },
  Tabs:{
  overflow:"scroll",

  },
}));

function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  /*
   draggle and dropple tabs
   
  function allowDrop(ev:) {
   ev.preventDefault();
  }
  function drag(ev:React.DragEvent){
   ev.dataTransfer.setData("text", ev.target._id);
   
  }
  function drop(ev:Event) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  const tabList = ev.target.closest("div[role='tablist']");
  let node = ev.target.getAttribute("role") === "tab" ? ev.target : ev.target.closest('[role="tab"]');
  tabList.insertBefore(document.getElementById(data), node.nextSibling);
  }
  */
  React.useEffect(()=>{
   addEventListeners()

  },[])

  return (
    <div className={classes.root}>
      <AppBar position="static"   className={classes.AppBar}>
        <Tabs  value={value} onChange={handleChange} aria-label="simple tabs example" className={classes.Tabs} variant="scrollable" scrollButtons="off">
          <Tab icon={<img src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_html_icon_130541.png"/>}  >
	   <span className="MuiTab-wrapper">
	    <p> main.py </p>
	    </span>
	   <IoClose color={"black"} />

	  </Tab>
          <Tab

           draggable="true"
	  icon={<BasicTabsOpener />} 
	  />
          <Tab label="Item Three" {...a11yProps(2)} />
	  <Tab label="Item Two" {...a11yProps(1)} />                    <Tab label="Item Three" {...a11yProps(2)} />
	  <Tab label="Item Two" {...a11yProps(1)} />                    <Tab label="Item Three" {...a11yProps(2)} />
	  <Tab label="Item Two" {...a11yProps(1)} />                    <Tab label="Item Three" {...a11yProps(2)} />
	  <Tab label="Item Two" {...a11yProps(1)} />                    <Tab label="Item eight" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
       {/*
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      */}
    </div>
  );
}
export default SimpleTabs
