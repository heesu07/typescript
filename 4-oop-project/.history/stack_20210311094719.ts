{
  interface IStack{
    readonly size:number;
    push(str:string):void;
    pop():string | undefined;
  }
  class LinkedList{
    constructor(str?: string){
      this.value = str;
    }
    prev?:LinkedList;
    next?:LinkedList;
    value?:string;
  }
  class Stack implements IStack {  
    current:LinkedList ;    
    size:number = 0;
    stack:LinkedList;

    push(str:string):void{
      this.size++;
      const node = new LinkedList(str);
      this.current.next = node;
      node.prev = this.current;
      this.current = node;
    }
    pop():string | undefined {
      if(this.size === 0) return "";
      this.size--;
      const value = this.current.value;
      if(this.current.prev) {
        this.current = this.current.prev;
      }
      this.current.next = undefined;
      return value;
    }
  }

  const stack = new Stack();
  stack.push('1');
  stack.push('2');
  stack.push('3');
  stack.push('4');

  console.log(stack.pop());
  console.log(stack.pop());
  console.log(stack.pop());
  console.log(stack.pop());
   
}

