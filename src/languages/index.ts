
import javascriptSnippetMaker from "./javascript/javascript";
import pythonSnippetMaker from './python/python';

export default function LanguageFetcher(lang:string,code:string,onChange:any,doc:object){
	/*LanguageTeller(lang)
	 */
	console.log(doc)
	return LanguageSnippetMaker(lang,code,onChange,doc)
}

function LanguageSnippetMaker(lang:string,code:string,onChange:any,doc:object){
	/*switch(lang){
		case "javascript":
			return javascriptSnippetMaker(lang,code,onChange,doc)
		case "python":
			return pythonSnippetMaker(lang,code,onChange)
		case "markdown":
			return null
		default :
			return null
	}
	*/
	if(lang == "javascript"){
		return javascriptSnippetMaker(lang,code,onChange,doc)

	}else if(lang == "python"){
		return pythonSnippetMaker(lang,code,onChange)
	}else if(lang == "markdown"){
		return null

	}else{
		return null

	}


}
/*
function  LanguageTeller(lang:string){
	var language = import(`./${lang}/${lang}`)
	return language

}

*/
