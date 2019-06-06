export {}

let msg = 'hello world';
console.log(msg);


//e.g
let x = 10;
const y = 20;

let sum;
const title = 'cyberkan';

let total: number =0;

let name: string = 'testing';

let sentence: string = `my name is ${name}
I am a beginner in Typescript`; 

console.log(sentence);

let n: null = null;

let u: undefined = undefined;


let isNew: boolean = null;
let myName: string = undefined; 

let list: number[] = [1,2,3];
let list2: Array<number> = [1,2,3];

let persion1: [string, number] = ['string1', 55];


enum color { red=9, green, blue};

let c:color = color.green;
console.log(c);

let randomValue: any = 10;
randomValue = true;
randomValue = 'string';

/*let myVariable: any = 10;
console.log(myVariable.name);
myVariable();
myVariable.toUpperCase();*/




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


let a ;
a = 10;
a = true;

let multitype: number | boolean ;
multitype = 20;
multitype = true;


// working on functions
function add(num1:number, num2:number): number {
    return num1 + num2;
}

add(5, 15);