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
       {/*<FileOpenerHeader />
       <ScrollableTabsButtonAuto />
       
       <ListFiles file={[{icon:"hhh",name:"python",cancel:IoClose},{icon:"wow",name:"jsi",cancel:IoClose},{icon:"typescript",name:'typescript',cancel:IoClose},{icon:"https://en.m.wikiversity.org/wiki/Python#/media/File%3APython.svg",name:"main.py",cancel:IoClose},{icon:"https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_typescript_icon_130108.png",name:"src.ts",cancel:IoClose,},]} />
       <GridListTile />
      < CustomizedTabs />
       */}
       <SimpleTabs />
       </div>
        <Editor />

       </div>

  )
}
export default Windows
