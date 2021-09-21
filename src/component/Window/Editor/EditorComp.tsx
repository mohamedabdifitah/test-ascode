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
//import 'codemirror/mode/xml/xml'
//import 'codemirror/mode/javascript/javascript'
//import 'codemirror/mode/css/css'
//import 'codemirror/mode/python/python'
//import 'codemirror/mode/jsx/jsx'
//import 'codemirror/mode/django/django';
/*
 * importing all modes
 */
import "codemirror/mode/apl/apl.js"
import "codemirror/mode/asciiarmor/asciiarmor.js"
import "codemirror/mode/asn.1/asn.1.js"
import "codemirror/mode/asterisk/asterisk.js"
import "codemirror/mode/brainfuck/brainfuck.js"
import "codemirror/mode/clike/clike.js"
import "codemirror/mode/clojure/clojure.js"
import "codemirror/mode/cmake/cmake.js"
import "codemirror/mode/cobol/cobol.js"
import "codemirror/mode/coffeescript/coffeescript.js"
import "codemirror/mode/commonlisp/commonlisp.js"
import "codemirror/mode/crystal/crystal.js"
import "codemirror/mode/css/css.js"
import "codemirror/mode/cypher/cypher.js"
import "codemirror/mode/d/d.js"
import "codemirror/mode/dart/dart.js"
import "codemirror/mode/diff/diff.js"
import "codemirror/mode/django/django.js"
import "codemirror/mode/dockerfile/dockerfile.js"
import "codemirror/mode/dtd/dtd.js"
import "codemirror/mode/dylan/dylan.js"
import "codemirror/mode/ebnf/ebnf.js"
import "codemirror/mode/ecl/ecl.js"
import "codemirror/mode/eiffel/eiffel.js"
import "codemirror/mode/elm/elm.js"
import "codemirror/mode/erlang/erlang.js"
import "codemirror/mode/factor/factor.js"
import "codemirror/mode/fcl/fcl.js"
import "codemirror/mode/forth/forth.js"
import "codemirror/mode/fortran/fortran.js"
import "codemirror/mode/gas/gas.js"
import "codemirror/mode/gfm/gfm.js"
import "codemirror/mode/gherkin/gherkin.js"
import "codemirror/mode/go/go.js"
import "codemirror/mode/groovy/groovy.js"
import "codemirror/mode/haml/haml.js"
import "codemirror/mode/handlebars/handlebars.js"
import "codemirror/mode/haskell/haskell.js"
import "codemirror/mode/haskell-literate/haskell-literate.js"
import "codemirror/mode/haxe/haxe.js"
import "codemirror/mode/htmlembedded/htmlembedded.js"
import "codemirror/mode/htmlmixed/htmlmixed.js"
import "codemirror/mode/http/http.js"
import "codemirror/mode/idl/idl.js"
import "codemirror/mode/javascript/javascript.js"
import "codemirror/mode/jinja2/jinja2.js"
import "codemirror/mode/jsx/jsx.js"
import "codemirror/mode/julia/julia.js"
import "codemirror/mode/livescript/livescript.js"
import "codemirror/mode/lua/lua.js"
import "codemirror/mode/markdown/markdown.js"
import "codemirror/mode/mathematica/mathematica.js"
import "codemirror/mode/mbox/mbox.js"
import "codemirror/mode/meta.js"
import "codemirror/mode/mirc/mirc.js"
import "codemirror/mode/mllike/mllike.js"
import "codemirror/mode/modelica/modelica.js"
import "codemirror/mode/mscgen/mscgen.js"
import "codemirror/mode/mumps/mumps.js"
import "codemirror/mode/nginx/nginx.js"
import "codemirror/mode/nsis/nsis.js"
import "codemirror/mode/ntriples/ntriples.js"
import "codemirror/mode/octave/octave.js"
import "codemirror/mode/oz/oz.js"
import "codemirror/mode/pascal/pascal.js"
import "codemirror/mode/pegjs/pegjs.js"
import "codemirror/mode/perl/perl.js"
import "codemirror/mode/php/php.js"
import "codemirror/mode/pig/pig.js"
import "codemirror/mode/powershell/powershell.js"
import "codemirror/mode/properties/properties.js"
import "codemirror/mode/protobuf/protobuf.js"
import "codemirror/mode/pug/pug.js"
import "codemirror/mode/puppet/puppet.js"
import "codemirror/mode/python/python.js"
import "codemirror/mode/q/q.js"
import "codemirror/mode/r/r.js"
import "codemirror/mode/rpm/rpm.js"
import "codemirror/mode/rst/rst.js"
import "codemirror/mode/ruby/ruby.js"
import "codemirror/mode/rust/rust.js"
import "codemirror/mode/sas/sas.js"
import "codemirror/mode/sass/sass.js"
import "codemirror/mode/scheme/scheme.js"
import "codemirror/mode/shell/shell.js"
import "codemirror/mode/sieve/sieve.js"
import "codemirror/mode/slim/slim.js"
import "codemirror/mode/smalltalk/smalltalk.js"
import "codemirror/mode/smarty/smarty.js"
import "codemirror/mode/solr/solr.js"
import "codemirror/mode/soy/soy.js"
import "codemirror/mode/sparql/sparql.js"
import "codemirror/mode/spreadsheet/spreadsheet.js"
import "codemirror/mode/sql/sql.js"
import "codemirror/mode/stex/stex.js"
import "codemirror/mode/stylus/stylus.js"
import "codemirror/mode/swift/swift.js"
import "codemirror/mode/tcl/tcl.js"
import "codemirror/mode/textile/textile.js"
import "codemirror/mode/tiddlywiki/tiddlywiki.js"
import "codemirror/mode/tiki/tiki.js"
import "codemirror/mode/toml/toml.js"
import "codemirror/mode/tornado/tornado.js"
import "codemirror/mode/troff/troff.js"
import "codemirror/mode/ttcn/ttcn.js"
import "codemirror/mode/ttcn-cfg/ttcn-cfg.js"
import "codemirror/mode/turtle/turtle.js"
import "codemirror/mode/twig/twig.js"
import "codemirror/mode/vb/vb.js"
import "codemirror/mode/vbscript/vbscript.js"
import "codemirror/mode/velocity/velocity.js"
import "codemirror/mode/verilog/verilog.js"
import "codemirror/mode/vhdl/vhdl.js"
import "codemirror/mode/vue/vue.js"
import "codemirror/mode/wast/wast.js"
import "codemirror/mode/webidl/webidl.js"
import "codemirror/mode/xml/xml.js"
import "codemirror/mode/xquery/xquery.js"
import "codemirror/mode/yacas/yacas.js"
import "codemirror/mode/yaml/yaml.js"
import "codemirror/mode/yaml-frontmatter/yaml-frontmatter.js"
import "codemirror/mode/z80/z80.js"
/*
 * auto complete ts 
 */
