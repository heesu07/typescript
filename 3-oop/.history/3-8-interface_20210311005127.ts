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
  class CandySugerMixer{
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
    constructor(beans:number, cheapMilkMixer:CheapMilkSteamer){
      super(beans);
    }    
    makeCoffee(shots:number):CoffeeCup{
      const coffee = super.makeCoffee(shots);
      return cheapMilkSteamer.makeMilk(coffee);
    }
  }
  class SweetCoffeeMaker extends CoffeeMachine{
    constructor(beans:number,      
      private suger:CandySugerMixer){
      super(beans);
    }
    makeCoffee(shots:number):CoffeeCup{
      const coffee =super.makeCoffee(shots);
      return this.milk.makeMilk(coffee);
    }
  }
  class SweetCaffeLatteMachine extends CoffeeMachine {
    constructor(
      private beans:number,
      private milk:CheapMilkSteamer,
      private suger:CandySugerMixer){
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
  const sweetCaffeLatteMachine = new SweetCaffeLatteMachine(12, cheapMilkSteamer, candySuger);

  


  
  
}