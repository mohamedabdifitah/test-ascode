
import {useState,useEffect,useMemo} from "react"
import Tslogo from  "../Typescript_logo_2020.svg"
import {VscNewFile} from "react-icons/vsc"
import {VscNewFolder} from "react-icons/vsc";
import {VscLoading} from "react-icons/vsc";
import {VscRefresh} from "react-icons/vsc";
import {VscDiffRenamed} from "react-icons/vsc";
import {RiArrowDownSLine,RiArrowRightSLine} from "react-icons/ri";
import {IoIosArrowForward} from 'react-icons/io';
import {IconButton} from '@material-ui/core';
import { IconContext } from "react-icons";
import FilesDirs from "./FilesDirs"
import {data} from "../Data"
import Modified from "./modified__section/Modified"
import {makeStyles} from '@material-ui/core/styles';
import FileData  from "./FileData"

import FolderDirs from "./FolderDirs";
import MainDirChildren from "./MainDirChildren"
import TestData,{ImainDir}  from "./TestData";
//interface
interface File{
 Data:{
   FileName:string;
   icon:string
   type:string;
   }[]

}
const Files = () => {
   const useStyles = makeStyles({
    root:{
     color:"white",
     top:"-0.9rem",
     fontSize:"15px",

    },

    addFolder:{
     color:"white",
     },
     reload:{
     color:"white",
     },
     rename:{
     color:"white",
     },
     toggle:{
      }
   }
   )
   /*
   const [Filedata,setFiledata] = useState<File["Data"]>([{
    "FileName":"Start",
    "icon":"hh",
    "type":"file",
   }])

    ******* Folder Props 

   const [Folderdata,setFolderdata] = useState<IFolder>()
   useMemo(() => {
    setFolderdata([
     name:"src"
     childrens:[
      Filedata
     ]

    ])
   },Folderdata)
   const FiledataHandler = (data:File["Data"])  => {
    console.log(data)
    /*
    data.map((dataFile) => {
     setFiledata([
     ...Filedata,
     dataFile

     ])

    })
    setFiledata(
     data
    )

   }
   useMemo(() => {
    /*
    data.childrens.map((val,index)=>{
     FiledataHandler([val])
     */
   /*
    FiledataHandler(data.childrens)
    
   },Filedata)
   */
   const classes = useStyles() 
   const [toggle,setToggle] = useState(false);
   const isToggle = () => {
     setToggle(!toggle)
   }
   const {mainDir} = TestData()
   const {state,setState} = FileData()
   /*
   function DirChildren(Dir:ImainDir){
     return Dir.children.map((mainDirChildren,index)=>{


     if(mainDirChildren.types=="file"){
      return (
       <FilesDirs file={[mainDirChildren]} />
      )
     }
     else if(mainDirChildren.types=="folder"){
       return(
        <FolderDirs name={mainDirChildren.name} icon={mainDirChildren.icon} children={[mainDirChildren]} types={mainDirChildren.types}/>
       )
     }else{
      return (
       null
      )

     }
     console.log(mainDirChildren)
     
     console.log(mainDirChildren,"hello")
    })
    
    console.log(Dir)
   }
   */
   
   return (
       <div className="Files" >
        <Modified />
        {/* whenever modified function call */}
	{/*
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
	*/}
	{/* tells currnet folder and its files
	   it gets whenever getFolder function calls
	   loops all the files 

	*/}
	<div className="main__dir">
	 <div className="Folder__dir">
	  <div className="action__dir">
	    <IconButton  className={classes.toggle} onClick={()=> {
	    isToggle()}}>
	     {toggle?<RiArrowDownSLine style={{color:"white"}} />:<RiArrowRightSLine style={{color:"white"}}/>}
	    <p className="dir__name">{mainDir.name}</p>
	    </IconButton>
	    </div>
	    <div className="folder__icons">
	     <div className="VscNewFile">
	     <IconButton className={classes.root}>
	     <VscNewFile />
	     </IconButton>
	     </div>
	     <div className="VscNewFolder">
	     <IconButton className={classes.root}>
	      <VscNewFolder />
	      </IconButton>
	      </div>
	    <div className="VscRefresh" >
	     <IconButton className={classes.root}>
	        <VscRefresh />
	      </IconButton >
	     </div>
	    <div className="VscDiffRenamed">
	     <IconButton className={classes.root}>
	     <VscDiffRenamed />
	     </IconButton>
	     </div>
	     </div>
	   </div>
	   {toggle?<MainDirChildren name={mainDir.name} icon={mainDir.icon} children={mainDir.children} types={mainDir.types}/>:""}
       </div>
       </div>
  )
}
export default Files

