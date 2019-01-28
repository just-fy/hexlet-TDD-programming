import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs'; // eslint-disable-line
import { l, cons as consList, isEmpty, head, tail } from 'hexlet-pairs-data';
import { attach, typeTag, contents } from './type';

let methods = l();

// getMethod должен достать метод, который относится к помеченной карте и применить его к contents(obj)
// obj = self = attach('SimpleCard', cons('Королевский хлыст шанса', 6));
// methodName = 'getName' or 'damage'
export const getMethod = (obj, methodName) => {
  // BEGIN (write your solution here)
  
  //const nameTypeTagReceivedCard = car(obj); // взяла тип полученной карты; мне нужно, чтобы тип полученной карты и метод нашлись в списке методов
  //const nameMethodInListMethods = cdr(car(first)); // нашла название метода 
  (func) => {
    const iter = (list) => {
    if (isEmpty(list)) return null;
    
    const first = head(methods);
    if (car(obj) === car(first) && methodName === cdr(car(first))) {
      func = cdr(cdr(first));
    }
    return iter(tail(list));
  }
  return iter(methods);
  }
  // END
};

export const definer = type =>
  (methodName, f) => {
    methods = consList(attach(type, cons(methodName, f)), methods); // возвращает список методов, относящихся к тому типу карты, который передали 
    //в качестве первого аргумента, например ('SimpleCard', cons('getName', self => car(self)), l())
  };
  console.log(toString(methods));