//import "./AutoComplete";
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
/*
 * fold
 */
import "codemirror/addon/fold/brace-fold.js"; 
import "codemirror/addon/fold/foldcode.js";    
import "codemirror/addon/fold/foldgutter.js";  
import "codemirror/addon/fold/markdown-fold.js";
import "codemirror/addon/fold/comment-fold.js";
import "codemirror/addon/fold/foldgutter.css"; 
import "codemirror/addon/fold/indent-fold.js";  
import "codemirror/addon/fold/xml-fold.js";

import EditorModal from './EditorModal';
import SimpleModal from './EditorModalComp';
import LanguageFetcher from "../../../languages/index"
/*
 * AutoComplete
 */
import CreateAutoCompleteModal ,{FetchPosition,ModalPosition} from "./AutoComplete"
import "./AutoComplete.css";
//import ModalPosition from "./EditorModal";
/*
 * js external libary autocomplete
 */
//import "codemirror/mode/markdown/markdown.js";
import* as Aulx from 'aulx';
import AulxUI from 'aulx/aulx-ui.js';
import { Controlled as ControlledEditor } from 'react-codemirror2'
//import MarkdownPreview from "../../../languages/mark-down/Markdown-Preview";
//import Preview from "./markdown/preview";
//import EditorStates from "../EditorStates"; 
interface Props {
language:string;
displayName:string;
value:string;
onChange:any;
className:string,
/*
ShowPreviewMd:boolean;
setShowPreviewMd:React.Dispatch<React.SetStateAction<boolean>>,
*/
}

