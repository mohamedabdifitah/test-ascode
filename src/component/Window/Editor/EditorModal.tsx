
import './EditorModal.css';
import React,{useRef} from 'react'
import LanguageFetcher from '../../../languages/index'
import {Button} from '@material-ui/core';
import {BsInfo} from "react-icons/bs"
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
 return (
  <div className="code-complete-modal" id="code-complete-modal" ref={EditorRef} style={{top:props.y_axis,left:props.x_axis,  }} 
  >
   {/*props.children*/}
   <ul className="list-of-suggestion">
     
     {data?.filter((val:string)=>{
     if(props.code==""){
      return val
     }else{
      /*
       * default code is else if(val.includes(props.code)
       */
      var lasModifiedCode = props.code.split(/[\n\s;(:?.]+/)
      if(val.includes(lasModifiedCode[lasModifiedCode.length-1])){
        //alert(props.code.split(/[\n\s;]+/))
	return val
       }
     }}).map((elem,index) => <li className="item-of-suggestion"> <button  className="button-suggestion" onClick={()=> alert(index)}> <p className="text-of-suggestion">{elem }</p> <p> description </p></button>  <BsInfo style={{position:"relative"}}/></li>)}  
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
