import LanguageFetcher from "../../../languages/index"
var number =[];
export default function suggestionRunner(lang:string,code:string,doc:any){
	var suggestion = LanguageFetcher(lang,code,doc)
	let Modal = document.querySelector(".AutoComplete__Modal")
	if(Modal instanceof HTMLDivElement){
		suggestion.map((elem,index)=>{
                       //const ListOfAutoComplete = document.querySelector(".List__of__suggestion");
			const AutoCompleteModal = document.querySelector(".AutoComplete__Modal");                                
			const EachSuggestion = document.createElement("li");
                       
			EachSuggestion.className = "Each__suggestion";                                                            
			const ContainerOfSugg = document.createElement("div");                                                    
			const TextOfSugg = document.createElement("p");
                      
			ContainerOfSugg.className = index==number?"suggestion__container selected":"suggestion__container";                                                                                                                     
			TextOfSugg.className = "suggestion__name";
                       
			TextOfSugg.innerHTML = elem.type == "snippet"?`${elem.short_name}`:`${elem.name}`;                       
			const img = document.createElement('img');                                                                
			img.className = "suggestion__image";                                                                     
			img.src =/*'https://media.geeksforgeeks.org/wp-content/uploads/20190529122828/bs21.png';*/elem.type=="keyword"?"asImages/keyword.svg":"asImages/snippetPrefix.svg";                                                                                                                            
			const Suggetype = document.createElement("p");
                       
			Suggetype.className = "suggestion__type";                                                                
			Suggetype.innerHTML = `${elem.type}`;                                                                     /*
                        * short description of Suggest
                        */
                      
			const suggShortDescript = document.createElement("p")                                                    
			suggShortDescript.className = "suggestion__short__descript"
                      
			suggShortDescript.innerHTML = `${elem.description}`;
                      
			ContainerOfSugg.appendChild(img);
        
			ContainerOfSugg.appendChild(TextOfSugg);
                      
			//ContainerOfSugg.appendChild(Suggetype);
                     
			ContainerOfSugg.appendChild(suggShortDescript)
                        //const div = document.createElement("div")
                        //const div1 = document.createElement("div")
                        //const div2 = document.createElement("div")
                        //ContainerOfSugg.appendChild(div)
                        //ContainerOfSugg.appendChild(div1)
                    
			//ContainerOfSugg.appendChild(div2)
                   
			// EachSuggestion.appendChild(ContainerOfSugg);
                      
			AutoCompleteModal.appendChild(ContainerOfSugg);
                    
			//ListOfAutoComplete.appendChild(EachSuggestion)
                      
			//AutoCompleteModal.innerHTML = `hhh`;
                })
       }
       var el = document.body;

       if(typeof el.addEventListener != "undefined") {
    
	       el.addEventListener("keydown", function(evt) {
        
		       doThis(evt.keyCode);
    
	       }, false);

       } else if (typeof el.attachEvent != "undefined") {
    
	       el.attachEvent("onkeydown", function(evt) {
       
		       doThis(evt.keyCode);
    
	       });

       }


       function doThis(key) {
   
	       switch (key) {
       
		       case 13:
            
			       alert('enter pressed');
          
		       break;
      
		       case 27:
           
			       alert('esc pressed');
          
		       break;
      
		       case 38:
			       number.insert(0,number[0]-1)
         
			       alert('up pressed');
           
		       break;
        
		       case 40:
			       number.insert(0,number[0]-1)
           
			       alert('down pressed');
            
		       break;
    }
}
       
	
}
