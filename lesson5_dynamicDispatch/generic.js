import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs'; // eslint-disable-line
import { l, cons as consList, isEmpty, head, tail } from 'hexlet-pairs-data';
import { attach, typeTag, contents } from './type';

let methods = l();

export const getMethod = (obj, methodName) => {
  // BEGIN (write your solution here)
  const typeCard = typeTag(obj);
  const iter = (list) => {
    if (isEmpty(list)) return null;
    const arg = head(list);
    const typeCardInList = typeTag(arg);
    const methodNameInList = car(contents(arg));
    const funcForMethod = cdr(contents(arg));
    if (typeCard === typeCardInList && methodName === methodNameInList) {
      return funcForMethod;
    }
    return iter(tail(list));
  };
  return iter(methods);
  // END
};

export const definer = type =>
  (methodName, f) => {
    methods = consList(attach(type, cons(methodName, f)), methods);
  };
  