{
  interface Either{
    left: () => number;
    right: () => number;
  }
  class SimpleEither implements Either{
    constructor(private leftValue:number, private rightValue:number){
      
    }
    left(): number{
      return this.leftValue;
    }
    right():number{
      return this.rightValue;
    }

  }
}