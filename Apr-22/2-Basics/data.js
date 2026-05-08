// var

// var no;
// no=10;
// console.log(no);     //output:10

// var no;
// console.log(no);     //output:undefined

// no=10;
// var no;
// console.log(no);     //hosting output:10

// console.log(no);
// no=10;               //error

// console.log(no);
// var no=10;           //output:undefined

// console.log(no);
// no=10;
// var no;              //output:undefined

// no=10;
// console.log(no);
// var no;              //output:10

// console.log(no);
// var no;              //output:undefined


// let

// let no;
// no=20;
// console.log(no);     //output:20

// let no;
// console.log(no);     //output:undefined

// no=10;
// let no;
// console.log(no);     //error

// no=10;
// console.log(no);     //output:10

// console.log(no);
// let no=10;           //output:error

// console.log(no);
// no=10;
// let no;              //output:error

// no=10;
// console.log(no);
// let no;              //error

// console.log(no);
// let no;              //error


// const

// const no;
// no=20;
// console.log(no);     //error

// const no;
// console.log(no);     //error

// no=10;
// const no;
// console.log(no);     //error

// no=10;
// console.log(no);     //output:10

// console.log(no);
// const no=10;           //output:error

// console.log(no);
// no=10;
// const no;              //output:error

// no=10;
// console.log(no);
// const no;              //error

// console.log(no);
// const no;              //error



// variable hoisting in function

// function printNum(){
//     var no=10;
//     console.log(no);
// }
// printNum();
// console.log(no);         //print 10 when call sum(), then throw error for 2nd console

// printNum();
// function printNum(){
//     var no=10;
//     console.log(no);
// }                       //print 10, in js function declaration hoisted on top of their scope

// var no=10;
// printNum();
// function printNum(){
//     console.log(no);
// }                       //print 10;

// printNum();
// function printNum(){
//     console.log(no);
// } 
// var no=10;              //undefined;


// function printNum(){
//     let no=10;
//     console.log(no);
// }
// printNum();
// console.log(no);         //print 10 when call sum(), then throw error for 2nd console no is not defined

// printNum();
// function printNum(){
//     let no=10;
//     console.log(no);
// }                       //print 10, in js function declaration hoisted on top of their scope

// let no=11;
// printNum();
// function printNum(){
//     console.log(no);
// }                       //print 11;

// printNum();
// function printNum(){
//     console.log(no);
// } 
// let no=10;              //error: reference error cannot access 'no' before initialization;


// printNum();
// function printNum(){
//     console.log(no);
// } 
// const no=10;              //error;


// function printNum(){
//     const no=10;
//     console.log(no);
// }
// printNum();
// console.log(no);         //print 10 when call sum(), then throw error for 2nd console no is not defined

// printNum();
// function printNum(){
//     const no=10;
//     console.log(no);
// }                       //print 10, in js function declaration hoisted on top of their scope

// const no=12;
// printNum();
// function printNum(){
//     console.log(no);
// }                       //print 12;

// printNum();
// function printNum(){
//     console.log(no);
// } 
// const no=10;              //error: reference error cannot access 'no' before initialization;


