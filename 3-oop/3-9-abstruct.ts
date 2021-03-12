{  
  type CoffeeCup ={
    shots: number,
    hasMilk?: boolean,
    hasSuger?: boolean,
    remainBeans:number,
  }

  interface CoffeeMaker{
    makeCoffee(shots:number):CoffeeCup;
  }

  

  class CoffeeMachine implements CoffeeMaker {  
    public coffeeBeans:number; 
    public BEANS_GRAMM_PER_SHOT:number = 7;

    static makeCoffeeMachine(coffeeBeans:number):CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }
    
    public constructor(beans:number){
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
          hasSuger: false,
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

  class CaffeLatteMachine extends CoffeeMachine{
    private steamMilk():void{
      console.log('steaming some milk');
      
    }
    makeCoffee(shots:number):CoffeeCup{
      const coffee = super.makeCoffee(shots);
      return{
        ...coffee,
        hasMilk: true,
      }
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine{
    constructor(beans:number,public sugar:number){
      super(beans);
    }
    makeCoffee(shots:number):CoffeeCup{
      const coffee =super.makeCoffee(shots);
      return{
        ...coffee,
        hasSuger:true,
      }
    }
  }

  const machine:CoffeeMaker[] =[
    new CoffeeMachine(16),
    new CaffeLatteMachine(16),
    new SweetCoffeeMaker(16,10),
    new CoffeeMachine(16),
    new CaffeLatteMachine(16),
    new SweetCoffeeMaker(16,10)
  ];

  machine.forEach(machine => {
    console.log(`-----------------------------`);
    machine.makeCoffee(1);    
  })
  


  
  
}