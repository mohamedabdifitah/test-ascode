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
function Editor() {
 var code = "HELLO WORLD "
 function TextInputHandler(e:React.FormEvent<HTMLOListElement>) {
  const lines = [e.target]
  lines.map((index,data) => {
   console.log(data,index)
   
  })
 }
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

 return (
  <div className="Editor__section">
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
   <div 
    className="code__section"
   >
    <EditorComp
          language="jsx"
          displayName="HTML"
          value={html}
          onChange={setHtml}
     />
    {/*
    <CodeMirror
     value={openFile}
     options={{
      mode: 'xml',
     theme: 'material',
     lineNumbers: true
    }}
    onBeforeChange={handleChange}
   />
   "/}
   {/*
    <ol 
    className="line__numbers"
    contentEditable="true"
    onInput={(e) => {                                              TextInputHandler(e)                                          }}
    
    
    >
    <li className="line__numbers">
     {createCode()}
    </li>
   </ol>
   */}
   </div>
  </div>

 )

}

export default Editor 
