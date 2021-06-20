
/*
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import FolderIcon from '@material-ui/icons/Folder';
import FolderOpenTwoToneIcon from '@material-ui/icons/FolderOpenTwoTone';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
*/
import Files from "./Files/Files"
import {ExtensionSplitter} from "./ExtensionSplitter"
import Explore from "./Explore/Explore"
import ExploreOpener from "../.././Layouts/ExploreOpener/ExploreOpener";
import ExplorePages from "../.././Layouts/ExploreOpener/ExplorePages";
function Sidebar() {
  const {ExploreChangerLayout,setExploreChangerLayout} = ExploreOpener();
  const ExplorePage = ExplorePages[ExploreChangerLayout]
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
	<Explore ExploreChangerLayout={ExploreChangerLayout} setExploreChangerLayout={setExploreChangerLayout}/>
	<ExplorePage.component />
       </div> 

  )
}
export default Sidebar
