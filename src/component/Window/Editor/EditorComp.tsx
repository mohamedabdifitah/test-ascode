import React, { useState,useRef,useEffect } from 'react'
import 'codemirror/lib/codemirror.css'
import * as CodeMirror from 'codemirror/lib/codemirror.js';
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
 * scroll bars
 */
import 'codemirror/addon/scroll/annotatescrollbar.js'
import 'codemirror/addon/scroll/simplescrollbars.js';
import 'codemirror/addon/scroll/simplescrollbars.css';
/*
 * Tern
 */
import 'codemirror/addon/tern/tern.js';
import 'codemirror/addon/tern/worker.js';
import 'codemirror/addon/tern/tern.css';
/*
 * dialog 
 */
import 'codemirror/addon/dialog/dialog.js';
import 'codemirror/addon/dialog/dialog.css';

/*
 * searchCursor
 */
import 'codemirror/addon/search/searchcursor.js';
/*
 * autoComplete import 
 */
import 'codemirror/addon/hint/show-hint.js';
import 'codemirror/addon/hint/javascript-hint.js'
import 'codemirror/addon/hint/show-hint.css'
import 'codemirror/addon/hint/anyword-hint.js';
import 'codemirror/addon/hint/html-hint.js';
import 'codemirror/addon/hint/css-hint.js';
import 'codemirror/addon/hint/sql-hint.js';
import 'codemirror/addon/hint/xml-hint.js';

/*
 * matchbrackets
 */
import 'codemirror/addon/edit/matchbrackets.js'
import 'codemirror/addon/edit/closebrackets.js';
import 'codemirror/mode/meta.js';
/*
 * comments
 */
import 'codemirror/addon/comment/comment.js';
/*
 * textarea autocomplete
 */
/*
 * search/match-highlighter.js
 */
import 'codemirror/addon/search/match-highlighter.js';
/*
 * lint
 */
import 'codemirror/addon/lint/lint.js';
/*
 *selection/mark-selection.js
 */
import 'codemirror/addon/selection/mark-selection.js';
/*
 *selection/active-line.js
 */
import 'codemirror/addon/selection/active-line.js';
/*
 *selection/selection-pointer.js
 */
import 'codemirror/addon/selection/selection-pointer.js';
/*
 *comment/continuecomment.js
 */
import 'codemirror/addon/comment/continuecomment.js';
/*
 * merge/merge.js
 */
import 'codemirror/addon/merge/merge.js';
import EditorModal from './EditorModal';
import SimpleModal from './EditorModalComp';
import LanguageFetcher from "../../../languages/index"
/*
 * js external libary autocomplete
 */
import* as Aulx from 'aulx';
import AulxUI from 'aulx/aulx-ui.js';
import { Controlled as ControlledEditor } from 'react-codemirror2'
interface Props {
language:string;
displayName:string;
value:string;
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
  const [lineChar,setlineChar] = useState({line:0,ch:0,sticky:null})
  const [open, setOpen] = useState(true)
  const [cursorPosition,setCursorPosition] = useState()
  /*
  function handleChange(editor:any, data:any, value:any) {
    const doc = editor.getDoc()
    console.log(doc)
    const cursor = doc.getCursor()
    //setlineChar(cursor)
    console.log(cursor)
    setlineChar(cursor)
    console.log(lineChar)


    onChange(value)
  }
  */
  /*
  const codemirrorRef = React.useRef();
  React.useEffect(() => {
  const current = codemirrorRef.current.editor.display.wrapper.style.height = "1000px";
});
 */
  /*
  const EditorRef = useRef()
  */
  /*const x_axis = useRef(323)
  const y_axis = useRef(182)
  */
  const [x_axis,set_x_axis] = useState(30)
  const [y_axis,set_y_axis] = useState(25)
  const[setterValue,setSetterValue] = useState("")
  var editorRef = useRef("")
  var doc = useRef("");
  console.log(editorRef.current)
  function OnInputHandler(e:InputEvent,value:string,close:any){
   alert(value)
  }
   var codeSection = document.querySelector('.react-codemirror2.code-mirror-wrapper')
   /*window.addEventListener('mousemove',function(e){
    /*x_axis.current = e.x
    y_axis.current = e.y
    */
    /*
    set_x_aixs(e.x)
    set_y_axis(e.y)
   })
   */
   /*
   useEffect(()=>{
    window.addEventListener('mousemove',function(e){
     set_x_axis(e.x)
     set_y_axis(e.y)
     }
     )

   },[])
   */
  useEffect(()=>{
  LanguageFetcher(language,value,onChange)
  },[value])
  /*
  useEffect(()=>{
   /*console.log(codeSection?.getSelection())*/
  /*
  codeSection?.addEventListener('mousemove',(e)=>{
   console.log(e)

  })
  
  
  },[value])
  */
  const ModalRef = useRef(true)
  const [ModalOpen,setModalOpen] = useState(false)
  /*var input = prompt('Enter on/off')*/
  /*var splitCode = "";
  splitCode = (value.split(' '))
  */
  React.useEffect(()=>{                                                            if(value=="") {                                                               
   setModalOpen(ModalOpen)
  /*}else if(value.match(/\w\s/g) || value.match(/\s/g)){
   setModalOpen(false)
  */}else{
  setModalOpen(true)                                                        
  }                                                                                },[value])
  
