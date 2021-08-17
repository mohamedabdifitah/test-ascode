
import javascriptSnippetMaker from "./javascript/javascript";
import pythonSnippetMaker from './python/python';

export default function LanguageFetcher(lang:string,code:string,onChange:any,doc:any){
	/*LanguageTeller(lang)
	 */
	console.log(doc)
	return LanguageSnippetMaker(lang,code,onChange,doc)
}

function LanguageSnippetMaker(lang:string,code:string,onChange:any,doc:object){
	switch(lang){
		case "javascript":
			return javascriptSnippetMaker(lang,code,onChange,doc)
		case "python":
			return pythonSnippetMaker(lang,code,onChange)
	}

}
/*
function  LanguageTeller(lang:string){
	var language = import(`./${lang}/${lang}`)
	return language

}

*/
