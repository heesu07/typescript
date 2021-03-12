{
  class Stack {  
    private sp:number = 0;
    private stack:string[] = [];
    push(str:string):void{
      this.stack[this.sp++] = str;
    }
    pop():string | undefined {
      if(this.sp === 0) return undefined;
      return this.stack[this.sp-- - 1];
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

