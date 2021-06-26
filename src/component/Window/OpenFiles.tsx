import React,{useState,useMemo} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import ListFiles from "./ListFiles/ListFiles"
import Props from "./ListFiles/ListFiles"
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 500,
    backgroundColor:"#424242",
    color:"white",
  },
});

function IconTabs() {
  const Data = [
   {                                                              icon:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/1200px-Python.svg.png",
    name:"main.py",
   },
   {                                                             icon:"https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_typescript_icon_130108.png",
   name:"src.ts"
   },
   {                                                             icon:"https://www.bryntum.com/wp-content/uploads/2020/02/js-logo.png",
   name:"index.js"
   },


  ]
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [data,setData] = useState([
   {
   icon:"hhh",
   name:"welcome",
   cancel:"hhh"
   }
    
  ])
  useMemo(() => {

  },[])

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  const [FileClose,setFileClose] = useState(false)
  const OpenFiles = () => {
     return Data.map((val,index) => {
      return(
	<Tabs
        value={value}
        onChange={handleChange}                                       variant="scrollable"                                          indicatorColor="primary"                                      aria-label="icon tabs example"                              >
	{/*<Tab icon={<ListFiles file={[val]} /> } />*/}
	</Tabs>




      )

    }
    )


  }

  return (
    <Paper square className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
	variant="scrollable"
        indicatorColor="primary"
        aria-label="icon tabs example"
      >
        {Data.map((val,index) => {

	<Tab icon={val.icon} aria-label={val.name} />
	})}
	
     </Tabs>
    </Paper>
  );
}
export default IconTabs
