// const arr = [1, [2, [3, 4], 5], [6, 7], 8];
// const arr2=arr.flat(Infinity);
// console.log(arr2);

const arr = [1, [2, [3, 4], 5], [6, 7], 8];
const arr2=arr.toString().split(',').map(Number); //Number constructor, converting each string element back into a numeric type
console.log(arr2);