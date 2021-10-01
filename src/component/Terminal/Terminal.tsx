import "./Terminal.css"
import React,{useState,useRef,useEffect} from "react";
// Import XTerm
/*
import { XTerm } from 'xterm-for-react'
*/

import "xterm/css/xterm.css";

import "xterm/lib/xterm.js"
//import "terminal-js/dist/terminal.min.js"

/*import { Terminal as xTerminal} from 'xterm';*/
import CreateTerminal from "./TerminaEmulator";
function Terminal() { 
 const TerminalContainer = useRef(null)
 /*const termRef = useRef React.MutableRefObject<HTMLElement>(null)*/
 /*
 alert(document.querySelector(".Terminal"))
 */
 /*
 term.open(document.querySelector(".Terminal"))
 */
 /*
 function constructTerminal(){
  var TerminalEmulator = document?.querySelector(".Terminal")
  alert(TerminalEmulator +"ow")
  term.open(TerminalEmulator)

  

 }
 */
 
 const termRef = useRef<HTMLDivElement>(null)
 /* 
  * musharaf
  */
 const TerminalSelector= useRef<HTMLElement>("")
 /*React.useEffect(()=>{
  //var terminalcomp= document.querySelector(".Terminal")
  //const [TerminalSelector] = useRef<HTMLElement>("")
 // var term = new XXterm()
  /*if(terminalcomp){
   term.open(terminalcomp as HTMLElement)
  }*/
  //term.open(TerminalSelector)
  /*var t = new Terminal({
  dom: document.getElementById('terminal'), // required
  speed: 15 // chars per second
  });
  */
 /*

 },[])
 */
 /*var t = new Terminal({
  dom: document.getElementById('terminal'), // required
  speed: 15 // chars per second
  },[]);
  */
  useEffect(()=>{
   CreateTerminal()

  },[])
 
 return (
       <div ref ={TerminalSelector} className="Terminal" id="terminal" ref={termRef} >
       </div>

  )
}                       
export default Terminal

