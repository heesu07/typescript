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

// π Only interfaces can be merged with same name
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

// π Type aliases can use computed properties
type Person ={
  name: string,
  age: number,
}
type Name = Person['name']; // string
type NumberType = number;
type Direction = 'left' | 'right'; // union type

/**
 *  inserface λ κ΅¬νμ¬ν­μ μ μνλ μΈ‘λ©΄μμ μ κ·Όνκ³ ,
 *  type μ λ°μ΄ν°μ λͺ¨λ¬μ μΈ‘λ©΄μμ μ¬μ©λλ λ°©ν₯μΌλ‘ μ κ·Όνλ€.
 * 
 * */
