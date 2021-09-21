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
/*
 *  all EditorState
 */
import EditorStates from "./EditorStates"
//
import Preview from "./Editor/markdown/preview"

function Windows() {
  /*
  const EditorLayoutCounter = Editor()
  
  console.log(EditorLayoutCounter)
  */
  const {EditorScreens,setEditorScreens,lang,EditorState,ShowPreviewMd,setShowPreviewMd} = EditorStates()
  /*
  const[height,setheight] = useState("100%")
  const [width,setwidth] = useState("100%")
  /*const EditorScreens = useRef(1)*/
  /*
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
  {/*
  function WindowsSplitter(){
   if(EditorScreens==1){
    return (
      <ConstructWindows widthRange={"50%"} EditorScreens={EditorScreens} setEditorScreens={setEditorScreens}/>
    )
   }else{
   
     return(
       <div style={{gridTemplateRows:"1fr 1fr"}}>
       <ConstructWindows  widthRang={"50%"}EditorScreens={EditorScreens} setEditorScreens={setEditorScreens}/>
       <ConstructWindows widthRange={"50%"} EditorScreens={EditorScreens} setEditorScreens={setEditorScreens} />
       </div>
     )
      
   }

  }
  */}
 useEffect(()=>{
   if(lang === "markdown"){                                           setEditorScreens(EditorScreens +1);                               setShowPreviewMd(true);                                         }else{                                                              setShowPreviewMd(false);                                          };                                                              },[EditorState])
   
  return (                                                       
  <div className="Windows" >
    <ConstructWindows EditorScreens={EditorScreens} setEditorScreens={setEditorScreens} type={"Editor"}/>
    {/*<ConstructWindows EditorScreens={EditorScreens} setEditorScree
ns={setEditorScreens} type={"Markdown-preview"}/>*/}

    {ShowPreviewMd == true?<Preview doc={EditorState} />:""}

	</div>
     
  )
}
export default Windows
