import Tab from '@material-ui/core/Tab';
import CustomizedTabs from "./Tabscomp";
import IconTabs from "./OpenFiles";
import ScrollableTabsButtonAuto from "./ScrollTabs";
import FileOpenerHeader from "./FileOpenerHeader";                          import ListFiles from './ListFiles/ListFiles'
import {IoClose} from "react-icons/io5"
import { GridListTile } from '@material-ui/core';
import SimpleTabs from './BasicTab';
import Editor from "./Editor/Editor";
import EditorSetting from "./Editor/EditorSetting";
import React ,{useState,useRef,useEffect} from "react";
interface Iprops {
EditorScreens:number,
setEditorScreens:React.Dispatch<React.SetStateAction<number>>,
}
function ConstructWindows(props:Iprops){
  const {
   EditorScreens,
   setEditorScreens,

  }=props
  const[height,setheight] = useState("100%")
  const [width,setwidth] = useState("100%")
  /*const EditorScreens = useRef(1)*/
  /*const [EditorScreens,setEditorScreens] = useState(1)*/
  
  useEffect(()=>{
  const WidthRange = 100 / EditorScreens;                                     setwidth(`${WidthRange}%`)                                                

  },[EditorScreens])

  
  return (
   <div className="Windows__editor" style={{width:width}}>
    <div className="Windows__header"> 
     <SimpleTabs />
    <EditorSetting EditorScreens={EditorScreens} setEditorScreens={setEditorScreens}/>
       </div>
       <Editor height={height} setheight={setheight} width={width} setwidth={setwidth} EditorScreens={EditorScreens} />
     </div>


  )


}

export default ConstructWindows
