{
  

  type CoffeeCup ={
    shots:number,
    hasMilk:boolean,
    remainBeans:number,
  }

  class CoffeeMachine {  
    static BEANS_GRAMM_PER_SHOT:number = 7;
    static coffeeBeans:number; 
    constructor(beans:number){
      CoffeeMachine.coffeeBeans = beans;
    } 

    static makeCoffeeMachine(coffeeBeans:number):CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }
    setCoffeeBean(beans:number):void{
      CoffeeMachine.coffeeBeans += beans;
    }    
    makeCoffee(shots: number):CoffeeCup {
      if(CoffeeMachine.coffeeBeans < shots*CoffeeMachine.BEANS_GRAMM_PER_SHOT){
        throw new Error('Not enough coffeeBeans!');
      }
      CoffeeMachine.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
        remainBeans:CoffeeMachine.coffeeBeans,
      }
    }
  }

  const machine1 = new CoffeeMachine(30);
  const result = machine1.makeCoffee(3);
  console.log(result);

  const machine2 = CoffeeMachine.makeCoffeeMachine(50);
  const result2 = machine2.makeCoffee(5);
  console.log(result2);
    
}