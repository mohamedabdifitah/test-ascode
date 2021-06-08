import "./Files.css"
import {useState} from "react"
import Tslogo from  "../Typescript_logo_2020.svg"
//interface
interface File{
  FileName:string;
  extension:string;
  storage:string;


}
const Files = () => {
   return (
       <div className="Files" >
        <div className="modified__files" >
	 <div className="Explore__Files" >
	   <h3> Explore </h3>
	  </div>
	 <div className="modified__header">
	   <h4> Open Editors </h4>
	    <img src={Tslogo} ></img>
	    <img src={Tslogo} ></img>
	    <img src={Tslogo} ></img>
	    <img src={Tslogo} ></img>
	    <img src={Tslogo} ></img>
	    <img src={Tslogo} ></img>
	  </div>

	</div> 
	<div className="main__dir">
	 <h4> hhh</h4>

	</div>
      </div>

  )
}
export default Files

