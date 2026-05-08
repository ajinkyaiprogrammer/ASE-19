const numbers = [1,2,3,4,6,7,8];

function getMissing(arr){
    const totalElement= arr.length+1;
    const totalSum= totalElement*(totalElement+1)/2;
    let sum = 0;
    for(let i of arr){
        sum += i;
    }
    const missingNumber = totalSum-sum;
    return missingNumber;
}
console.log("Missing number is "+getMissing(numbers));