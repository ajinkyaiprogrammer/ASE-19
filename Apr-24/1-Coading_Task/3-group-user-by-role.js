const users = [
  { name: "Anil", role: "Admin" },
  { name: "Sunil", role: "User" },
  { name: "Rita", role: "Admin" },
  { name: "Karan", role: "User" },
  { name: "Pooja", role: "Manager" },
];

// let adminList=[];
// users.forEach((user)=>{
//     if(user.role==='Admin')
//         adminList.push(user.name);
// });
// let userList=[];
// users.forEach((user)=>{
//     if(user.role==='User')
//         userList.push(user.name);
// });
// let managerList=[];
// users.forEach((user)=>{
//     if(user.role==='Manager')
//         managerList.push(user.name);
// });
// console.log("Admin : "+adminList);
// console.log("User : "+userList);
// console.log("Manager : "+managerList);

// const admin=users.filter(a=>a.role==='Admin').map(a=>a.name);
// console.log("Admin = "+admin);
// const user=users.filter(a=>a.role==='User').map(a=>a.name);
// console.log("User = "+user);
// const manager=users.filter(a=>a.role==='Manager').map(a=>a.name);
// console.log("Manager = "+manager);

const roles = new Map();

users.forEach((user) => {
  if (!roles.has(user.role)) {
    roles.set(user.role, [user.name]);
  } else {
    roles.get(user.role).push(user.name);
  }
});
// console.log(roles);

for (let key of roles.keys()) {
  console.log(key +" -> "+ roles.get(key));
}