  //const[setterValue,setSetterValue] = useState("")
  console.log(doc,"hh")
  const CodemirrorRef = useRef<HTMLElement>("")
  //const editorRef= useRef('')
  console.log(CodemirrorRef)
  //var editorReferrence = CodeMirror.fromTextArea(document.querySelector('.react-codemirror.code-mirror-wrapper'));
  //var aulxui = new AulxUI.CM(CodemirrorRef.current.doc);
  //console.log(AulxUI)
  // or simply ...
  //new AulxUI.CM(idOfTextbox);
  // And that's it. Your editor now features JS autocompletion.

  return (
  <div className={className}>
   <ControlledEditor
        onBeforeChange={(editor,data,value)=>{
	onChange(value)
	editorRef.current = editor
	doc.current = editor.getDoc()
	const cursor = doc.current.getCursor()
	setlineChar(cursor)
	//console.log(CodemirrorRef.current.doc.getOption("mode"),"for CodemirrorRef")
	console.log(editor.getOption("mode"))
	//var aulxui = new AulxUI.CM(editorRef.current)
	setSetterValue(doc.current.getValue('\s'))
	}}
        value={value}
	ref={CodemirrorRef}
        className="code-mirror-wrapper"
	id="codemirror"
        options={{
	  moveOnDrag:true,
	  fixedGutter:false,
	  coverGutterNextToScrollbar:true,
	  lineWiseCopyCut:true,
	  autofocus:true,
	  addModeClass:true,
	  spellcheck:true,
	  fullLines:true,
	  alignWithWord:false,
	  blockComment:true,
	  highlightSelectionMatches:true,
	  styleActiveLine:true,
	  //nonEmpty:true,
	  selectionPointer:'true',
	  continueComments:false,
	  continueLineComment:true,
	  //scrollbarStyle:'annotateScrollbar',
	  showDifferences:true,
	  /*
	   *
	   */
	  //highlightSelectionMatches:true,
	  /*
	   *  above is my later options 
	   */

          lint: true,
          mode:language,
	  //typescript:true,
	 // minimode:'Typescript',
	 /* minimode:"css",*/
          theme: 'material',
          lineNumbers: true,
	  matchBrackets: 'true',
	  highlightNonMatching:true,
	  strict:true,
	  smartIndent: true,
	  autoCloseBrackets: true,
	  autoCursor:true,

	  extraKeys:{
	   'Ctrl-Space':'autocomplete',
	   /*'Ctrl-/': codeMirror.toggleLineComment({
	   indent: true,
	   padding: " "
	   }),
	   */
	   /*'Ctrl-up':editorRef.current.execCommand('swapLineDown')*/
	   }
	  
        }}
	
      />
      
      <EditorModal on={ModalOpen} lineChar={lineChar} setlineChar={setlineChar}  x_axis={x_axis} set_x_axis={set_x_axis}  y_axis={y_axis} set_y_axis={set_y_axis} lang={language} code={value} onChange={onChange}  setModalOpen={setModalOpen} setterValue={setterValue} doc={doc} /*set_x_aixs={set_x_aixs} set_y_axis={set_y_axis}*/>
       {value}
      </EditorModal>
      {/*<SimpleModal />*/}
      <div className="code__section__mirror">
      <ControlledEditor 
       onBeforeChange={(editor,data,value)=>{
       onChange(value);
       //console.log(editor.getDoc.getValue())
       }}
        value={value}

        className="code-mirror-screen"
        options={{
          lint: true,
          mode:'xml',
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
