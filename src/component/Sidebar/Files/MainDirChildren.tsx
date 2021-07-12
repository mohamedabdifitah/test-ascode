import React from 'react';
import FilesDirs from "./FilesDirs";
import FolderDirs from "./FolderDirs"
import "./MainDirChildren.css"
import TestData,{ImainDir} from "./TestData"
/*
 *************** Test Data 
 */
/*const {mainDir} = TestData(); */
export interface IDirChildren {
file:{
name:string,
icon:string,
types:string,

},
folder:{
name:string,
icon:string,
children:string,
types:string,

},
}
/*
function FolderDirChildren(){
 return(
  <div className=" >
  </div>

 )
 

}

function FileDirChildren(){
 return (
  <p> hey i'm Folder </p>
 )

}
*/
/*
function FileORFolder(props:ImainDir){
 function FileORFolderDestructure(){

 }
 return props.children.map((children,index) =>{
  return (
   <div key={index}>
    <li>
     <p> children.name  -children.types </p>
     </li>
   <div>

  )
  })

 

}
*/
function MainDirChildren(props:ImainDir){
 const listUi = React.createElement("ul")
 console.log(listUi)
 /*
  * checking if mainDir child is file or Folder 
  */
 function FileORFolder(children:IDirChildren["file"][]| IDirChildren["folder"][]){
  return children.map((child,index)=> {
   const listChildren = React.createElement("ul")
   if(child.types=="file"){
   alert(listChildren)
   return(
     <FilesDirs name={child.name} icon={child.icon} types={child.types} />
   )
   
  }else{
   return(
    <p> folder </p>
    )

  }
  })
 }

 return(
 <div className="dir__children">
  {FileORFolder(props.children)} 
   

 </div>
 )
}

export default MainDirChildren
