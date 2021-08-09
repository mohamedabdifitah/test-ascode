
import javascriptSnippetMaker from "./javascript/javascript";
import pythonSnippetMaker from './python/python';

export default function LanguageFetcher(lang:string,code:string,onChange:any){
	/*LanguageTeller(lang)
	 */
	return LanguageSnippetMaker(lang,code,onChange)
}

function LanguageSnippetMaker(lang:string,code:string,onChange:any){
	switch(lang){
		case "javascript":
			return javascriptSnippetMaker(lang,code,onChange)
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
