// Generic 을 통한 api 읽기 every, some  등..

class Animal{}
class Cat extends Animal{
  isCat: boolean =true;
}
class Dog extends Animal{
  isDog:boolean = true;
}

const animals: Animal[] = [new Cat(), new Cat(), new Cat()];

function isCat(animal:Animal): animal is Cat{
  return (animal as Cat).isCat !== undefined;
}
console.log(animals.every<Cat>(isCat));

