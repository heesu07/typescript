{  
  type CoffeeCup ={
    shots:number,
    hasMilk:boolean,
    remainBeans:number,
  }

  interface CommercialCoffeeMaker{
    makeCoffee(shots:number):CoffeeCup;
    fillCoffeeBean(beans:number):void;
    clean():void;
  }

  interface CoffeeMaker{
    makeCoffee(shots:number):CoffeeCup;    
  }

  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {  
    private BEANS_GRAMM_PER_SHOT:number = 7;

    static makeCoffeeMachine(coffeeBeans:number):CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }
    private coffeeBeans:number; 
    private constructor(beans:number){
      this.coffeeBeans = beans;
    }

    fillCoffeeBean(beans:number){
      if(beans < 0){
        return new Error('the value of beans should be greater than 0 ');
      }
      this.coffeeBeans += beans;
    }   
    private grindBeans(shots:number){
      console.log(`grinding beans for ${shots}`);
       if(this.coffeeBeans < shots*this.BEANS_GRAMM_PER_SHOT){
        throw new Error('Not enough coffeeBeans!');
      }
      this.coffeeBeans -= shots * this.BEANS_GRAMM_PER_SHOT;
    }
    private preHeat():void {
      console.log(`heating up ...`);      
    }
    private extract(shots:number): CoffeeCup {
      console.log(`Pulling ${shots} shots...`);
      return {
          shots,
          hasMilk: false,
          remainBeans:this.coffeeBeans,
      };
    }
    makeCoffee(shots: number):CoffeeCup {
      console.log(`===========Coffee============`);      
      this.grindBeans(shots);
      this.preHeat();      
      return this.extract(shots);      
    }
    clean(){
      console.log('cleanning the machine');
      
    }
  }

  class AmateurUser{
    constructor(private machine:CoffeeMaker) {};
    makeCoffee(){
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
    }
  }
  
  class ProBarista {
    constructor(private machine:CommercialCoffeeMaker){}
    makeCoffee(){
      const coffee =this.machine.makeCoffee(2);
      console.log(coffee);
      this.machine.fillCoffeeBean(20);
      this.machine.clean();
    }
  }

  const maker: CoffeeMachine = CoffeeMachine.makeCoffeeMachine(10);
  maker.fillCoffeeBean(32);
  console.log(maker.makeCoffee(3));
    
  const maker2: CommercialCoffeeMaker = CoffeeMachine.makeCoffeeMachine(10);
  maker2.fillCoffeeBean(10);
  console.log(maker2.makeCoffee(1));
  maker2.clean();
  
  
  
}