// Explaining scope functions
var outsideVariable = 5;
var insideVariable = 7;
//
function doSomething() {
  console.log(outsideVariable);
}

doSomething();


//Further Explaining scoping functions
function firstFunction() {
  console.log("I am the first function");
}

function secondFunction() {
  firstFunction();
  console.log("I am the second function");
  function insideSecondFunction() {
    console.log("I am inside the second second function");
  }
}
// ---> can run
secondFunction();
// ---> Cannot run
//insideSecondFunction();

// more examples
function joinStringsAndPrint( string1 , string2 ) {

	var newString =  string1 + string2;

	function printString( string ) {

		console.log(string);

		// Q3 ---> Can Run
		console.log(newString);

		// Q4 ---> Can run
		console.log(string1 + string2);

	}
	printString( newString );
	return newString;
}

var string1 = "hello, ";
var string2 = "world";
joinStringsAndPrint( string1 , string2 );

//Q1 ---> Cannot run
// printString( "run from outside joinStrings" );


//Q2 ---> Cannot run
// console.log(newString)
