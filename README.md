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

## functions

## interface

## class

## Access modifiers
