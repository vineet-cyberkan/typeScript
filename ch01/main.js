"use strict";
exports.__esModule = true;
var msg = 'hello world';
console.log(msg);
//e.g
var x = 10;
var y = 20;
var sum;
var title = 'cyberkan';
var total = 0;
var name = 'testing';
var sentence = "my name is " + name + "\nI am a beginner in Typescript";
console.log(sentence);
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
var list = [1, 2, 3];
var list2 = [1, 2, 3];
var persion1 = ['string1', 55];
var color;
(function (color) {
    color[color["red"] = 9] = "red";
    color[color["green"] = 10] = "green";
    color[color["blue"] = 11] = "blue";
})(color || (color = {}));
;
var c = color.green;
console.log(c);
var randomValue = 10;
randomValue = true;
randomValue = 'string';
/*let myVariable: any = 10;
console.log(myVariable.name);
myVariable();
myVariable.toUpperCase();*/
var myVariable = 10;
function hasName(obj) {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj;
}
if (hasName(myVariable)) {
    console.log(myVariable.name);
}
myVariable.toUpperCase();
var a;
a = 10;
a = true;
var multitype;
multitype = 20;
multitype = true;
