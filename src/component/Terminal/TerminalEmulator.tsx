import * as React from 'react'
import { XTerm } from 'xterm-for-react';
 const TerminalEmulator = () => {
  const xtermRef = React.useRef(null)

  React.useEffect(() => {
   
  // You can call any method in XTerm.js by using 'xterm xtermRef.current.terminal.[What you want to call]
   if(xtermRef.current ==null){
    alert('oops')
   }else{
    alert("Hello, World!")
   }
    
   }, [])

   return (
   // Create a new terminal and set it's ref.
    <XTerm ref={xtermRef} />
   )
}
export default TerminalEmulator
