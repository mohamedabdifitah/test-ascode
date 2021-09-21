import React,{useState,useRef} from "react"
function EditorStates(props) {
  //const [EditorScreens,setEditorScreens] = useState("")
  const EditorRef  = useRef <HTMLDivElement>(null);
  const[EditorState,setEditorState] = useState("");
  //const[EditorState1,setEditorState1] = useState("")
  const [lang,setLang] = useState("markdown");
  const [EditorScreens,setEditorScreens] = useState(1);
  const[height,setheight] = useState("100%");
  const [width,setwidth] = useState("100%");
  const[ShowPreviewMd,setShowPreviewMd]= useState(false)
  return {
   EditorScreens,
   setEditorScreens,
   EditorRef,
   EditorState,
   setEditorState,
   lang,
   setLang,
   height,
   setheight,
   width,
   setwidth,
   ShowPreviewMd,
   setShowPreviewMd
  }
}

export default EditorStates
