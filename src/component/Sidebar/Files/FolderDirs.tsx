import {useState,useEffect,useMemo} from "react"
import Tslogo from  "../Typescript_logo_2020.svg"
import {VscNewFile} from "react-icons/vsc"
import {VscNewFolder} from "react-icons/vsc";                     import {VscLoading} from "react-icons/vsc";
import {VscRefresh} from "react-icons/vsc";
import {VscDiffRenamed} from "react-icons/vsc";
import {RiArrowDownSLine,RiArrowRightSLine} from "react-icons/ri";import {IoIosArrowForward} from 'react-icons/io';
import {IconButton} from '@material-ui/core';
import { IconContext } from "react-icons";                        import FilesDirs from "./FilesDirs";                             
import {data} from "../Data";
import Modified from "./modified__section/Modified";              import {makeStyles} from '@material-ui/core/styles';
import FileData  from "./FileData"
import {ImainDir} from "./TestData";
import "./FolderDirs.css";
interface IDir {
}
function FolderDirs(props:ImainDir){
 const [toggle,setToggle] = useState(false)
 const isToggle=()=>{
 setToggle(!toggle)
 }
 return (
     
    <div className="dir">
          <div className="action__dir">
            <IconButton   onClick={()=>
{                                                                             isToggle()}}>
             {toggle?<RiArrowDownSLine style={{color:"white"}} />:
<RiArrowRightSLine style={{color:"white"}}/>}
            <p className="dir__name">{props.name}</p>                          </IconButton>
            </div>
	    {/*
            <div className="folder__icons">                                    <div className="VscNewFile">                                      <IconButton className={classes.root}>
             <VscNewFile />                                                    </IconButton>
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
             </IconButton>                                                     </div>
             </div>
	     */}
	     
	</div>
 )

}
export default FolderDirs
