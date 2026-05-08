const sentence = "JavaScript is powerful for backend and frontend development";

const word=sentence.split(" ");
let long="";
word.forEach((item)=>{
    if(item.length>long.length){
        long=item;
    }
});
console.log(long);

// const longWord = sentence.split(" ").reduce((a, b) => (a.length > b.length ? a : b));
// console.log(longWord);
