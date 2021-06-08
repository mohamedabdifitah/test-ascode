import "./Sidebar.css";
/*
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import FolderIcon from '@material-ui/icons/Folder';
import FolderOpenTwoToneIcon from '@material-ui/icons/FolderOpenTwoTone';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
*/
import Files from "./Files/Files"
import {ExtensionSplitter} from "./ExtensionSplitter"
import Explore from "./Explore/Explore"
function Sidebar() {
  return (
       <div className="Sidebar">
        <div className="sidebar__icons">
	{/*
	  <FolderOpenTwoToneIcon className="FolderOpenTwoToneIcon" style={{ fontSize: 50 }}/>
	  <ShoppingCartOutlinedIcon style={{fontSize:50}} />
	  
*/}
	  </div>
	<div>
	</div>
	<Explore />
	<Files />

       </div> 

  )
}
export default Sidebar
