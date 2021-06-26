import Paper from '@material-ui/core/Paper';                  import Tabs from '@material-ui/core/Tabs';                    import Tab from '@material-ui/core/Tab';
import "./ListFiles.css"
import CloseIcon from '@material-ui/icons/Close';
import {IoClose} from "react-icons/io5"
import IconButton from '@material-ui/core/IconButton';
interface Props {
 file:{
  icon:string,
  name:string,
  cancel:any;

 }[],

}
const ListFiles = (props:Props) => { 
  /*
  const Data = [
   {
    icon:"https://en.m.wikiversity.org/wiki/Python#/media/File%3APython.svg",
    name:"main.py",
   },
   {
   icon:"https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_typescript_icon_130108.png",
   name:"src.ts"
   },
   {
   icon:"https://www.bryntum.com/wp-content/uploads/2020/02/js-logo.png",
   name:"index.js"
   },


  ]
  */
  console.log(props)
  function Files__header():JSX.Element[] {
   return props.file.map((File,index) => { 
     return (
        <li>
         <img className="image__file"  src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_html_icon_130541.png"></img>
	 <p className="file__name"> {File.name} </p>
	  <IoClose size={"20px"} color={"#33333"} />
	  </li> 
     )})
     }



  
  return (
   <div className="header__list__files">
   <ul>
    {Files__header()}
    </ul>
    </div>

  )

}

export default ListFiles 
