import { map, toString } from 'hexlet-pairs-data';
import { getAttribute, getName } from './tags';

// BEGIN (my solution)
const obj = {
  a: 'href',
  link: 'href',
  img: 'src',
};
const extract = tags => map((tag) => {
  const nameTag = getName(tag);
  const nameAttribute = obj[nameTag];
  return getAttribute(nameAttribute, tag);
}, tags);

export default extract;
// END

// BEGIN (teacher's solution)
const mapping = {
  img: t => getAttribute('src', t),
  a: t => getAttribute('href', t),
  link: t => getAttribute('href', t),

};
export default tags => map(tag => mapping[getName(tag)](tag), tags);
// END