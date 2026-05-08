const employees = [
  { name: "Rahul", salary: 50000 },
  { name: "Amit", salary: 70000 },
  { name: "Neha", salary: 65000 },
  { name: "Priya", salary: 80000 },
  { name: "Vikram", salary: 80000 },
];

// employees.sort((a,b)=>b.salary-a.salary);
// console.log(employees[1].salary);

// function secondHighest(empArray){
//     let max=-1;
//     let secondMax=-1;
//     empArray.forEach((item)=>{
//         if(item.salary>max){
//             secondMax=max;
//             max=item.salary;
//         }else if(item.salary>secondMax && item.salary<max){
//             secondMax=item.salary;
//         }
//     });
//     return secondMax;
// }
// console.log(secondHighest(employees));

// function getSalary(employees, number) {
//   const uniqueValue = new Set(
//     employees.map((emp) => emp.salary).sort((a, b) => b - a),
//   );
//   const items = [];
//   uniqueValue.forEach((item) => {
//     items.push(item);
//   });
//   const highSalary = items[number - 1];
//   return highSalary;
// }
// console.log(getSalary(employees, 2));
