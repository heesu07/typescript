{
  interface IStack{
    readonly size:number;
    push(str:string):void;
    pop():string ;
  }
  type StackNode ={
    readonly value: string;
    readonly next?: StackNode;
  }

  class Stack implements IStack{
    private _size: number = 0;
    private head?: StackNode;
    get size(){
      return this._size;
    }
    push(value:string):void{
      const node: StackNode = {value:value, next: this.head}
      this.head = node;
      this._size++;
    }

    pop():string{
      if(this.head == null){ // null == undefined = true
        throw new Error("Stack is empty!");
      }
      const node = this.head;
      this.head = this.head?.next;
      this._size--;
      return node.value;
    }
  }

  // class LinkedList{
  //   constructor(str: string){
  //     this.value = str;
  //   }
  //   prev?:LinkedList;
  //   next?:LinkedList;
  //   value:string;
  // }
  // class Stack implements IStack {  
  //   current:LinkedList = new LinkedList('BASE');    
  //   size:number = 0;  

  //   push(str:string):void{
  //     this.size++;
  //     const node = new LinkedList(str);
  //     this.current.next = node;
  //     node.prev = this.current;
  //     this.current = node;
  //   }
  //   pop():string {
  //     if(this.size === 0) return "";
  //     this.size--;
  //     const value = this.current.value;
  //     if(this.current.prev) {
  //       this.current = this.current.prev;
  //     }
  //     this.current.next = undefined;
  //     return value;
  //   }
  // }

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

