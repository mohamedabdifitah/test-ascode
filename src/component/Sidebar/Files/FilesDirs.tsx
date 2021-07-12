import React,{useEffect} from "react"
import "./FilesDirs.css"
import {IDirChildren} from "./MainDirChildren"

const FilesDirs = (props:IDirChildren["file"])=> {
 /*
 console.log(props)
 const fileview = ():JSX.Element[] => {
   return props.file.map((val,index) => {
     return (
        <div draggable={true} className="each__file">
	<li>
         <img className="file__icon" src ={val.icon}/>
         <p className="file__name">{val.name}</p>
	 </li>
	 </div>

     )
    
   })

 }
 console.log(props)
 */
 return (
   
    <div className="fle__dirs">
     
     <img className="file__icon" src={props.icon} />
     <p> {props.name} </p>
     </div>
 )
}
export default FilesDirs