export default function EditorComp(props:Props) {
  const {
    language,
    displayName,
    value,
    onChange,
    className,
  } = props
  /*const {
  ShowPreviewMd,
  setShowPreviewMd,
  EditorScreens,
  setEditorScreens,
  }= EditorStates()
  */
  const [lineChar,setlineChar] = useState({line:0,ch:0,sticky:null})
  /*
   * swapLine

  function SwapLineDown(cm) {
    if(cm.isReadOnly == undefined){
    }else{
    if (cm.isReadOnly()) return CodeMirror.Pass
    
    var ranges = cm.listSelections(), linesToMove = [], at = cm.lastLine() + 1;
    for (var i = ranges.length - 1; i >= 0; i--) {
      var range = ranges[i], from = range.to().line + 1, to = range.from().line;
      if (range.to().ch == 0 && !range.empty()) from--;
      if (from < at) linesToMove.push(from, to);
      else if (linesToMove.length) linesToMove[linesToMove.length - 1] = to;
      at = to;
    }
    cm.operation(function() {
      alert("wow")
      for (var i = linesToMove.length - 2; i >= 0; i -= 2) {
        var from = linesToMove[i], to = linesToMove[i + 1];
        var line = cm.getLine(from);
        if (from == cm.lastLine())
          cm.replaceRange("", CodeMirror.Pos(from - 1), CodeMirror.Pos(from), "+swapLine");
        else
          cm.replaceRange("", CodeMirror.Pos(from, 0), CodeMirror.Pos(from + 1, 0), "+swapLine");
        cm.replaceRange(line + "\n", CodeMirror.Pos(to, 0), null, "+swapLine");
      }
      cm.scrollIntoView();
    });
    }
  };
  */
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
  React.useEffect(()=>{                                                            
  if(value=="") {                                                               
   setModalOpen(ModalOpen)
  /*}else if(value.match(/\w\s/g) || value.match(/\s/g)){
   setModalOpen(false)
  */}else{
  setModalOpen(true)                                                        
  }                                                                              
  },[value])
  
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
 // var {x_position ,y_position }  = ModalPosition(x_axis,set_x_axis,y_axis,set_y_axis,lineChar,setlineChar)
  /*useEffect(()=>{

   ModalPosition(x_axis,set_x_axis,y_axis,set_y_axis,lineChar,setlineChar)
   },[])
   */
  useEffect(()=>{
   //CreateAutoCompleteModal(x_axis,y_axis)
   //var x_position = x_axis
  // var y_position = y_axis
  //var {x_position ,y_position }  = ModalPosition(x_axis,set_x_axis,y_axis,set_y_axis,lineChar,setlineChar)
   const AutoCompleteModal = document.querySelector(".AutoComplete__Modal")
   //FetchPosition(x_axis,y_axis,lineChar);
    //var data = LanguageFetcher(language,value,onChange,doc)
     

  },[value,lineChar]);
  useEffect(()=>{
   var data = LanguageFetcher(language,value,onChange,doc)


  },[doc,value,lineChar])
 // alert(typeof(doc))
 // var data = LanguageFetcher(language,value,onChange,doc)
  /*useEffect(()=>{
   MarkdownPreview(language)

  },[])
  */
  useEffect(()=>{
   if(value !=""){
   console.warn(editorRef.current.isReadOnly())
   }

  },[value])
  /*useEffect(()=>{
   if(language === "markdown"){
    setEditorScreens(EditorScreens +1)
    setShowPreviewMd(true)
    }else{
     setShowPreviewMd(false)
     }
  },[])
  */
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
	  scanUp:true,
	  foldGutter:true,
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
	   /*'Ctrl-/': editorRef.current.toggleLineComment({
	    indent: true,
	    padding: " "
	   }),*/
	   'Ctrl-/':"toggleComment",
	   /*"Ctrl-;":SwapLineDown(editorRef.current)*/
	   }
	  
        }}
	
      />
      {/*AutoComplete(x_axis,y_axis)*/}
      
      {/*<EditorModal on={ModalOpen} lineChar={lineChar} setlineChar={setlineChar}  x_axis={x_axis} set_x_axis={set_x_axis}  y_axis={y_axis} set_y_axis={set_y_axis} lang={language} code={value} onChange={onChange}  setModalOpen={setModalOpen} setterValue={setterValue} doc={doc} /*set_x_aixs={set_x_aixs} set_y_axis={set_y_axis}*//*>
       {value}
      </EditorModal>
      */}

      {/*<SimpleModal />*/}
      {/*ModalPosition(x_axis,set_x_axis,y_axis,set_y_axis,lineChar,setlineChar)*/}
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
          mode:language,
	  readOnly:true,
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
