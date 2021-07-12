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
import EditorSetting from "./Editor/EditorSetting";
import React ,{useState,useRef,useEffect} from "react";
import ConstructWindows from "./ConstructWindows"
function Windows() {
  /*
  const EditorLayoutCounter = Editor()
  
  console.log(EditorLayoutCounter)
  */
  const[height,setheight] = useState("100%")
  const [width,setwidth] = useState("100%")
  /*const EditorScreens = useRef(1)*/
  const [EditorScreens,setEditorScreens] = useState(1) 
  /*
  function constructEditors(Editors:number){
   if(Editors==0){
    alert("hello")
   }else{
    for (var EditorScreen =0;EditorScreen <= Editors;EditorScreen++){
     return (
       <Editor height={height} setheight={setheight} width={width} setwidth={setwidth} />
     )
    }

   }
  }
  */
  /*
  useEffect(()=>{
  const WidthRange = 100 / EditorScreens 
  setwidth(`${WidthRange}%`)


  },[EditorScreens])
  */
  function WindowsSplitter(){
   if(EditorScreens==1){
    return (
      <ConstructWindows EditorScreens={EditorScreens} setEditorScreens={setEditorScreens}/>
    )
   }else{
    for(var loop = 0; loop < EditorScreens;loop++){
     return(
       <ConstructWindows EditorScreens={EditorScreens} setEditorScreens={setEditorScreens}/>
     )

      

   }}

  }
  return (                                                       
  <div className="Windows" >
      {/*
      <div className="Windows__editor">
       <div className="Windows__header">
        <SimpleTabs />
        <EditorSetting EditorScreens={EditorScreens} setEditorScreens={setEditorScreens}/>
       </div>
         <Editor height={height} setheight={setheight} width={width} setwidth={setwidth} EditorScreens={EditorScreens} />
	 
	</div>
	*/}
         <ConstructWindows EditorScreens={EditorScreens} setEditorScreens={setEditorScreens}/>
	</div>
     
  )
}
export default Windows
