const numbers= new Set([1,2,3]);
numbers.add(4);
console.log(numbers);
numbers.add(4);
console.log(numbers.size);

let num=numbers.has(4);
console.log(num);

let myNum=numbers.values();
for(const n of myNum){
    console.log(n);
}
let obj={
    name:"ajinkya",
    last:"anwade",
    age:26
};
let obj1={
    name:"aji",
    last:"an",
    age:27
};
let newSet=new Set([obj,obj1]);
console.log(newSet);

let sets= new WeakSet();
sets.add(obj);
sets.add(obj1);

console.log(sets);
console.log(sets.has(obj));