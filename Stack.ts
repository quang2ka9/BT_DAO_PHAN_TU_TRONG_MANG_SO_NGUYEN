export class Stack<T> {
    container: T[] = [];

    constructor() {
    }

    push(item: T): void {
        this.container.push(item);
    }

    pop() {
        return this.container.pop();
    }

    size() {
        return this.container.length;
    }
}