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
import ExploreTabs from "../../../Tabs/Explore/ExploreTabs";
import "./Explore.css"
import ExploreOpener from "../../.././Layouts/ExploreOpener/ExploreOpener";


interface Props {
 ExploreChangerLayout:number,
 setExploreChangerLayout:React.Dispatch<React.SetStateAction<number>>,

}
const Explore = ({ExploreChangerLayout,setExploreChangerLayout}:Props) => {
 const [SvgIcon , setSvgIcon] = useState(false);
 /*
 const {ExploreChangerLayout,setExploreChangerLayout} = ExploreOpener();
 */
 const [Color , setColor] = useState("white")
 const SelectedLayout = (index:number,Tab:string) => {
  setExploreChangerLayout(index)
  setColor("white")
  /*document.getElementById(Tab).className += "selected";*/
 }

 /*const SvgIconsSplitter = (svgIcon) => {
  return null
  

 }
 */
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
       {ExploreTabs.map((Tab,index) => {
        return (
	<div key={index} style={{width:"100%"}}>
	 <IconButton onClick={() => {
	 SelectedLayout(index,Tab.class)
	 }}
	 >
	 {/*<img  id ={ Tab.class} className={Tab.class} src={Tab.icon} /> 
	 */}
	 <Tab.component style={Tab.style} color={ExploreChangerLayout==index?Color:"grey"} /> 
	 </IconButton> 
	 </div>
	 )
      }
      )}

     </div>

 )

}
export default Explore 
