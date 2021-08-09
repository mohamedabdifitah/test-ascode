import * as jsSnippet from "./snippet/snippet.json";

const javascriptSnippetMakert = (lang:string,code:string,onChange:any)=>{
	/*var keywords=[
		"await","break","case","catch","class","const","continue","debugger","default","delete","do","else","enum","export","extends","false","finally","for","function","if","implements","import","in","instanceof","interface" ,"let","new","null" "package","private","protected","public","return","super","switch","static","this","throw","try","true","typeof","var""void","while","with","yield",
	]
	*/
       var ArrayMethods = {
	       "concat()":"Joins two or more arrays, and returns a copy of the joined arrays",
	       "copyWithin()":"Copies array elements within the array, to and from specified positions",
	       "entries()":"Returns a key/value pair Array Iteration Object",
	       "every()":"Checks if every element in an array pass a test",
	       "fill()":"Fill the elements in an array with a static value",
	       "filter()":"Creates a new array with every element in an array that pass a test",
	       "find()":"Returns the value of the first element in an array that pass a test",
	       "findIndex()":"Returns the index of the first element in an array that pass a test",
	       "forEach()":"Calls a function for each array element",
	       "from()":"Creates an array from an object",
	       "includes()":"Check if an array contains the specified element",
	       "indexOf()":"Search the array for an element and returns its position",
	       "isArray()":"Checks whether an object is an array",
	       "join()":"Joins all elements of an array into a string",
	       "keys()":"Returns a Array Iteration Object, containing the keys of the original array",
	       "lastIndexOf()":"Search the array for an element, starting at the end, and returns its position",
	       "map()":"Creates a new array with the result of calling a function for each array element",
	       "pop()":"Removes the last element of an array, and returns that element",
	       "push()":"Adds new elements to the end of an array, and returns the new length",
	       "reduce()":"Reduce the values of an array to a single value (going left-to-right)",
	       "reduceRight()":"Reduce the values of an array to a single value (going right-to-left)",
	       "reverse()":"Reverses the order of the elements in an array",
	       "shift()":"Removes the first element of an array, and returns that element",
	       "slice()":"Selects a part of an array, and returns the new array",
	       "some()":"Checks if any of the elements in an array pass a test",
	       "sort()":"Sorts the elements of an array",
	       "splice()":"Adds/Removes elements from an array",
	       "toString()":"Converts an array to a string, and returns the result",
	       "unshift()":"Adds new elements to the beginning of an array, and returns the new length",
	       "valueOf()":"Returns the primitive value of an array"


       }
       console.log(ArrayMethods)
       var StringMethods ={
	       "charAt()":"Returns the character at the specified index (position)",
	       "charCodeAt()":"Returns the Unicode of the character at the specified index",
	       "concat()":"Joins two or more strings, and returns a new joined strings",
	       "endsWith()":"Checks whether a string ends with specified string/characters",
	       "fromCharCode()":"Converts Unicode values to characters",
	       "includes()":"Checks whether a string contains the specified string/characters",
	       "indexOf()":"Returns the position of the first found occurrence of a specified value in a string",
	       "lastIndexOf()":"Returns the position of the last found occurrence of a specified value in a string",
	       "localeCompare()":"Compares two strings in the current locale",
	       "match()":"Searches a string for a match against a regular expression, and returns the matches",
	       "repeat()":"Returns a new string with a specified number of copies of an existing string",
	       "replace()":"Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced",
	       "search()":"Searches a string for a specified value, or regular expression, and returns the position of the match",
	       "slice()":"Extracts a part of a string and returns a new string",
	       "split()":"Splits a string into an array of substrings",
	       "startsWith()":"Checks whether a string begins with specified characters",
	       "substr()":"Extracts the characters from a string, beginning at a specified start position, and through the specified number of character",
	       "substring()":"Extracts the characters from a string, between two specified indices",
	       "toLocaleLowerCase()":"Converts a string to lowercase letters, according to the host's locale",
	       "toLocaleUpperCase()":"Converts a string to uppercase letters, according to the host's locale",
	       "toLowerCase()":"Converts a string to lowercase letters",
	       "toString()":"Returns the value of a String object",
	       "toUpperCase()":"Converts a string to uppercase letters",
	       "trim()":"Removes whitespace from both ends of a string",
	       "valueOf()":"Returns the primitive value of a String object"



       }
       console.log(StringMethods)
       //var suggestion = [keywords]
       var keywords;
        keywords=[
	       "await","break","case","catch","class",
	       "const","continue","debugger","default",	"delete",
	       "do","else","enum","export","extends",
	       "false","finally","for","function","if",
	       "implements","import","in","instanceof",
	       "interface","let","new","null","package","private",
	       "protected","public","return","super","switch",
	       "static","this","throw","try","true",
	       "typeof","var","void","while","with","yield",
	       
       ]
       /*for(key,value in ArrayMethods){
	       keywords.push(key)

       }
       */
       //keywords.push(StringMethods)
       const MethodRegex = /[A-Za-z]\w.[A-Za-z]\w/
       MethodRegex.compile(MethodRegex)
       //.forEach(code =>code.match(/[\w\S]/));
       const MethodsTest = code.split(/[\n;]+/)
       //onChange=code.replace(/./,"for")
       /*if(String(code).match(MethodRegex)){
	       alert('ow wow from Js Extension')
	       keywords=[Object.keys(ArrayMethods)]
       }
       */

       var suggestion = keywords

	return keywords

}

export default javascriptSnippetMakert
