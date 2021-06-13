import React,{useEffect} from "react"

interface Props {
file:{
FileName:string,
icon:string,
type:string,
}[]
}
const FilesDirs = (props:Props)=> {
 console.log(props)
 const fileview = ():JSX.Element[] => {
   return props.file.map((val,index) => {
     return (
        <div>
	<li>
         <img className="file__icon" src ={val.icon}/>
         <p className="file__name">{val.FileName}</p>
	 </li>
	 </div>

     )
    
   })

 }
 console.log(props)
 return (
    <div className="File__dir">
     <ul>
     {fileview()}
     </ul>

    </div>
 )
}
export default FilesDirs

