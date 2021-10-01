import css from "css";
import matchBracket from "match-bracket";
export default function cssParser(code:string){
	var obj = css.parse('body { font-size: 12px; }', /*options*/)
	console.log(obj)
	//console.log(matchBracket(code))
	//var nn = code?code:"";
	console.log(css.stringify(obj/*option*/));

}
