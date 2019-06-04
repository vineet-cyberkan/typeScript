echo "# typeScript" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/vineet-cyberkan/typeScript.git
git push -u origin master


## what & whay? ( what is typescript and why we should learn it? )

typescript is an open-source programming language which is developed and maintained by microsoft
typed superset of javascript, that compiles to plain javascript. which is understud by the browser 

in other words you can say:-
Combine the javascript on which we work with ES6 or ES7 additional featchers and products

what is the reason to use typescript instead use other javascript libraries e.g Dart or coffeeScript or even plain old javascript 

1) Relation to javascript
:- typescript is suprier to its counterparts eg. coffeeScript Dart in the way that typescript just extended javascript. Dart and coffeeScript are new languages in themselves while typescript is not. Even you can rename js extension file to ts and it would work perfectly fine. 

2) Optional static typing and type inference
:- javascript is dynamically typed which means javascript does not know what type of variable is untill it is actually instantiated at run time which is too late. type script is  in other hand add type support to javascript as a result I have identified as and when you type  your code and during the compilation step. this result an less error prone code and avoiding having to wake up in the night to fix a production issue and the best part is specifying the type compeletly optional. when you don't specify the type. Typescript will infer the type for you and still pointout the errors which would be otherwise to be seen only during run time.

3) IDE support ( enhanced ide support)
:- With typescript we get intelegent support ability to refacter the code easily and the red squiggly the whenever there is an error along with the discription of that ever this helps you to spend more time on codeing and less time on debugging 

4) Rapid Growth and use 
:- typescript has seen rapid growth and usages in wide variety of applications typescript is main programming language of angular it has found its way in React and view as well. Micropsoft is actively working on the projects and features are being improved constantly. Very seoon you're going to hear a lot of typescript in the world of web.
Considring all these reasons i would say if you haven't aleady. It's great time to lean typescript. 

Before we get started with the concepts we need to set up our development envirnments.


## Envirnment setup
1). To work on typescript first you have to download and install node.js
:- Once it's installed to test use 
'node -v' to check node version

2).  to install typeScript
'npm install -g typescript' this will install typescript globally 
'tsc -v' to check version of typescript on your machine

e.g create a file with main.ts 

	+++++++ content of file start +++++++

	let msg = 'hello world';
	console.log(msg);

	+++++++ content of file end +++++++

to compile this down using typescript compiler 

command to compile the file 
'tsc main.ts' you can ignore file extension eg. 'tsc main' 

'node ch01/main'    // to test the file you don't need a browser you can test it in terminal 
hello world  // file output 

above mentioned is very first typescript program

A module has own scopes whereas script share the global scope. main.ts is being treated as a script rather than a module untill you add  import or export statement typescript treats this file as a module instead of a script. so we will add export {} in the bigining of file. which export nothing.

then main.ts will look like as 

	+++++++ content of file start +++++++

	export {}

	let msg = 'hello world';

	console.log(msg);

	+++++++ content of file end +++++++

## automatic recompile typescript file 
:- in addition to our workflow here would be to automatically recompile the typescript file whenever there is any change in file. We can do that by using watch option of the typescript compiler.
'tsc <filename> --watch'

after running above mentioned command when ever you save the change to the file it will automatically compile the file

this was overview of typescript how typescript works. As you can see you have a typescript file which get transpiled to a javascript file which is then used in your application 

Let's now focus on the various concepts that javascript brings to the Table 


## variable declarations
:- variable declarations
Unlike Tradtional Javascript, Typescript encourages the use of let T const keywords for variable declarations if you played around the Javascript for a while you probably know how to scope and var declarations can trick you javascript has only global scope and function scope. There is no block label scope. This is something that often mislead programmers used to other languages. To make things worse. It is also not an error to re-declare the same variable in multiple times. 'let' and 'const' declaration solve these problems. Both 'let' and 'const' support block level scoping and you can't re-declare variable multiple times with 'let' or 'const' . 

//e.g
let x = 10;
const y = 20;

// if we redeclare x it will give an error
let x = 30;  

Now the Question is
Q). What is the diffrence between one over other
Ans). 'let' declaration can be done without initialization where as 'const' declaration are always to be initialzed with a value. And 'const' declaration once assigned can never be reassigned. So we can have a declaration 

let sum ; // we can assign 

const title = 'cyberkan' ; // we cann't have. 

We will get an error 'cont' declaration must be initilzed. So when to choose one over other. If you feel a variable must never be reassigned then use 'const' declaration. If not then go with let declaration.
e.g the sum of two numbers can change but title of an application may never change. So 'let' declaration for numbers and 'const' declaration for title.

