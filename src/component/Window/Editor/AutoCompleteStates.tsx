import React,{useState,useEffect,useRef} from "react";

export default function AutoCompleteStates(){
  const [selectedSuggest,setSelectedSuggest] = useState(0)
  return {
    selectedSuggest,
    setSelectedSuggest

  }

}
/*
export function doThis(key) {

               switch (key) {

                       case 13:
                               alert('enter pressed');

                       break;

                       case 27:

                               selectedSuggest.current = selectedSuggest-1
			       alert('esc pressed');

                       break;

                       case 38:
		              selectedSuggest.current = selectedSuggest-1

                               alert('up pressed');

                       break;

                       case 40:
		               selectedSuggest.current = selectedSuggest+1

                               alert('down pressed');

                       break;

    }
    }

    */
