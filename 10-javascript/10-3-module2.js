// default 인 경우 괄호 없이 가져올 수 있으나, 
// 그 이외의 경우 괄호가 있어야 한다.
import sum from './10-3-module1.js';
import { print as printMsg, pi } from './10-3-module1.js';

console.log(sum(4,5));
printMsg(pi);