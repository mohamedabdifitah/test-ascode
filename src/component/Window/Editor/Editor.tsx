import "./Editor.css"
import {UnControlled as CodeMirror} from 'react-codemirror2'
import React,{useRef,useEffect,useState} from "react";
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import EditorComp  from "./EditorComp";
import useLocalStorage from "./useLocalStorage"
import SimpleTabs from "../BasicTab";
import EditorSetting from "./EditorSetting"
import "../WindowsSplitter.js"
import EditorSplitter from "./EditorSplitter"
interface Iprops {
height:string,
setheight:React.Dispatch<React.SetStateAction<string>>,
width:string,
setwidth:React.Dispatch<React.SetStateAction<string>>,
EditorScreens:number;
}
function Editor(props:Iprops) {
 var code = "HELLO WORLD "
 function TextInputHandler(e:React.FormEvent<HTMLOListElement>) {
  const lines = [e.target]
  lines.map((index,data) => {
   console.log(data,index)
   
  })
 }
 function constructEditors(Editors:number){
   if(Editors==1){


    return(                                                         
     <div
     className="code__section"
     style={{width:props.width,height:props.height,}}> 
     <EditorComp                                                                   language="python"                                                           displayName="HTML"                                                          value={EditorState}                                                         onChange={setEditorState}
      className={"editor__comp"}                                                  />
      </div>
      )
   }else if(Editors==2){
    return(
    <div className="code__section " 
    style={{width:"100%", height:"100%",display:"grid",gridTemplateColumns:"1fr 1fr"}}>
     <div
     className="code__section"
     style={{width:"100%",height:props.height}}
     >
     <EditorComp
     language="python"
     displayName="HTML"
     value={EditorState}
     onChange={setEditorState}
     className={"editor__comp"}
     />
     </div>
     <div className="code__section"
     style={{width:"100%" ,height:props.height}}>
     <EditorComp
     language="python"
     displayName="HTML"
     value={EditorState}
     onChange={setEditorState}
     className={"editor__comp"}
     />   
     </div>
     </div>
    )}else if(Editors==3){
      return(                                                                     <div className="code__section "                                             style={{width:"100%", height:"100%",display:"grid",gridTemplateColumns:"1fr 1fr",gridTemplateRows:"1fr 1fr", gridGap:"3px"}}>
      <div                                                                        className="code__section"                                                   style={{width:"100%",height:"100%"}}
      >                                                                           <EditorComp                                                                 language="python"                                                           displayName="HTML"                                                          value={EditorState}                                                         onChange={setEditorState}                                                   className={"editor__comp"}                                                  />                                                                          </div>                                                                      <div className="code__section"                                              style={{width:"100%" ,height:"100%"}}>
      <EditorComp                                                                 language="python"                                                           displayName="HTML"                                                          value={EditorState}                                                         onChange={setEditorState}                                                   className={"editor__comp"}                                                  />                                                                          </div>
       <div className="code__section"
        style={{width:"100%" , height:"100%",gridColumnStart:"1",gridColumnEnd:"3"}}>
	<EditorComp
	 language="python"                                                           displayName="HTML"                                                          value={EditorState}                                                         onChange={setEditorState}                                                   className={"editor__comp"}                                                  />
	 </div>
      </div>                                                                     )}else if(Editors==4){
        return(
	 <div className="code__section "                                             style={{width:"100%", height:"100%",display:"grid",gridTemplateColumns:"1fr 1fr",gridTemplateRows:"1fr 1fr", gridGap:"3px"}}>
	  <div                                                                        className="code__section"                                                   style={{width:"100%",height:"100%"}}                                        >                                                                           <EditorComp                                                                 language="python"                                                           displayName="HTML"
	  value={EditorState}                                                         onChange={setEditorState}                                                   className={"editor__comp"}
	  />
	  </div>
	  <div                                                                        className="code__section"                                                   style={{width:"100%",height:"100%"}}                                        >                                                                           <EditorComp                                                                 language="python"                                                           displayName="HTML"
	  value={EditorState}                                                         onChange={setEditorState}                                                   className={"editor__comp"}
      />
        </div>
	<div                                                                        className="code__section"                                                   style={{width:"100%",height:"100%"}}                                        >                                                                           <EditorComp                                                                 language="python"                                                           displayName="HTML"
	value={EditorState}                                                         onChange={setEditorState}                                                   className={"editor__comp"}
      />
        </div>
	<div                                                                        className="code__section"                                                   style={{width:"100%",height:"100%"}}                                        >                                                                           <EditorComp                                                                 language="python"                                                           displayName="HTML"
	value={EditorState}                                                         onChange={setEditorState}                                                   className={"editor__comp"}
      />
        </div>
	 </div>
	)	 
	}
}

 /*
 const {windowScreenSize} = EditorSplitter()
 const [height,setheight] = useState("100%")
 const [ width,setwidth] = useState("100%")
 useEffect(()=>{
  alert(windowScreenSize.current)
  switch (windowScreenSize.current ){
   case 1:
    break;

   case 2:
    setwidth("50%")
    break;
  }
  */
  /*
  switch(windowScreenSize.current){
   case 1:
    setheight("100%")
    setwidth("100%")
    break;
   case 2 :
    setheight("100%")
    setwidth("50%")
    break;
   

  } /*
  
 },)
 */
 /*const ListRef = useRef<HTMLOLlistElement>(null)*/
 const [openFile,setOpenFile] = useState("<ol></ol>")
 /*
 const Test = () => {
  setOpenFile(true)
  if (openFile) {
   console.log(ListRef?.current?.firstElementChild())

  }
 }
 */
 /*
  */
  /*
  const [html, setHtml] = useLocalStorage('html', '')
  const [css, setCss] = useLocalStorage('css', '')
  const [js, setJs] = useLocalStorage('js', '')
  const [srcDoc, setSrcDoc] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `)
    }, 250)

    return () => clearTimeout(timeout)
  }, [html, css, js])
  */
  
  const EditorRef  = useRef <HTMLDivElement>(null)
  const[EditorState,setEditorState] = useState("")
  const[EditorState1,setEditorState1] = useState("")
  return (
   <div className="Editor__section" /*style={{display:props.EditorScreens? "flex":"grid" }}*/ ref={EditorRef}>
   {/*
   <div className="Windows__header">                                  <SimpleTabs />                                                    <EditorSetting />                                                 </div>
   */}
   {/*
   <table> 
    <ol>
    <li>
    <tr>
     <td contentEditable="true">
     <h4 className="keyword__word">
      import </h4>
      </td>
      <td contentEditable="true">
      <h4 className="primary__word">
       data
       </h4>
      </td>
     <td contentEditable="true"><h4 className="keyword__word" 
     >from </h4> </td>
     <td contentEditable="true">
     <h4 className="primary__word">
     "./data"
     </h4>
     </td>
    </tr>
    </li>
    </ol>
   </table>

   <CodeMirror
    value={code}
    options={{
     mode: 'xml',
     theme: 'darcula',
     lineNumbers: true
    }}
    
   />
   */}
   {/*
   <div 
    className="code__section"
    style={{width:props.width,height:props.height}}
   >
    <EditorComp
          language="python"
          displayName="HTML"
          value={EditorState}
          onChange={setEditorState}
     />
     <div className="code__section__mirror">
     </div>
   </div>
   */}
   {/*{constructEditors(props.EditorScreens)}*/}
   <div className="code__section" /* style={{width:props.width}}*/ >
   <EditorComp                                                       language="python"                                                 displayName="HTML"                                                value={EditorState}                                               onChange={setEditorState}                                         className={"editor__comp"}                                        />
   </div>
  </div>

 )

}

export default Editor
