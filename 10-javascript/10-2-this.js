console.log(this);

function simpleFunc(){
  console.log(this);
}
simpleFunc();

class Counter{
  count = 0;
  // increase = function (){
  //   console.log(this);
  // }
  increase = () =>console.log(this); //현재의 this를 기억한다.
}
const counter = new Counter();
counter.increase();
const caller = counter.increase; // this 를 잃는다.
//const caller = counter.increase.bind(counter); // counter 에 묶는다.
caller(); //undefined

class Bob{

}
const bob = new Bob();
//bob.run = counter.increase;
bob.run = counter.increase.bind(counter);
bob.run();
/**
 * 위의 this를 잃어 버리는 문제를 해결하기위한 방법으로는
 * 아래와 같이 arrow function 을 사용할 수 있다.
 * 
 */
