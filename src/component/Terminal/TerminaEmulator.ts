
import "xterm/css/xterm.css";
import { Terminal } from 'xterm';

var Commands = [
	{
		"name":"npm",
		"language":{
			"name":"javascript",

		}

	}

]
export default function CreateTerminal(){
	var term = new Terminal();
        term.open(document.querySelector('.Terminal'));
        term.write('Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ')
	term.onData((e)=>{
		term.write(e)

	})
}
