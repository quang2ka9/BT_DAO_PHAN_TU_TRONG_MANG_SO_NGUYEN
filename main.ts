import {Stack} from "./Stack";

let stack = new Stack();
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)
stack.push(6)

let loopTimes = stack.size();
let list: any = [];
let temp;
for (let i = 0; i < loopTimes; i++) {
    temp = stack.pop()
    list.push(temp)
}
for (let i = 0; i < list < list.length; i++) {
    stack.push(list[i])
}
console.log(stack)