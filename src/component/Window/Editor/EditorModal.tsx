
import './EditorModal.css';
import React,{useRef} from 'react'
import LanguageFetcher from '../../../languages/index'
import {Button} from '@material-ui/core';
import {BsInfo} from "react-icons/bs"
import * as acorn from "acorn";
import * as esprima from 'esprima';
import * as aulx from 'aulx';
import * as CodeMirror from 'codemirror/lib/codemirror.js';
import Popover from '@material-ui/core/Popover';
/*
var data= LanguageFetcher(props.lang,props.code,props.onChange)
*/
export interface Iprops{
on:boolean,
x_axis:number,
set_x_axis:React.Dispatch<React.SetStateAction<number>>
y_axis:number,
set_y_axis:React.Dispatch<React.SetStateAction<number>>
lang:string,
code:string,
lineChar:{line:number,ch:number,sticky:null},
setlineChar:React.Dispatch<React.SetStateAction<{ line: number; ch: number; sticky: null; }>>
onChange:any,
setModalOpen:React.Dispatch<React.SetStateAction<boolean>>,
setterValue:string,
doc:any,
children: JSX.Element

};
// modal position making
// interface of positionModalFunction 
export interface IModalPosition{
x_axis:number                                                                  
set_x_axis:React.Dispatch<React.SetStateAction<number>>
y_axis:number,
set_y_axis:React.Dispatch<React.SetStateAction<number>>
lineChar:{line:number,ch:number,sticky:null},
setlineChar:React.Dispatch<React.SetStateAction<{line:number,ch:number,sticky:null}>>,


}
export function makeDescript(val:object,Parent:HTMLElement){
 if(val == "" || Parent == ""){
  return null
 }else{
  Parent.addEventListener("mouseover", function( event ) {
   Parent.appendChild(<Popover />)
 })

}
}
export function fetchTextForSearch(code:string,line:number,ch:number){
 if(code == "" || code == undefined || code == null){
  return -1
 }
 var linesOfCode = code.split(/\n/)
 var currentLine = linesOfCode[line]
 //var groupsOfCode = currentLine.split(/[.\s\t]/)
 /*
 for ( let i=ch;i < currentLine.length; i++){
  console.log(currentLine[i])
  //currentGroupCode.push(currentLine[i])
  if(currentLine[i] == "\s" || currentLine[i] == "\t"){
   console.log(currentLine[i])

  }
  currentGroupCode.push(currentLine[i])

 }
 */
 /*
 groupsOfCode.forEach(element=>{
  if(ch < element.length - 1){
   currentGroupCode.push(element)
   console.log(element,"element")

  }
 })
 */
 var groupsOfCode = esprima.tokenize(currentLine,{range:true,loc:true,comment:true})
 groupsOfCode.filter((codeOfGroup)=> {
  return codeOfGroup.loc.start.column== ch
  })
  //alert(groupsOfCode)
  console.log(groupsOfCode)
  var currentCode = groupsOfCode.value
 return currentCode

}
function ModalPosition(props:IModalPosition){
   const {
   x_axis,
   set_x_axis,
   y_axis,
   set_y_axis,
   lineChar,
   } = props
   var ModalSection = document?.getElementById('code-complete-modal');
   //console.log(ModalSection)
   //console.log(props,'Editor getValue')
   console.log(lineChar.ch,'EditorModal')
   console.log(lineChar.line,'EditorModal')
   React.useEffect(()=>{
    /*alert(lineChar.ch)
    alert(lineChar.line)
    */
    /*
    if(lineChar.ch!=0 && lineChar.line!=0){
      set_x_axis(x_axis+5)
      set_y_axis(lineChar.line+15)
    }else if (lineChar.ch!=0 && lineChar.line==0 ){
     set_x_axis(x_axis+5)

    }else if(lineChar.line!=0 && lineChar.ch==0){
     set_y_axis(lineChar.line+15)
     set_x_axis(35)
    } /*if(lineChar.ch!=0 &&){
      set_x_axis(35)

    }*/
    
    if(lineChar.line ==0){
     set_y_axis(30)
     if(lineChar.ch==0){
      set_x_axis(30)
     }else if(lineChar.ch==1){
      set_x_axis(30+15)

     }else{
      set_x_axis(lineChar.ch*8+30)
     }
    }else if(lineChar.line!=0 && lineChar.line!=1){
     set_y_axis(lineChar.line*15+30)
     if(lineChar.ch==0){
       set_x_axis(30)

     }else if(lineChar.ch==1){
      set_x_axis(30+15)
     }else if(lineChar.ch!=0 && lineChar.ch!=1){
      set_x_axis(lineChar.ch*8+30)

     }
       

    }else if(lineChar.line==1){
     set_y_axis(30+15)
     if(lineChar.ch==0){
       set_x_axis(30)

     }else if(lineChar.ch==1){
      set_x_axis(30+15)
     }else if(lineChar.ch!=0 && lineChar.ch!=1){
      set_x_axis(lineChar.ch*8+30)

     }

    }
    
   //set_y_axis(lineChar.line+50)
   },[lineChar])
   

}
export default function EditorModal(props:Iprops){
 var data= LanguageFetcher(props.lang,props.code,props.onChange,props.doc)
 //console.log(props.setterValue.replace(/[\w.]+/,"hello"))
 //console.log(props.code)
 //console.log(props.doc.current.getValue('\n'))
 console.log(data,"from EditorModal")
 console.log(data)
 const EditorRef = useRef<HTMLDivElement>(null)
 const {
  on,
  x_axis,                                                                          set_x_axis,                                                                      y_axis,
  set_y_axis,
  lang,
  code,
  lineChar,
  setlineChar,
  onChange

 } = props
 const ModalPositionProps = { 
 x_axis,
 set_x_axis,
 y_axis,
 set_y_axis,
 lineChar,
 setlineChar,
 }
 ModalPosition(ModalPositionProps)
 var functions = {
  makeDescript,

 }
const codeSelection = document.querySelector('.react-codemirror.code-mirror-wrapper')
/*
React.useEffect(()=>{  
if(props.code==""){                                                             
 props.setModalOpen(false)
}else{                                                                            props.setModalOpen(true)
}
 },[props.on])
 */
if(props.on == true){
 /*
 function FilterSuggestion(){
  var code = props.code.split('\t')
  /*alert(typeof(props.code.split(' ')))*/
  /*alert(code) */
  /*
  if(props.code){
   data = data?.filter(elem => elem.match(props.code))
   return data 
   }
   return null

 }
 */
 /*FilterSuggestion()*/
 /*
 useEffect(()=>{
  if(data==""){
   setStateModal(false)

  }

 },[code])
 */
 /*
 React.useCallback(()=>{
  if(props.code==""){
   props.on.current = props.on.current

  }else{
   props.on.current= true

  }

 },[props.on.current])
 */
 //alert(props.doc)
 //props.code.split(/[\n\s;]+/)
 //alert(lasModifiedCode)
 var program = props.doc.current.getValue()
 console.log(typeof([props.doc.current.getValue()].join(" ")))
 //console.log(esprima.tokenize([(props.doc.current.getValue())].join(" ")))
 //program = program.replace(/([""'']+)/g,"")
 //var tokenize = esprima.tokenize(program,{range:true,loc:true})
  //console.log(esprima.parse(program))
 //console.log(acorn.parse(program,{ecmaVersion: 2016}))
 //var editor = CodeMirror.fromTextArea(document.querySelector('.react-codemirror.code-mirror-wrapper'));
 //var aulxui = new AulxUI.CM(editor);
 var found = []
 function findAll(string,searchText) {
  var startIdx = string.search(searchText);
  var endIdx = startIdx + searchText.length;
  if(startIdx == -1) {
    return;
  }
  else {
    found.push([startIdx, endIdx]);
    findAll(string.substring(endIdx, string.length));
  }
  }
 // or simply ...
 //new AulxUI.CM(idOfTextbox);
 // And that's it. Your editor now features JS autocompletion.
 console.log(props.doc)
 console.log(found,"found")
 // make descript and hover over types and where is it defined 
 function makeDescript(val:object,Parent:string){
  /*if(val == "" || Parent == ""){
  return null                                                              
  }else{
  Parent = document.querySelector(`.${Parent}`)
  Parent?.addEventListener("mouseover", function( event ) {
  /*return (
    <Popover />

  )
  /* alert("wow")
   })
   */
   return (
    <div style ={{position:"relative",top:props.top + 10, left:props.left +10 ,width:"80%",backgroundColor:"dark",color:"white",}}>
      <p> hhh </p>
    </div>
)
   

}
 return (
  <div className="code-complete-modal" id="code-complete-modal" ref={EditorRef} style={{top:props.y_axis,left:props.x_axis,  }} 
  >
   {/*props.children*/}
   <ul className="list-of-suggestion">
     
     {data?.filter((val)=>{
     if(props.code==""){
      return val
     }else{
      /*
       * default code is else if(val.includes(props.code)
       */
      // var lasModifiedCode = props.code.split('\n') //split(/[\n\s;(:?.]+/)
       //var lastMCode = lasModifiedCode[props.lineChar.line]//.split(/[\s\t:.]/)
       //console.log(lastMCode)
       /*
       var lastMCode = props.code.split(/\n/)[props.lineChar.line]
      // var lastSplitCode = lastMCode.split()
       var valRegex = new RegExp(`^${val.name}`,'i')
       /*if(lastMCode.match(/[\s\t]/) || lastMCode.match(/[.]/){
        
       }*/
       /*
       var currentCodeSearch = lastMCode.split(/[.:?"\s\t]/)
       console.log(currentCodeSearch)
       var Size = currentCodeSearch.join(',').length;
       console.log(Size)
       console.log(props.lineChar.ch)
       var codeSearched = props.doc.current.getRange({line:props.lineChar.line,ch:props.lineChar.ch},{line:props.lineChar.line,ch:Size})
       console.log(codeSearched)
       var testCode ;
       /*for(var i=0;i < lastMCode.length;i++){
        if(props.lineChar.ch < lastMCode[i].length){
	 testCode = lastMCode[i]


	}

       }*/
      /* currentCodeSearch.forEach(element => {
        if(props.lineChar.ch < element.length){
	 testCode = element

	}

       })
       */
      /* console.log(testCode)
       var value = []
       /*val.push({
        body:currentCodeSearch,
	index:

       }
       */
       
       //findAll(lastMCode,val.name)
       /*var lastMCode = fetchTextForSearch(props.code,props.lineChar.line,props.lineChar.ch)*/
       /*
	* split code into lines 
	*/
       var TokenizeCode = code
       if(TokenizeCode != ""){
        TokenizeCode = TokenizeCode.replace(/[""''``]+/g,"")
	}
       var linesOfCode = TokenizeCode.split(/\n/)
       var currentLine = linesOfCode[props.lineChar.line]
       /*if(currentLine !="" || currentLine != undefined || currentLine != null){
       currentLine =  currentLine.replace(/[""'']+/g,"")
       }*/
       //s.match(/(?!^)".*?"/g)
       var groupsOfCode = esprima.tokenize(currentLine?currentLine:"",{range:true,loc:true,comment:true})
       var currentCode = []
       groupsOfCode.filter((codeOfGroup)=> {
       console.log(codeOfGroup)
       if (codeOfGroup.range[1]== lineChar.ch){
         console.log(codeOfGroup)
         currentCode.push(codeOfGroup)

       }
       })
       console.log(groupsOfCode)
       //console.log(lastMCode,"lastMCode")
       console.log(currentCode)
       //console.log(currentCode[0].valu)
       //console.log(esprima.parse())

       if(/*val.name.includes(currentCode[0]?.value) ||*/ val.name.startsWith(currentCode[0]?.value) || val.name.includes(currentCode[0]?.value)){
        //alert(props.code.split(/[\n\s;]+/))
	return val
       

       }}}).map((elem,index) => <li className="item-of-suggestion" > <button  className="button-suggestion" onClick={()=> alert(index) }> <p className="text-of-suggestion">{elem.name }</p> <p className="type-of-suggestion"> {elem.type} </p>{/*<p> description </p>*/}</button>  <BsInfo onClick={makeDescript(elem,"list-of-suggestion")} style={{position:"relative"}}/></li>)}
   </ul>
   {x_axis}
   ||
   {y_axis}
  </div>
  )
  
}else{
  return(
   <div>
   </div>

  )
  }
 
}
export { ModalPosition}
