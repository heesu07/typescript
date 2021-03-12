{
  interface Either<LEFT, RIGHT>{
    left: () => LEFT;
    right: () => RIGHT;
  }
  class SimpleEither<LEFT, RIGHT> implements Either{
    constructor(private leftValue:LEFT, private rightValue:RIGHT){
      
    }
    left<LEFT>(): LEFT{
      return this.leftValue;
    }
    right<RIGHT>():RIGHT{
      return this.rightValue;
    }

  }
}