import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs'; // eslint-disable-line no-unused-vars

export const attach = (tag, data) => cons(tag, data);
export const typeTag = taggedData => car(taggedData);
export const contents = taggedData => cdr(taggedData);
