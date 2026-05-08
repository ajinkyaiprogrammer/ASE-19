// let x = 5;
// try {
//   x = y + 1;
//   console.log(x);
// } catch(err) {
//   let text = err.name+" "+err.message;
//   console.log(text);
// }

// try {
//   let x = y;
//   var y = 5;
//   console.log(x);
// } catch(err) {
//   console.log(err);
// }

// try {
//   let x = y;
//   let y = 5;
//   console.log(x);
// } catch(err) {
//   console.log(err.name);
// }

// var num = parseInt("abc"); //this line not throw exception this is called silent errors
// console.log(num);
// console.log("works");

// let user={};
// let result=user.name; //this line also not throw exception it is also a silent error
// console.log(result);
// console.log('work fine');

// let result=("5"-"2");//here js convert string to number and perform subtraction and give result as 3 but it is not an error it is a silent error
// console.log(result);

// let result2=("5"+"2");//here js convert number to string and perform concatenation and give result as 52 but it is not an error it is a silent error
// console.log(result2);

// var x = 11;
// try {
//   if (isNaN(x)) throw "not a number";
//   x = Number(x);
//   if (x < 5) throw "too low";
//   if (x > 10) throw "too high";
//   console.log("input is valid");
// } catch (err) {
//   console.log(err);
// }

// const userURL = "https://example.com";
// try {
//   const decoded = decodeURI(userURL);
//   console.log(decoded); // "https://example.com shop"
// } catch (error) {
//   console.error("The URL was malformed!", error);
// }

