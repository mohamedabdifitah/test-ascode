import React, { useState } from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { Controlled as ControlledEditor } from 'react-codemirror2'
interface Props {
language:string,
displayName:string,
value:any,
onChange:any,
}
export default function EditorViewer(props:Props) {

  const {
    language,
    displayName,
    value,
    onChange
  } = props
  const [open, setOpen] = useState(true)
  
  function handleChange(editor:any, data:any, value:any) {
    onchange(value)
  }
  

  return (
    <div className={`editor-container ${open ? '' : 'collapsed'}`}>
      <ControlledEditor
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          theme: 'material',
          lineNumbers: true
        }}
      />
    </div>
  )
}
