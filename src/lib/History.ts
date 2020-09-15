export default class History<T> {
  capacity: number;
  stack: T[];

  constructor(capacity: number = -1) {
    this.capacity = capacity;
    this.stack = [];
  }

  push(historyPoint: T): void {
    this.stack.push(historyPoint);
    if (this.capacity > 0 && this.capacity < this.stack.length) {
      this.stack.splice(0, this.stack.length - this.capacity);
    }
  }

  pop(): T | undefined {
    return this.stack.pop();
  }

  get length(): number {
    return this.stack.length;
  }
}
