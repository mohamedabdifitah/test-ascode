import React from "react";
import axios from "axios"


interface FileProps{
 name:string,
 body:string,
}
interface WindowProps{
 name:string,
 children:array<string>,
}[]
/*
interface FileProps{
 name:string,
 body:string,

},
*/
function FileData(){
 const [state,setState] = React.useState<WindowProps>()
return{
 state,
 setState,

  }
}
export default FileData
