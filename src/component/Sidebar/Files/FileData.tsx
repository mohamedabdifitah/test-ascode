import React,{useState} from "react";
import axios from "axios"


interface FileProps{
 name:string,
 body:string,
}
interface IWindowProps{
 name:string,
 children:Array<string>,

}
/*
interface FileProps{
 name:string,
 body:string,

},
*/
function FileData(){
 const [state,setState] = useState<IWindowProps>()
 return {
  state,
  setState,

  }
}
export default FileData