Typescript alreay helping us to reduce the ammount of both in our code. So that is about variable declaration in typescript.



## variable types

Essence of TypeScript, Basic types in typecript.  Boolean, Number and string

// set datatype of variable 

let isBeginner: boolean = true;  // we have a variable is beginner of type boolean which is initialized with a value of true.

//in the same way we can define a variable number.

let total: number =0;

//in the same way we can define a variable string.

let name: string = 'testing';

In typeScripte you can use template strings. can span multiple lines and has embedded expressions.

"`" mentioned chracter is known as backticks. This is a key just below the escape key`.


// e.g:
let sentence: string = `my name is ${name}
i am a beginner in Typescript`;  

Above mentioned code is known as multiple lines with embeded expresstions. 

booleann, number and strings are the basic type

what is the use of having types?
ans:- there are two important ones.
1). static type checking. you can see that when we try to assign a boolean value to the name variable

name = true;

Lets continue with variable types we have two more Types 'null' and 'undefined' . That you can actullay declare a variable that is of type null or undefined in Typescript.

e.g:-
let n: null = null;
let u: undefined = undefined;

But there are not much use on there own. That is why in typescript null and undefined are classified as subtypes of all other Types that means to say you can assign a value to null or undefined to either boolean number or a string typed variable 

e.g:- 
let isNew: boolean = null;
let myName: string = undefined;

// these will work perfectly fine as well

Building on these basic types and subtypes we can declare an array of values using the array type there are two syntaxes for declaring an array type 
e.g:- 

let list: number[] = [1,2,3];
let list2: Array<number> = [1,2,3];

Sometimes array containes values of mixed ty]pe for that purpose typescript provides the 'tuple type' 
e.g:-

let persion1: [string, number] = ['string1', 55]

We can create a 'tuple type' that contains a 'string' and a 'number' . The thing with  tuple though is the number of elements in the array are fixed . Above mentioned array "persion1" tuple indicates that the array contains exactly one string value and one numeric values. And the order of the values has to mach the order of the types


'enum' type which is a way of giving more friendly names to a set of numeric values. For declaring an 'enum' use 'enum' keyword 
e.g:-
enum color { red, green, blue};

let c:color = color.green;
console.log(c);


Next type of variable is 'any' type. Now if you are ensure as to what a variable type would be. Make use of the any type. If you are expecting a value from a third-party library or user inputs. That the value is dynamic make use of the any type. And that will allow you to reassign diffrent type of values.

e.g:- 
let randomValue: any = 10;
randomValue = true;
randomValue = 'string';

You can see that compiler doesn't throw an error. This is perticularly helpfull when you just migrating from 'Javascript' to 'typeScript' The any type is the most capable type in typeScript. It encompasses values of every possible type and it doesn't force us to do any checkins, before we try to call construct or access properties on these values
e.g:- 

let myVariable: any = 10;
console.log(myVariable.name);
myVariable();
myVariable.toUpperCase();

With myVariable a number of errors can occur. I can call myVariable as a function or i can call a method that is applicable only to string `type myVariable.toUpperCase();` you can see typescript does not throw an error in any of the statement because "myVariable" is of type any. To handle this issue "typescript 3.0" introduced a new type called `unknown` 
"unknown" type is very similar to the "any" type so any value is assignable to type "unknown" 
However you can't access any properties of an unknown type nor can you call or construct them. 
e.g:- 

let myVariable: unknown = 10;
console.log(myVariable.name);
myVariable();
myVariable.toUpperCase();

If I change myVariable to unknown you can see that we get the errors right away. To be able to git rid of the errors we need to use a type `assertion` to convince the type system that we know better so we have to change myVariable as string `(myVariable as string).toUpperCase();` so that now typescript will assume that we have made the necessary check type "assertion" is similar to type "casting" in other languages we are saying that myVariable should be treated as a string and then method to uppercase can be applied and it is also possible to have user defined type gard. I am going to create a function that checks if an object has a name property or not.

e.g:- 
let myVariable: unknown = 10;

function hasName(obj: any): obj is { name: string } {
	return !! obj && 
		typeof obj === "object" && 
		"name" in obj
}

if(hasName(myVariable)) {
	console.log(myVariable.name);
}

(myVariable as string).toUpperCase();

These are the major types in typeScript. Now let's take a look at two concepts that revlove around the types in typeScript

type 'inference' & type 'union' are the two to types we need to discuss.

let's start with type 'inference' if you recollect. I did mentioned earlier that specifying types is completly optional.

let a ;
a = 10;
a = true;

// above mentioned is perfectly fine 



let multitype: number | boolean ;
multitype = 20;
multitype = true;




## functions

## interface

## class

## Access modifiers
