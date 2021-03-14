type PositionType = {
  x:number;
  y:number;
};
const obj1: PositionType ={
  x: 3, 
  y: 5,
};

// class
class Pos1 implements PositionType {
  x:number;
  y:number;
};
class Pos2 implements PositionInterface{
  x:number;
  y:number;
  z:number;
}
// Extends
interface ZPositionInterface extends PositionInterface{
  z:number;
}
type ZPositionType = PositionType & {z:number};

// 🍟 Only interfaces can be merged with same name
interface PositionInterface{
  x:number;
  y:number;
}
// const obj2: PositionInterface ={
//   x: 3,
//   y: 5,
// }
interface PositionInterface{
  z:number;
}
const obj2: PositionInterface ={
  x: 3,
  y: 5,
  z: 7,
}

// 🍟 Type aliases can use computed properties
type Person ={
  name: string,
  age: number,
}
type Name = Person['name']; // string
type NumberType = number;
type Direction = 'left' | 'right'; // union type

/**
 *  inserface 는 구현사항을 정의하는 측면에서 접근하고,
 *  type 은 데이터의 모듬의 측면에서 사용되는 방향으로 접근한다.
 * 
 * */
