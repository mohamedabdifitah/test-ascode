import menu from "./list_menu"
export default function Menu(){
  return (
   <>
     {menu.map((Value,index)=>{
       return(
          <Value.icon/>

       )

     })}
   </>

  )
}
