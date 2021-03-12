{
  interface IStack{
    readonly size:number;
    push(str:string):void;
    pop():string | null;
  }
  class LinkedList{
    constructor(str: string | null){
      this.value = str;
    }
    prev?:LinkedList;
    next?:LinkedList;
    value?:string;
  }
  class Stack implements IStack {  
    sp:LinkedList = new LinkedList(null);    
    size:number = 0;
    stack:LinkedList;

    push(str:string):void{
      this.size++;
      const node = new LinkedList(str);
      this.sp.next = node;
      node.prev = this.sp
    }
    pop():string | null {
      if(this.size === 0) return null;
      this.size--;
      const value = this.sp.value;
      if(this.sp.prev !== null) {
        this.sp = this.sp.prev;
      }
      this.sp.next = null;
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

