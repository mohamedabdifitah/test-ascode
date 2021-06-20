import {ImFilesEmpty} from "react-icons/im";
import {DiGitBranch} from "react-icons/di";
import {MdExplore } from "react-icons/md";
const ExploreTabs = [
 {
 name:"File Explore",
 icon:"asImages/Fileicon.png",
 component:ImFilesEmpty,
 class:"file__explore",
 style:{
  height:"40px",
  width:"40px",
  Position:"relative",
  left:"-1rem",
  }
},
{
 name:"github page",
 icon:"asImages/Git-Icon-White.png",
 component:DiGitBranch,
 class:"git__explore",
 style:{
   width:"40px",
   height:"40px",
   Position:"relative",
   left:"-1rem",
 }
},
{
 name:"Explore",
 icon:"asImages/Explore.svg",
 component:MdExplore ,
 class:"market__explore",
 style:{
   width:"40px",
   height:"40px",
   Position:"relative",
   left:"-1rem",
 }
}



]

export default ExploreTabs
