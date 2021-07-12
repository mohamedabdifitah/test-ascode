import "./Terminal.css"
import React,{useState,useRef} from "react";
// Import XTerm
/*
import { XTerm } from 'xterm-for-react'
*/

import "/data/data/com.termux/files/home/code/node_modules/xterm/css/xterm.css";

import "/data/data/com.termux/files/home/code/node_modules/xterm/lib/xterm.js"


import { Terminal as xTerminal} from 'xterm';
import TerminalEmulator from "./TerminalEmulator"
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
 React.useEffect(()=>{
  var terminalcomp= document.querySelector(".Terminal")
  var term = new xTerminal()
  if(terminalcomp){
   term.open(terminalcomp as HTMLElement)
   term.write('Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ')
  }

 },[])
 
 
 return (
       <div className="Terminal" id="terminal" ref={termRef} >
       </div>

  )
}                       
export default Terminal
