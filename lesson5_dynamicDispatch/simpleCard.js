import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs'; // eslint-disable-line
import { definer } from './generic';
import { attach } from './type';

// BEGIN (write your solution here)
const defmethod = definer('SimpleCard'); // получили тип карты

const make = (name, health) =>
  attach('SimpleCard', cons(name, health)); // создали простую карту 

export default make; // и экспортировали ее

defmethod('getName', self => car(self)); // ('SimpleCard', cons('getName', self => car(self)), l())

defmethod('damage', (self, health) => cdr(self));

// END
