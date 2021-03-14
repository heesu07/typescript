
export default function add(a, b) {
  return a + b;
}

export function print(str){
  console.log(str);
}

export const pi = 3.141592;
/**
 *  오직 한나만 default로 export 가능하고 나머진 ,
 *  고유 명으로 export 한다.
 * 
 *  만약 모든 함수를 default 없이 사용한다면 
 *  import 부분에서
 *  import * as calc from './module1.js';
 *  이후 
 *  calc.add(2,3);
 *  calc.print(); 
 *  와 같이 사용 할 수 있다.
 */