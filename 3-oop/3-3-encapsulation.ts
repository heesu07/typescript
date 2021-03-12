{  
  type CoffeeCup ={
    shots:number,
    hasMilk:boolean,
    remainBeans:number,
  }

  class CoffeeMachine {  
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
    makeCoffee(shots: number):CoffeeCup {
      if(this.coffeeBeans < shots*this.BEANS_GRAMM_PER_SHOT){
        throw new Error('Not enough coffeeBeans!');
      }
      this.coffeeBeans -= shots * this.BEANS_GRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
        remainBeans:this.coffeeBeans,
      }
    }
  }


  // const machine2 = CoffeeMachine.makeCoffeeMachine(50);
  // const result2 = machine2.makeCoffee(5);
  // console.log(result2);
    

  class User {
    get fullName():string{
      return `${this.firstName} ${this.lastName}`;
    }   
    private _age:number;
    // Getter, Setter
    get age(){
      return this._age;      
    }
    set age(value:number){
      this._age = value;
    }
    constructor(private firstName:string,private lastName:string) {
      this.firstName=firstName;
      this.lastName=lastName;      
    }

    
  }
  const user = new User('Steve', 'Jobs');
  console.log(user.fullName);
  user.age =10;
  console.log(user.age);
  
  console.log(user.fullName);
  
  
}