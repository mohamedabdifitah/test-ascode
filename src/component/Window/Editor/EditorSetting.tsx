import {IoPlayOutline} from "react-icons/io5";
import {BsLayoutSplit} from "react-icons/bs";
import IconButton from '@material-ui/core/IconButton';
import Editor from "./Editor";
import {BiGitPullRequest} from "react-icons/bi";
import React,{useRef} from "react";
import EditorSplitter from "./EditorSplitter"
interface Iprops {
EditorScreens: number,
setEditorScreens:React.Dispatch<React.SetStateAction<number>>

}
function EditorSetting(props:Iprops){
 
 const { windowScreenSize} = EditorSplitter()
 const windowScreenSizer = () =>{
  props.setEditorScreens(props.EditorScreens+1)
  alert(props.EditorScreens)
 }
 return(
    <div className="file__layout__setting">
      <IconButton onClick={()=> windowScreenSizer()} style={{color:"white",position:"relative",left:"1.5rem"}}>
      <BsLayoutSplit style={{fontSize:"30px"}} />
      </IconButton>
      <IconButton style={{position:"relative",left:"1rem", fontSize:"30px", color:"white"}}>
       <BiGitPullRequest style={{fontSize:"30px",color:"white"}} />
      </IconButton>
      <IconButton  style={{position:"relative",left:"0.5rem",fontSize:"30px",color:"white"}}>
     <IoPlayOutline style={{fontSize:"30px",color:"white"}} />
     </IconButton>
     
    </div>
 )
}

export default EditorSetting
