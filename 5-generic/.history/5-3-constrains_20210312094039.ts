{
  interface Employee {
    pay():void;
  }

  class FullTimeEmployee implements Employee{
    pay(){
      console.log(`full time!`);      
    }
    workFulltime(){}
  }

  class PartTimeEmployee implements Employee{
    pay(){
      console.log(`part time!`);      
    }
    workParttime(){}
  }

  //case A : 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 
  //         다시 리턴하는 함수는 안좋다.
  function payBad(employee:Employee):Employee{
    employee.pay();
    return employee;
  }
  const ellie = new FullTimeEmployee();
  ellie.workFulltime(); // 가능
  const ellieAfterPayBad = payBad(ellie);
  // ellieAfterPayBad.workFulltime(); 불가능

  //case B : 계속해서 사용 할 수 있다.
  //        (제네릭에 constrain: Employee의 상속 제약을 부여 함으로써)
  function payGood<E extends Employee>(employee: E): E{
    employee.pay();
    return employee;
  }
  const daniel = new PartTimeEmployee();
  daniel.workParttime();
  const danielAfterPay = payGood(daniel);
  danielAfterPay.workParttime();

  const obj ={
    name: 'ellie',
    age: 20,
  };
  function getValue<T, K extends keyof T>(obj:T, key:K): T[K] {
    return obj[key];
  }
  console.log(getValue(obj, 'name'));
  console.log(getValue(obj, 'age'));

  
  

}