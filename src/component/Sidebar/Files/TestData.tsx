export interface ImainDir{
 name:string,
 icon:string,
 children:{
 name:string,icon:string,types:string
 }[],
 types:string

}
function TestData() {
 const mainDir = {
  name:"ascode",
  icon:"",
  children:[
   {
    name:"src.py",
    icon:"https://image.pngaaa.com/282/619282-middle.png",
    types:"file"
    },
    {
     name:"www",
     icon:"",
     children:[
      { 
       name:"owwow.ts",
       icon:"https://image.pngaaa.com/282/619282-middle.png",
       types:"file"
      },
      {
       name:"owwow.js",
       icon:"https://image.pngaaa.com/282/619282-middle.png",
       types:"file"
      },
     ],
     types:"folder"

    }
    

  ],
  types:"folder"

 }
 return{
  mainDir

 }

}

export default TestData

