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
    
    public constructor(
      beans:number,
      private milk:MilkForther,
      private suger:SugarProvider){
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
      const coffee = this.extract(shots);  
      const sugerAdded=suger.addSuger(coffee);
      return this.milk.makeMilk(sugerAdded);    
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
  class FancyMilkSteamer implements MilkForther{
    private steamMilk():void{
      console.log('Fancy Steaming some milk...🥛');      
    }    
    makeMilk(cup:CoffeeCup):CoffeeCup{      
      this.steamMilk();
      return {
        ...cup,
        hasMilk:true,
      } 
    }
  }
  class ColdMilkSteamer implements MilkForther{
    private steamMilk():void{
      console.log('Cold Steaming some milk...🥛');      
    }    
    makeMilk(cup:CoffeeCup):CoffeeCup{      
      this.steamMilk();
      return {
        ...cup,
        hasMilk:true,
      } 
    }
  }
  class NoMilk implements MilkForther{
    makeMilk(cup:CoffeeCup):CoffeeCup{
      return cup;
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
  class SugerMixer implements SugarProvider{
    private getSuger(){
      console.log('Suger Getting some suger from candy');      
    }
    addSuger(cup:CoffeeCup):CoffeeCup{
      const suger = this.getSuger();
      return{
        ...cup,
        hasSuger:true,
      };
    }
  }
  class NoSuger implements SugarProvider{
    addSuger(cup:CoffeeCup):CoffeeCup{
      return cup;
    }
  }
  const cheapMilkSteamer = new CheapMilkSteamer();
  const fancyMilkSteamer = new FancyMilkSteamer();
  const coldMilkSteamer = new ColdMilkSteamer();
  const candySuger = new CandySugerMixer();
  const suger = new SugerMixer();

  const sweetCoffeeMaker1 = new CoffeeMachine(52, new NoMilk(), candySuger);
  const sweetCoffeeMaker2 = new CoffeeMachine(52, new NoMilk(), suger);
  const latteMachine = new CoffeeMachine(52, cheapMilkSteamer, new NoSuger());
  const sweetCaffeLatteMachine = new CoffeeMachine(52, coldMilkSteamer, suger);

  sweetCoffeeMaker1.makeCoffee(1);
  sweetCoffeeMaker2.makeCoffee(2);
  latteMachine.makeCoffee(3);
  sweetCaffeLatteMachine.makeCoffee(4);

  
  
  

  
  
}