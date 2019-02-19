// BEGIN (write your solution here)
const make = (name, damagePoints) => (message) => {
  switch (message) {
    case 'getName':
      return name;
    case 'damage':
      return damagePoints;
    default:
      return 'undefined method';
  }
};

export default make;
// END