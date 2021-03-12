{  
  type CoffeeCup ={
    shots: number,
    hasMilk?: boolean,
    hasSuger?: boolean,
    remainBeans:number,
  }

  interface MilkForther{
    makeMilk(cup:CoffeeCup):CoffeeCup;
  }
  interface SugarProvider{
    addSuger(cup:CoffeeCup):CoffeeCup;
  }

  class CheapMilkSteamer implements MilkForther{
    private steamMilk():void{
      console.log('Steaming some milk...🥛');      
    }    
    makeMilk(cup:CoffeeCup):CoffeeCup{      
      this.steamMilk();
      return {
        ...cup,
        hasMilk:true,
      } 
    }
  }
  class CandySugerMixer implements SugarProvider{
    private getSuger(){
      console.log('Getting some suger from candy');      
    }
    addSuger(cup:CoffeeCup):CoffeeCup{
      const suger = this.getSuger();
      return{
        ...cup,
        hasSuger:true,
      };
    }
  }

  class CaffeLatteMachine extends CoffeeMachine{
    constructor(
      beans:number, 
      cheapMilkMixer:MilkForther){
      super(beans);
    }    
    makeCoffee(shots:number):CoffeeCup{
      const coffee = super.makeCoffee(shots);
      return cheapMilkSteamer.makeMilk(coffee);
    }
  }
  class SweetCoffeeMaker extends CoffeeMachine{
    constructor(beans:number,      
      private suger:SugarProvider){
      super(beans);
    }
    makeCoffee(shots:number):CoffeeCup{
      const coffee =super.makeCoffee(shots);
      return this.suger.addSuger(coffee);
    }
  }
  class SweetCaffeLatteMachine extends CoffeeMachine {
    constructor(
      private beans:number,
      private milk:MilkForther,
      private suger:SugarProvider){
        super(beans);
      }
      makeCoffee(shots:number):CoffeeCup{
        const coffee = super.makeCoffee(shots);
        return this.milk.makeMilk(this.suger.addSuger(coffee));
      }
  }

  const cheapMilkSteamer = new CheapMilkSteamer();
  const candySuger = new CandySugerMixer();
  const sweetCoffeeMaker = new SweetCoffeeMaker(12, candySuger);
  const latteMachine = new CaffeLatteMachine(12, cheapMilkSteamer);
  const sweetCaffeLatteMachine = 
      new SweetCaffeLatteMachine(12, cheapMilkSteamer, candySuger);

  
  sweetCoffeeMaker.makeCoffee(2);
  latteMachine.makeCoffee(3);
  sweetCaffeLatteMachine.makeCoffee(4);

  
  
  

  
  
}