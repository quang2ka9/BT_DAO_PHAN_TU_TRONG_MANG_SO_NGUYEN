"use strict";
exports.__esModule = true;
var Stack_1 = require("./Stack");
var stack = new Stack_1.Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);
var loopTimes = stack.size();
var list = [];
var temp;
for (var i = 0; i < loopTimes; i++) {
    temp = stack.pop();
    list.push(temp);
}
for (var i = 0; i < list < list.length; i++) {
    stack.push(list[i]);
}
console.log(stack);
