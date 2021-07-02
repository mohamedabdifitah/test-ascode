import "./Windows.css"
import Tab from '@material-ui/core/Tab';
import CustomizedTabs from "./Tabscomp"
import IconTabs from "./OpenFiles"
import ScrollableTabsButtonAuto from "./ScrollTabs"
import FileOpenerHeader from "./FileOpenerHeader";
import ListFiles from './ListFiles/ListFiles'
import {IoClose} from "react-icons/io5"
import { GridListTile } from '@material-ui/core';
import SimpleTabs from './BasicTab'
import Editor from "./Editor/Editor";
function Windows() {
  return (                                                       <div className="Windows">
      <div className="Windows__header">
       <SimpleTabs />
       <div className="file-layout-option">
        <img className="Run-image" src="./asImages/Run.png" alt="mo"></img>
	</div>
       </div>
        <Editor />

       </div>

  )
}
export default Windows
