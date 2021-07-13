import React, { useState,useRef } from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/theme/monokai.css';
import 'codemirror/theme/eclipse.css'
import 'codemirror/theme/erlang-dark.css';
import 'codemirror/theme/night.css'
import 'codemirror/theme/neo.css';
import 'codemirror/theme/darcula.css';
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import 'codemirror/mode/python/python'
import 'codemirror/mode/jsx/jsx'
import 'codemirror/mode/django/django';
/*
import 'codemirror/mode/typescript/typescript'
*/
import { Controlled as ControlledEditor } from 'react-codemirror2'

interface Props {
language:string;
displayName:string;
value:any;
onChange:any;
className:string
}

export default function EditorComp(props:Props) {
  const {
    language,
    displayName,
    value,
    onChange,
    className
  } = props
  const [open, setOpen] = useState(true)

  function handleChange(editor:any, data:any, value:any) {
    onChange(value)
  }
  /*
  const codemirrorRef = React.useRef();
  React.useEffect(() => {
  const current = codemirrorRef.current.editor.display.wrapper.style.height = "1000px";
});
 */
  /*
  const EditorRef = useRef()
  */

  return (
  <div className={className}>
   <ControlledEditor
        onBeforeChange={handleChange}
        value={value}

        className="code-mirror-wrapper"
        options={{
          lint: true,
          mode:'javascript',
	  minimode:"jsx",
          theme: 'material',
          lineNumbers: true,
	  matchBrackets: true,
	  smartIndent: true,
	  autoCloseBrackets: true,
	  autoCursor:true,
	  autocomplete:true,
	  extraKeys: {
          "Space": "autocomplete"
        }
        }}
	
      />
      <div className="code__section__mirror">
      <ControlledEditor 
       onBeforeChange={handleChange}
        value={value}

        className="code-mirror-screen"
        options={{
          lint: true,
          mode:'javascript',
          minimode:"jsx",
          theme: 'material',
          lineNumbers: false,
          matchBrackets: true,
          smartIndent: true,
          autoCloseBrackets: true,
          autoCursor:true,
          autocomplete:true,
          extraKeys: {                                                      "Space": "autocomplete"
        }
        }}

      />
      </div>
   </div>
  )

  }
