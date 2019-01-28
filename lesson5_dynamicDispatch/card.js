import { getMethod } from './generic';
import { contents } from './type';

export const getName = self =>
  getMethod(self, 'getName')(contents(self)); // получаем на вход помеченную карту 
  // self = attach('SimpleCard', cons('Королевский хлыст шанса', 6));
  // contents(self) = cons(name, health);
  // getName должна возвращать car(contents(self))
  // то есть getMethod(self, 'getName') - должен возвращать функцию, которая применится к самой карте cons(name, health), например car
 
// BEGIN (write your solution here)
export const damage = (self, health) => 
  getMethod(self, 'damage')(contents(self)); // здесь getMethod(self, 'damage') должен также возвращать функцию, например для простой карты cdr
// END