import Paper from '@material-ui/core/Paper';                  import Tabs from '@material-ui/core/Tabs';                    import Tab from '@material-ui/core/Tab';
import "./ListFiles.css"
interface Props {
 file:{
  icon:string,
  name:string,

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
   return props.file.map((file,index) => { 
     return (
       <div className="list__files" key={index}> 
       <img src={file.icon} />                                       <p className="file__name"> {file.name} </p>                   </div> 
     )})
     }



  
  return (
   <>
    {Files__header() }
    </>

  )

}

export default ListFiles 
