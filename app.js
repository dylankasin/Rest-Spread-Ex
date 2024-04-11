//rest operator and arrow function
const filterOutOdds = (...args) => args.filter(v => v % 2 === 0);

//findMin
const findMin = (...args) => Math.min(...args);

//mergeObjects
const mergeObjects = (obj1, obj2) => ({...obj1, obj2});

//doubleAndReturnArgs
const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(v => v *2)];

//Slice and Dice!
const removeRandom = items => {
  let idx = Math.floor(Math.random() * items.length);
  return [...items.slice(0, idx), ...items.slice(idx + 1)];
}

const extend = (arr1, arr2) => {
  return [...arr1, ...arr2];
}

const addKeyVal = (obj, key, val) => {return {...obj, [key]: val};}

const removeKey = (obj, key) => {
  ({ [key]: undefined, ...obj} = obj);
  return obj;
}

const combine = (obj1, obj2) => {
  return {...obj1, ...obj2};
}

const update = (obj, key, val) => {
  return {...obj, [key]: val };
}